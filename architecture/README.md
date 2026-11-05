# Architecture NexaMeet

> **Nature du document :** architecture cible proposée, dérivée du catalogue fonctionnel.
> Les composants explicitement nommés dans le catalogue sont **spécifiés** ; les autres
> choix sont des **propositions** clairement identifiées.

## Vue d'ensemble

NexaMeet est une application web multi-espaces (*multi-tenant*) composée de :

- une **application web responsive** ;
- une **API backend** centralisant l'authentification, les permissions et la logique métier ;
- un **canal temps réel** pour la messagerie, la présence et les notifications ;
- des **workers asynchrones** pour la transcription et l'IA ;
- des **services d'infrastructure** : PostgreSQL, Redis, MinIO et LiveKit ;
- des **services externes** : Whisper et un LLM.

```mermaid
flowchart TB
    subgraph Client["Client"]
        WEB["Application web responsive<br/>Desktop · Tablette · Mobile"]
    end

    subgraph Plateforme["Plateforme NexaMeet"]
        API["API Backend<br/>REST · Auth · RBAC · Validation"]
        RT["Temps réel<br/>WebSocket · présence · saisie"]
        Q["File de jobs<br/>BullMQ"]
        W["Workers<br/>Transcription · IA"]
    end

    subgraph Donnees["Données"]
        PG[("PostgreSQL<br/>Métadonnées")]
        RD[("Redis<br/>Cache · files · pub/sub")]
        MO[("MinIO<br/>Fichiers · enregistrements")]
    end

    subgraph Services["Services externes"]
        LK["LiveKit<br/>Audio · vidéo · egress"]
        WH["Whisper<br/>Speech-to-text"]
        LLM["LLM<br/>Résumé · décisions · actions"]
    end

    WEB <-->|HTTPS| API
    WEB <-->|WebSocket| RT
    API --> PG
    API --> RD
    API --> MO
    API --> LK
    RT <--> RD
    API --> Q
    Q --> W
    W --> MO
    W --> WH
    W --> LLM
    LK -->|Webhooks| API
    LK -->|Egress| MO
```

## Composants et responsabilités

### Application web

- Interface responsive (desktop, tablette, mobile).
- Navigation latérale, changement d'espace de travail.
- Modules : projets, Kanban, messagerie, fichiers, réunions, assistant IA, administration.
- Support du mode clair/sombre, du français et de l'arabe (RTL).
- Aucune décision de sécurité : elle consomme les permissions fournies par l'API.

### API backend

- Point d'entrée unique pour les opérations métier.
- Authentification, gestion des sessions, vérification RBAC.
- Validation des entrées et isolation des espaces.
- Génération des URLs présignées et des tokens LiveKit.
- Réception des webhooks LiveKit (signature vérifiée).
- Création des jobs BullMQ.
- Émission des notifications.

### Service temps réel

- Connexions WebSocket authentifiées.
- Diffusion des messages, de la présence et des indicateurs de saisie.
- Synchronisation à la reconnexion.
- Publication/abonnement via Redis pour le passage à l'échelle.
- Peut être intégré au backend dans une première version, puis extrait.

### Workers

- Consommation des jobs BullMQ.
- Téléchargement des enregistrements depuis MinIO.
- Extraction et conversion audio.
- Appels à Whisper et au LLM.
- Persistance des transcripts, résumés, décisions et actions.
- Nettoyage des fichiers temporaires.
- Idempotence et reprise sur échec.

### PostgreSQL

- Source de vérité des métadonnées : utilisateurs, espaces, rôles, projets, tâches,
  messages, fichiers, réunions, transcripts, résultats IA, notifications, audit logs.
- Contraintes d'intégrité et migrations versionnées.

### Redis

- Cache et données éphémères.
- Backend des files BullMQ.
- Présence et pub/sub pour le temps réel.
- Rate limiting distribué le cas échéant.

### MinIO

- Stockage objet des fichiers et des enregistrements.
- Buckets séparés ou préfixes par type de contenu.
- Accès via URLs présignées à durée limitée.
- Politiques de rétention et de cycle de vie.

### LiveKit

- Salles audio/vidéo et partage d'écran.
- Tokens d'accès signés côté serveur.
- Egress pour l'enregistrement.
- Webhooks vers le backend.

### Whisper et LLM

- Whisper : transcription avec segments horodatés.
- LLM : résumé, décisions, actions, avec sorties structurées.
- Appelés uniquement par les workers, jamais directement par le client.

