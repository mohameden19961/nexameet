# 10. Intégration LiveKit

> **Réf. catalogue :** §10 · **Statut :** MVP · **Domaine :** Communication infrastructure

## Objectif

Fournir l'infrastructure audio, vidéo et de partage d'écran des réunions NexaMeet.
LiveKit gère les salles, les flux média et l'enregistrement (*egress*). Le backend
contrôle les accès et reçoit les événements via webhooks.

## 10.1 Gestion des salles

- Créer une salle lorsque nécessaire.
- Lier la salle à une réunion NexaMeet.
- Définir le nom de la salle.
- Gérer les participants.
- Terminer la salle.
- Empêcher les accès non autorisés.

**Règles clés**

- Une salle correspond à une réunion ; son nom est généré côté serveur.
- La création peut être paresseuse (à la première connexion) ou anticipée.
- La fermeture de la salle met fin aux flux média.
- Aucun client ne peut créer une salle sans passer par le backend.

## 10.2 Gestion des jetons d'accès

- Vérifier l'utilisateur.
- Vérifier son appartenance.
- Vérifier la validité de la réunion.
- Délivrer un Access Token.
- Définir les *Room Grants*.
- Définir les permissions de publication et d'abonnement.
- Définir la durée de vie du token.
- Ne jamais exposer l'API Secret au client.

**Règles clés**

- Le token est signé avec la clé secrète LiveKit, conservée côté serveur.
- Les droits minimaux sont accordés : un observateur ne publie pas.
- Un token expiré ou révoqué ne permet plus de rejoindre la salle.
- La durée de vie est alignée sur la durée prévue de la réunion, avec marge de reconnexion.

## 10.3 Gestion des médias

- Publier l'audio.
- Publier la vidéo.
- Recevoir les flux média.
- Prendre en charge le partage d'écran.
- Gérer la qualité de connexion.
- Prendre en charge le Simulcast lorsque nécessaire.

**Règles clés**

- Les pistes sont publiées après autorisation de l'utilisateur (micro, caméra).
- Le partage d'écran est une piste distincte, arrêtable sans quitter la réunion.
- La qualité s'adapte à la bande passante ; l'expérience dégradée est signalée.
- Le backend ne transporte pas les flux média.

## 10.4 Gestion de l'egress

- Demander l'enregistrement de la réunion.
- Suivre l'état de l'enregistrement.
- Recevoir l'événement de fin d'enregistrement.
- Enregistrer l'emplacement du fichier.
- Mettre à jour la base de données.
- Gérer les échecs d'enregistrement.

**Règles clés**

- L'enregistrement est lancé par un utilisateur autorisé (hôte).
- L'egress écrit dans MinIO via une configuration de stockage dédiée.
- L'état de l'enregistrement est persisté : demandé, en cours, terminé, échoué.
- Un échec est visible et peut être relancé selon la politique.

## 10.5 Webhooks

- Recevoir `Participant Joined`.
- Recevoir `Participant Left`.
- Recevoir `Room Started`.
- Recevoir `Room Finished`.
- Recevoir `Egress Started`.
- Recevoir `Egress Ended`.
- Vérifier la signature.
- Empêcher le traitement des événements en double.
- Journaliser les événements et les erreurs.

**Règles clés**

- Chaque webhook est authentifié et sa signature vérifiée.
- Le traitement est idempotent (clé d'événement unique).
- Les événements sont acquittés rapidement ; le travail lourd est délégué à la file.
- Les erreurs sont journalisées et rejouables.

## Points de vigilance

- Ne jamais journaliser l'API Secret ni les tokens complets.
- Surveiller la disponibilité de LiveKit et de l'egress.
- Prévoir un comportement dégradé si l'enregistrement échoue.
- Vérifier la cohérence entre les webhooks et l'état en base.
- Configurer correctement CORS, TURN et domaines autorisés.

## Liens

- [Réunions](09-reunions.md)
- [Assistant IA](11-assistant-ia.md)
- [Tâches de fond](17-taches-de-fond.md)
- [Sécurité](16-securite.md)
- [Architecture](../architecture/README.md)
