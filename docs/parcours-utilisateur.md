# Parcours utilisateur complet

Ce document raconte le scénario de référence du MVP, étape par étape, en précisant
ce que l'utilisateur fait, ce que le système doit faire et ce qui prouve que l'étape
est réussie.

## Personas

| Persona | Rôle | Objectif |
|---|---|---|
| **Sara** | Enseignante, `Owner` de son espace | Encadrer un projet de fin d'études et transformer les réunions en plan d'action. |
| **Yassine** | Étudiant, `Student` | Contribuer au projet, suivre ses tâches et participer aux réunions. |
| **Mariam** | Administratrice, `Administrator` | Gérer les membres, les permissions et les politiques. |

## Acte 1 — Rejoindre la plateforme

### 1. Création de compte

Sara ouvre NexaMeet, remplit le formulaire d'inscription, accepte les conditions et reçoit
un e-mail de vérification.

**Le système doit** : valider les champs, empêcher les doublons d'e-mail, envoyer le lien
de vérification, hasher le mot de passe.

**Preuve** : le compte existe, l'e-mail est vérifié, Sarah peut se connecter.

### 2. Connexion

Sara se connecte avec son e-mail et son mot de passe.

**Le système doit** : valider les identifiants, créer une session, proposer « se souvenir
de moi » si elle le souhaite.

**Preuve** : Sara accède à son tableau de bord ; une déconnexion invalide la session.

## Acte 2 — Créer l'espace et l'équipe

### 3. Création de l'espace de travail

Sara crée « Université — Projet Atlas », ajoute une description et choisit un logo.

**Le système doit** : créer l'espace, désigner Sara comme `Owner`, appliquer les paramètres
par défaut.

**Preuve** : l'espace apparaît dans le sélecteur ; Sara en est propriétaire.

### 4. Invitations

Sara invite Yassine comme `Student` et Mariam comme `Administrator`.

**Le système doit** : créer des invitations, envoyer les liens, afficher le statut
« en attente ».

**Preuve** : les invitations sont visibles ; leur acceptation fait apparaître les membres.

### 5. Création de l'équipe

Sara crée l'équipe « Département Informatique — Promotion 2026 » et y ajoute les membres.

**Le système doit** : lier l'équipe à l'espace, désigner un chef d'équipe.

**Preuve** : l'équipe apparaît dans l'espace et regroupe les bons membres.

## Acte 3 — Organiser le travail

### 6. Création du projet

Sara crée le projet « Plateforme de gestion de soutenances », avec dates, priorité,
membres et équipe.

**Le système doit** : valider les dates, lier le projet à l'espace et à l'équipe,
désigner un chef de projet.

**Preuve** : le projet est visible par les membres autorisés.

### 7. Création du canal

Sara crée le canal privé `#projet-atlas` et le lie au projet.

**Le système doit** : restreindre l'accès aux membres du canal et afficher le canal
dans la page projet.

**Preuve** : Yassine voit le canal ; un utilisateur extérieur ne le voit pas.

### 8. Échanges

Yassine envoie un message, mentionne Sara et joint un document.

**Le système doit** : livrer le message en temps réel, notifier Sara, stocker la pièce
jointe dans MinIO, protéger l'accès au fichier.

**Preuve** : le message apparaît sans rechargement ; la mention génère une notification ;
le fichier est téléchargeable uniquement par les membres.

### 9. Création et assignation d'une tâche

Sara crée la tâche « Rédiger le cahier des charges », l'assigne à Yassine, fixe une
échéance et l'ajoute au Kanban.

**Le système doit** : valider l'assigné, créer la tâche en `To Do`, notifier Yassine.

**Preuve** : la tâche apparaît dans la colonne `To Do` et dans le tableau de bord de Yassine.

## Acte 4 — Se réunir

### 10. Planification de la réunion

Sara crée la réunion « Revue de sprint 1 », la lie au projet et au canal, invite les membres
et génère le lien de participation.

**Le système doit** : envoyer les invitations, afficher la réunion à venir, préparer la salle.

**Preuve** : la réunion apparaît dans les agendas et les notifications.

### 11. Participation

Les participants rejoignent la réunion. Le backend vérifie leur identité et leurs droits,
puis délivre un token LiveKit.

**Le système doit** : refuser les utilisateurs non autorisés, délivrer un token à durée
limitée, connecter les participants à la salle.

**Preuve** : chacun entre dans la salle avec son nom ; un utilisateur non invité est refusé.

### 12. Réunion

Caméra, microphone et partage d'écran fonctionnent. Sara anime, coupe un microphone si
nécessaire et démarre l'enregistrement après avoir informé les participants.

**Le système doit** : gérer les pistes média, afficher l'indicateur d'enregistrement,
appliquer les contrôles de l'hôte.

**Preuve** : les flux sont stables ; l'indicateur est visible ; l'enregistrement est en cours.

### 13. Fin de réunion

Sara termine la réunion. L'egress finalise le fichier et l'écrit dans MinIO.

**Le système doit** : arrêter proprement la salle, recevoir les webhooks, enregistrer
l'emplacement du fichier, mettre à jour le statut.

**Preuve** : l'enregistrement apparaît dans l'historique avec le statut « terminé ».

## Acte 5 — Comprendre

### 14. Déclenchement du traitement

Un webhook `Egress Ended` crée un job BullMQ. Un worker récupère l'enregistrement.

**Le système doit** : vérifier le consentement et la politique, éviter les doublons,
suivre la progression.

**Preuve** : le job est visible ; l'interface affiche « traitement en cours ».

### 15. Transcription

Le worker extrait l'audio, l'envoie à Whisper et stocke le texte avec ses segments.

**Le système doit** : gérer les erreurs, réessayer, conserver les horodatages.

**Preuve** : le transcript est consultable et navigable par timestamp.

### 16. Analyse IA

Le LLM produit un résumé, des décisions et des tâches suggérées, avec liens vers les
segments sources.

**Le système doit** : structurer les résultats, indiquer un niveau de confiance, conserver
la version de traitement.

**Preuve** : les résultats apparaissent dans l'interface de revue.

## Acte 6 — Agir

### 17. Revue humaine

Sara relit le résumé, corrige une formulation, rejette une décision mal extraite et
approuve trois tâches.

**Le système doit** : permettre l'édition, tracer chaque décision, journaliser les approbations.

**Preuve** : le journal d'approbation contient l'identité de Sara et la date.

### 18. Création des tâches

Les tâches approuvées sont créées dans le projet, avec leur lien vers la réunion et le
transcript.

**Le système doit** : créer les tâches uniquement après approbation, conserver la source,
notifier les assignés.

**Preuve** : les tâches apparaissent dans le Kanban et dans le tableau de bord des assignés.

### 19. Suivi

Yassine déplace une tâche de `To Do` à `In Progress`, commente et joint un fichier.
La progression du projet se met à jour.

**Le système doit** : mettre à jour le statut, historiser le changement, recalculer la
progression, notifier les personnes concernées.

**Preuve** : le Kanban et la progression reflètent l'état réel.

## Résultat attendu

À la fin du parcours :

- l'espace de travail est structuré et sécurisé ;
- les membres collaborent en temps réel ;
- la réunion a produit un enregistrement, un transcript et un compte rendu ;
- les décisions sont tracées ;
- les actions sont devenues des tâches suivies ;
- chaque étape est auditables et reproductible.

C'est ce parcours qui définit la réussite du MVP, conformément à la
[Definition of Done](22-definition-of-done.md).
