# Glossaire

Termes métier et techniques utilisés dans la documentation NexaMeet.

## Produit et métier

| Terme | Définition |
|---|---|
| **NexaMeet** | Plateforme universitaire de collaboration et de réunions intelligentes. |
| **Espace de travail (workspace)** | Conteneur principal regroupant équipes, projets, canaux, fichiers et réunions. Un utilisateur peut appartenir à plusieurs espaces. |
| **Équipe (team)** | Groupe de personnes rattaché à un espace de travail, souvent lié à un département, un projet de fin d'études ou une activité de recherche. |
| **Projet** | Ensemble de tâches, fichiers, canaux et réunions poursuivant un objectif avec des dates, un statut et une priorité. |
| **Canal (channel)** | Espace de discussion public ou privé, éventuellement lié à un projet. |
| **Message direct (DM)** | Conversation privée entre deux utilisateurs. |
| **Tâche (task)** | Unité de travail assignable, avec statut, priorité, échéance, labels, sous-tâches et fichiers. |
| **Kanban** | Tableau visuel organisant les tâches en colonnes selon leur statut. |
| **Réunion (meeting)** | Session planifiée ou immédiate avec participants, audio, vidéo, partage d'écran et enregistrement optionnel. |
| **Enregistrement (recording)** | Fichier média produit par LiveKit pendant une réunion et stocké dans MinIO. |
| **Transcript** | Transcription texte d'un enregistrement, découpée en segments horodatés. |
| **Résumé (summary)** | Synthèse générée par le LLM : sujets, points importants, questions ouvertes. |
| **Décision (decision)** | Point de décision extrait d'une réunion, confirmé ou proposé, lié à un segment du transcript. |
| **Action item** | Tâche suggérée par l'IA à partir d'une réunion, à valider par un humain avant création. |
| **Revue humaine (human review)** | Étape où un utilisateur vérifie, corrige, accepte ou rejette les résultats de l'IA. |
| **Audit log** | Journal des opérations sensibles (connexions, permissions, suppressions, accès aux enregistrements, etc.). |

## Rôles

| Rôle | Portée |
|---|---|
| **Owner** | Propriétaire de l'espace de travail ; contrôle total, y compris la suppression selon la politique de rétention. |
| **Administrator** | Administration de l'espace : membres, équipes, projets, rôles, politiques. |
| **Teacher** | Rôle pédagogique ; crée et encadre projets, équipes, réunions et contenus. |
| **Student** | Participe aux équipes, projets, canaux et réunions selon les permissions accordées. |
| **Member** | Rôle générique de membre avec les permissions définies par l'espace. |

Les rôles personnalisés sont possibles lorsque l'implémentation le permet.

## Infrastructure et technique

| Terme | Définition |
|---|---|
| **RBAC** | *Role-Based Access Control* — contrôle d'accès fondé sur les rôles et permissions. |
| **JWT** | *JSON Web Token* — format de jeton signé, souvent utilisé pour l'authentification ou les liens d'accès. |
| **Session** | État authentifié d'un utilisateur, révocable (déconnexion, changement de mot de passe). |
| **LiveKit** | Infrastructure de communication temps réel pour l'audio, la vidéo, le partage d'écran et l'enregistrement. |
| **Access Token LiveKit** | Jeton signé délivré par le backend, portant les droits d'un participant sur une salle. |
| **Room** | Salle LiveKit correspondant à une réunion NexaMeet. |
| **Egress** | Service LiveKit chargé d'enregistrer une salle ou une piste. |
| **Webhook** | Appel HTTP envoyé par un service externe (LiveKit) vers le backend pour signaler un événement. |
| **MinIO** | Stockage objet compatible S3 pour les fichiers et les enregistrements. |
| **PostgreSQL** | Base de données relationnelle stockant les métadonnées. |
| **Redis** | Store en mémoire utilisé pour le cache, la présence et la messagerie temps réel. |
| **BullMQ** | Bibliothèque de files de jobs basée sur Redis, utilisée pour les traitements asynchrones. |
| **Worker** | Processus qui consomme les jobs d'une file (transcription, IA, nettoyage, rappels). |
| **Whisper** | Modèle de reconnaissance vocale (*speech-to-text*). |
| **LLM** | *Large Language Model* — modèle de langage produisant résumés, décisions et suggestions de tâches. |
| **Simulcast** | Envoi de plusieurs qualités vidéo pour s'adapter à la bande passante des participants. |
| **Rate limiting** | Limitation du nombre de requêtes pour protéger les endpoints. |
| **Rétention** | Durée pendant laquelle les données (fichiers, enregistrements, messages) sont conservées. |
| **Docker Compose** | Orchestration locale des conteneurs de la plateforme. |
| **MVP** | *Minimum Viable Product* — première version officielle limitée aux fonctionnalités essentielles. |
| **Definition of Done** | Ensemble de critères qui définissent officiellement la réussite du MVP. |