## Flux principaux

### 1. Authentification

```mermaid
sequenceDiagram
    participant U as Utilisateur
    participant WEB as Application web
    participant API as API Backend
    participant PG as PostgreSQL
    participant RD as Redis

    U->>WEB: E-mail + mot de passe
    WEB->>API: POST /auth/login
    API->>PG: Vérifie l'utilisateur et le hash
    API->>RD: Crée la session
    API-->>WEB: Session / cookie sécurisé
    WEB-->>U: Accès au tableau de bord
```

### 2. Réunion et enregistrement

```mermaid
sequenceDiagram
    participant H as Hôte
    participant API as API Backend
    participant LK as LiveKit
    participant MO as MinIO
    participant Q as BullMQ
    participant W as Worker

    H->>API: Crée la réunion
    H->>API: Demande un token
    API->>API: Vérifie identité et permissions
    API-->>H: Access Token LiveKit
    H->>LK: Rejoint la salle
    H->>API: Démarre l'enregistrement
    API->>LK: Lance l'egress
    LK-->>MO: Écrit l'enregistrement
    LK->>API: Webhook Egress Ended
    API->>Q: Crée le job de traitement
    Q->>W: Distribue le job
```

### 3. Pipeline IA

```mermaid
sequenceDiagram
    participant W as Worker
    participant MO as MinIO
    participant WH as Whisper
    participant LLM as LLM
    participant PG as PostgreSQL
    participant API as API Backend
    participant UI as Application web

    W->>MO: Télécharge l'enregistrement
    W->>W: Extrait et convertit l'audio
    W->>WH: Transcrit l'audio
    WH-->>W: Texte + segments horodatés
    W->>PG: Sauvegarde le transcript
    W->>LLM: Résume et extrait décisions/actions
    LLM-->>W: Résultats structurés
    W->>PG: Sauvegarde les résultats
    W->>API: Notifie la fin du traitement
    API->>UI: Notification "résumé disponible"
    UI->>API: Revue humaine et approbation
    API->>PG: Crée les tâches approuvées
```

### 4. Messagerie temps réel

```mermaid
sequenceDiagram
    participant A as Utilisateur A
    participant RT as Temps réel
    participant RD as Redis
    participant API as API Backend
    participant PG as PostgreSQL
    participant B as Utilisateur B

    A->>RT: Envoie un message
    RT->>API: Vérifie l'appartenance et les permissions
    API->>PG: Persiste le message
    API->>RD: Publie l'événement
    RD->>RT: Diffuse aux abonnés
    RT-->>B: Message en temps réel
```

## Sécurité de l'architecture

- Toutes les communications client → plateforme en **HTTPS/WSS**.
- Les secrets (clé LiveKit, accès MinIO, clés LLM) restent côté serveur.
- Les webhooks sont signés et vérifiés.
- Les URLs de fichiers sont présignées et temporaires.
- Les workers n'exposent aucun endpoint public.
- L'isolation des espaces est vérifiée à chaque requête.
- Les journaux ne contiennent ni secrets ni tokens.

## Déploiement

Le catalogue impose **Docker Compose** pour l'environnement de développement et de
démonstration. Une topologie cible :

```text
docker-compose
├── web            (frontend)
├── api            (backend)
├── worker         (BullMQ consumers)
├── postgres
├── redis
├── minio
└── livekit
```

Les services Whisper et LLM peuvent être :

- des services conteneurisés locaux ;
- des API externes configurées par variables d'environnement.

## Limites et décisions ouvertes

| Sujet | État |
|---|---|
| Framework frontend | Non spécifié — proposition à valider |
| Framework backend | Non spécifié — proposition à valider |
| Mécanisme de session | Non spécifié — cookies sécurisés ou JWT à décider |
| Bibliothèque temps réel | Non spécifiée — WebSocket natif ou Socket.IO |
| Modèle LLM | Non spécifié — à choisir selon coût, langue et confidentialité |
| Recherche | Non spécifiée — PostgreSQL full-text au départ, moteur dédié ensuite |
| Multi-tenant | Isolation logique par espace de travail, pas multi-base |

## Liens

- [Stack technique](stack-technique.md)
- [Modèle de données](modele-de-donnees.md)
- [Sécurité](../docs/16-securite.md)
- [Tâches de fond](../docs/17-taches-de-fond.md)
- [LiveKit](../docs/10-livekit.md)
