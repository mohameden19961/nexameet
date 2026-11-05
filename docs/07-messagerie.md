# 7. Messagerie en temps réel

> **Réf. catalogue :** §7 · **Statut :** MVP · **Domaine :** Real-time messaging system

## Objectif

Permettre aux membres d'un espace de communiquer instantanément, par canaux thématiques
ou messages directs, avec un historique consultable et des fonctions collaboratives
(réactions, mentions, pièces jointes, réponses).

## 7.1 Canaux

- Créer un canal.
- Définir le nom du canal.
- Ajouter une description.
- Créer un canal public.
- Créer un canal privé.
- Lier le canal à un projet.
- Ajouter des membres.
- Retirer des membres.
- Modifier les données du canal.
- Archiver le canal.
- Supprimer le canal selon les permissions.

**Règles clés**

- Un canal public est visible par les membres autorisés de l'espace.
- Un canal privé n'est accessible qu'à ses membres.
- Un canal lié à un projet apparaît dans la page du projet.
- L'archivage conserve l'historique mais rend le canal en lecture seule.

## 7.2 Messages directs

- Démarrer une conversation directe.
- Envoyer un message à un utilisateur.
- Consulter la liste des conversations.
- Rechercher une conversation.
- Consulter les conversations récentes.
- Archiver la conversation lorsque cela est pris en charge.

**Règles clés**

- Une conversation directe est privée entre ses participants.
- L'archivage masque la conversation sans la supprimer.
- Un utilisateur ne peut pas démarrer une conversation avec quelqu'un qui l'a bloqué, si le blocage est implémenté.

## 7.3 Opérations sur les messages

- Envoyer un message texte.
- Modifier un message.
- Supprimer un message.
- Répondre à un message.
- Ajouter des réactions.
- Mentionner un utilisateur avec les mentions.
- Envoyer des liens.
- Joindre des fichiers.
- Afficher l'heure d'envoi.
- Afficher le statut de livraison.
- Afficher le statut de lecture lorsque cela est pris en charge.

**Règles clés**

- Un message modifié est signalé comme édité.
- La suppression peut être logique (contenu masqué) ou physique selon la politique.
- Les mentions déclenchent une notification ciblée.
- Les liens sont affichés sans exécution de contenu dangereux.

## 7.4 Fonctions temps réel

- Recevoir les messages en temps réel.
- Mettre à jour les messages sans recharger la page.
- Afficher les utilisateurs en ligne.
- Afficher l'indicateur de saisie.
- Notifier l'arrivée d'un nouveau message.
- Synchroniser les conversations à la reconnexion.

**Règles clés**

- La connexion temps réel est authentifiée.
- La présence est indicative et peut être approchée (heartbeat, expiration).
- À la reconnexion, le client récupère les messages manqués depuis un curseur.
- Les événements sont idempotents pour éviter les doublons.

## 7.5 Recherche de messages

- Rechercher du texte dans les messages.
- Rechercher par expéditeur.
- Rechercher par canal.
- Rechercher par date.
- Filtrer les messages contenant des fichiers.

**Règles clés**

- La recherche respecte les permissions et l'appartenance aux canaux.
- Les résultats sont paginés.
- La recherche dans les messages privés reste limitée aux participants.

## 7.6 Sécurité des messages

- Vérifier l'appartenance de l'utilisateur au canal.
- Empêcher l'accès aux conversations non autorisées.
- Vérifier la permission d'envoyer des messages.
- Protéger les pièces jointes.
- Appliquer la politique de rétention des messages.

**Règles clés**

- Les pièces jointes sont servies via des URLs contrôlées, jamais par un chemin direct public.
- Un utilisateur retiré d'un canal perd immédiatement l'accès aux nouveaux messages.
- La rétention s'applique aux messages et aux fichiers associés.

## Points de vigilance

- Ordre des messages et gestion des horloges.
- Reconnexion, reprise et déduplication des événements.
- Modération et signalement de contenu.
- Limitation du débit pour éviter le spam.
- Chiffrement en transit et protection des métadonnées sensibles.

## Liens

- [Canaux et projets](05-projets.md)
- [Fichiers](08-fichiers.md)
- [Notifications](12-notifications.md)
- [Recherche](13-recherche.md)
- [Sécurité](16-securite.md)
