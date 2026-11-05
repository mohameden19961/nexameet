# 12. Système de notifications

> **Réf. catalogue :** §12 · **Statut :** MVP (base) · **Domaine :** Notifications system

## Objectif

Informer les utilisateurs des événements importants sans les noyer. Les notifications
couvrent les invitations, les tâches, les messages, les réunions et les résultats de l'IA.
L'utilisateur peut les consulter, les filtrer et configurer ses préférences.

## 12.1 Événements de notification

- Invitation à un espace de travail.
- Ajout à un projet.
- Tâche assignée.
- Échéance de tâche proche.
- Tâche en retard.
- Message reçu.
- Utilisateur mentionné dans un message.
- Invitation à une réunion.
- Modification de l'heure d'une réunion.
- Début d'une réunion.
- Enregistrement terminé.
- Traitement IA terminé.
- Nouveau résumé disponible.
- Tâches nécessitant une revue.

**Règles clés**

- Chaque notification possède un type, un destinataire, un contenu et un lien.
- Les événements sensibles ne révèlent pas d'informations à des utilisateurs non autorisés.
- Les notifications en temps réel ne remplacent pas l'historique persistant.

## 12.2 Gestion des notifications

- Consulter les notifications.
- Marquer une notification comme lue.
- Marquer toutes les notifications comme lues.
- Supprimer une notification.
- Filtrer les notifications.
- Afficher le nombre de notifications non lues.
- Accéder à l'élément lié à la notification.

**Règles clés**

- Le compteur de non-lus est cohérent entre les sessions.
- Le clic sur une notification ouvre la ressource si l'utilisateur y a encore accès.
- La suppression est logique ou définitive selon la politique.

## 12.3 Préférences de notification

- Activer ou désactiver des types de notification.
- Configurer les notifications de messages.
- Configurer les notifications de réunions.
- Configurer les notifications de tâches.
- Définir les canaux de notification disponibles.

**Règles clés**

- Les préférences sont propres à chaque utilisateur.
- La désactivation d'un type n'empêche pas la conservation de l'historique si la politique l'exige.
- Les canaux disponibles dépendent de l'implémentation (in-app, e-mail, etc.).

## Points de vigilance

- Éviter le spam et regrouper les notifications similaires.
- Respecter les fuseaux horaires pour les rappels.
- Prévoir une limitation de débit pour les notifications temps réel.
- Tester la cohérence du compteur de non-lus en cas de multi-sessions.

## Liens

- [Tâches](06-taches-kanban.md)
- [Messagerie](07-messagerie.md)
- [Réunions](09-reunions.md)
- [Assistant IA](11-assistant-ia.md)
- [Tâches de fond](17-taches-de-fond.md)
