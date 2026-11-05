# 20. MVP — première version officielle

> **Réf. catalogue :** §20 · **Statut :** MVP · **Domaine :** Cadrage produit

## Objectif

Définir ce qui doit absolument fonctionner dans la première version. Le MVP ne cherche pas
à couvrir tout le catalogue : il doit livrer le parcours complet **de l'inscription à la
création de tâches issues d'une réunion**, de manière fiable.

## A. Identité & espace de travail

- Inscription.
- Connexion / déconnexion.
- Réinitialisation du mot de passe.
- Vérification de l'e-mail.
- Profil utilisateur.
- Création d'un espace de travail.
- Membres de l'espace.
- Invitations.
- RBAC de base.

## B. Collaboration

- Équipes.
- Projets.
- Canaux.
- Messages directs.
- Messagerie en temps réel.
- Notifications de base.

## C. Gestion de projet

- Création de projet.
- Membres du projet.
- Création de tâche.
- Assignation de tâche.
- Statut de tâche.
- Tableau Kanban.
- Commentaires de tâche.

## D. Gestion des fichiers

- Téléversement.
- Téléchargement.
- Suppression.
- Organisation de base.
- Permissions.

## E. Réunions

- Création de réunion.
- Participation à une réunion.
- Intégration LiveKit.
- Audio / vidéo.
- Partage d'écran.
- Gestion des participants.
- Enregistrement.
- Historique des réunions.

## F. Assistant IA de réunion

- Traitement de l'enregistrement.
- Transcription avec Whisper.
- Stockage du transcript.
- Résumé IA.
- Extraction des décisions.
- Extraction des actions.
- Revue humaine.
- Création de tâches à partir des actions approuvées.

## G. Système

- Redis.
- BullMQ.
- Workers.
- MinIO.
- PostgreSQL.
- Docker Compose.
- Monitoring de base.
- Tests unitaires et d'intégration.

## Ce que le MVP doit démontrer

Le MVP doit prouver la chaîne de valeur complète :

```text
Communiquer → Se réunir → Enregistrer → Transcrire → Comprendre → Décider → Agir
```

Autrement dit : un utilisateur peut créer un espace, inviter son équipe, travailler sur un
projet, tenir une réunion, obtenir un compte rendu exploitable et transformer les décisions
en tâches suivies.

## Ce que le MVP n'a pas besoin d'être

- Un produit fini sur tous les plans.
- Une couverture complète des 22 sections.
- Une solution d'entreprise multi-organisations complexe.
- Une application mobile native.
- Une plateforme d'analytique avancée.

## Priorités d'implémentation

| Priorité | Bloc | Justification |
|---|---|---|
| **P0** | Identité, workspace, RBAC | Sans eux, rien n'est sécurisé ni isolé. |
| **P0** | Projets, tâches, Kanban | Cœur du travail collaboratif. |
| **P0** | Réunions + LiveKit + enregistrement | Cœur de la proposition de valeur. |
| **P0** | Pipeline IA + revue humaine | Différenciateur principal. |
| **P1** | Messagerie, fichiers, notifications | Nécessaires au scénario complet. |
| **P2** | Recherche, dashboard avancé, audit riche | Améliorent l'usage mais ne bloquent pas la démo. |

## Liens

- [Hors périmètre](21-hors-mvp.md)
- [Definition of Done](22-definition-of-done.md)
- [Parcours utilisateur](parcours-utilisateur.md)
- [Architecture](../architecture/README.md)
