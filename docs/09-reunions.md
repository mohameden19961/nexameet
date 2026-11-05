# 9. Gestion des réunions

> **Réf. catalogue :** §9 · **Statut :** MVP · **Domaine :** Meeting management

## Objectif

Permettre de créer, planifier, rejoindre et animer des réunions vidéo intégrées à la
plateforme. Les réunions sont liées aux projets et aux canaux, peuvent être enregistrées,
et alimentent l'historique et l'assistant IA.

## 9.1 Création d'une réunion

- Créer une réunion.
- Définir le titre de la réunion.
- Ajouter une description.
- Définir la date de la réunion.
- Définir l'heure de début.
- Définir la durée.
- Choisir les participants.
- Définir le projet lié.
- Définir le canal lié.
- Définir les permissions de la réunion.
- Générer le lien de participation.

**Règles clés**

- Le titre, la date et l'heure de début sont obligatoires.
- Le lien de participation est unique et contrôlé.
- Les participants doivent avoir accès au projet ou à l'espace.
- Les permissions distinguent au minimum hôte, participant et observateur si nécessaire.

## 9.2 Planification

- Planifier une réunion future.
- Consulter les réunions à venir.
- Modifier l'heure de la réunion.
- Annuler la réunion.
- Envoyer les invitations.
- Consulter le statut des invitations.
- Rappeler aux participants.

**Règles clés**

- Toute modification d'heure notifie les participants.
- L'annulation conserve la trace de la réunion.
- Les rappels sont émis par des tâches planifiées.
- Les invitations ont un statut (en attente, acceptée, refusée).

## 9.3 Participation

- Rejoindre une réunion.
- Vérifier l'identité de l'utilisateur.
- Vérifier la permission d'entrée.
- Délivrer un **Access Token LiveKit**.
- Entrer dans la salle LiveKit.
- Quitter la réunion.
- Se reconnecter en cas d'interruption réseau.

**Règles clés**

- Le token est délivré par le backend après vérification.
- Le token a une durée de vie limitée et des droits précis.
- L'identité affichée dans la salle correspond à l'utilisateur authentifié.
- La reconnexion récupère l'état de la salle sans dupliquer la participation.

## 9.4 Fonctions en réunion

- Activer la caméra.
- Désactiver la caméra.
- Activer le microphone.
- Couper le microphone.
- Choisir le périphérique audio.
- Choisir la caméra.
- Partager l'écran.
- Arrêter le partage d'écran.
- Consulter les participants.
- Afficher le nom de l'orateur.
- Afficher l'état du microphone.
- Discuter pendant la réunion.
- Consulter les informations de la réunion.
- Terminer la réunion.

**Règles clés**

- L'état du microphone et de la caméra est visible par les autres participants.
- Le chat de réunion est distinct des canaux persistants, sauf décision contraire.
- Le départ de l'hôte ne termine pas automatiquement la réunion si un autre hôte existe.

## 9.5 Contrôles de l'hôte

- Admettre les participants lorsque la salle d'attente est activée.
- Refuser des participants.
- Couper le microphone d'un participant selon les permissions.
- Retirer un participant.
- Contrôler l'enregistrement.
- Terminer la réunion pour tout le monde.
- Gérer les permissions de participation.

**Règles clés**

- Les actions de l'hôte sont journalisées.
- Un participant retiré ne peut pas revenir sans nouvelle autorisation.
- La salle d'attente est optionnelle et configurable par réunion.

## 9.6 Enregistrement

- Démarrer l'enregistrement.
- Arrêter l'enregistrement.
- Afficher l'indicateur d'enregistrement.
- Notifier les participants de l'enregistrement.
- Recevoir le statut de l'enregistrement.
- Stocker l'enregistrement dans **MinIO**.
- Lier l'enregistrement à la réunion.
- Afficher le statut de l'enregistrement.
- Consulter les enregistrements.
- Télécharger l'enregistrement selon les permissions.
- Supprimer l'enregistrement selon la politique de l'organisation.

**Règles clés**

- L'enregistrement exige le consentement des participants et le respect de la politique.
- L'indicateur d'enregistrement est visible en permanence.
- Le fichier n'est disponible qu'une fois le traitement d'egress terminé.
- La suppression suit la politique de rétention.

## 9.7 Historique des réunions

- Consulter les réunions passées.
- Consulter les réunions à venir.
- Consulter les participants.
- Consulter l'heure de début et de fin.
- Consulter la durée de la réunion.
- Consulter l'enregistrement.
- Consulter le résumé de la réunion.
- Consulter les tâches extraites.

**Règles clés**

- L'historique est filtré par permissions.
- Une réunion passée sans enregistrement affiche un état explicite.
- Les résumés et tâches extraites renvoient à la réunion et au transcript.

## Points de vigilance

- Fuseaux horaires et heure locale des participants.
- Gestion des réunions récurrentes (post-MVP).
- Politique de consentement et de rétention.
- Qualité de connexion et reconnexion.
- Cohérence entre l'état LiveKit et l'état en base.

## Liens

- [Intégration LiveKit](10-livekit.md)
- [Assistant IA](11-assistant-ia.md)
- [Projets](05-projets.md)
- [Notifications](12-notifications.md)
- [Sécurité](16-securite.md)
