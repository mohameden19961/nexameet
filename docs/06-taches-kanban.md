# 6. Gestion des tâches — Kanban

> **Réf. catalogue :** §6 · **Statut :** MVP · **Domaine :** Task management

## Objectif

Transformer le travail en tâches concrètes, assignables et suivies. Le tableau Kanban offre
une vision immédiate de l'avancement et permet de faire glisser les tâches entre les statuts.
Les tâches peuvent provenir d'une réunion et conserver leur source.

## 6.1 Création d'une tâche

- Créer une tâche.
- Saisir le titre de la tâche.
- Saisir la description.
- Définir le projet.
- Définir l'assigné.
- Définir la priorité.
- Définir l'échéance.
- Ajouter des labels.
- Joindre des fichiers.
- Ajouter une checklist de sous-tâches.

**Règles clés**

- Le titre et le projet sont obligatoires.
- L'assigné doit être membre du projet.
- Une tâche peut exister sans échéance, mais les tâches en retard sont mises en évidence.
- Les labels servent au filtrage et à la catégorisation.

## 6.2 Statuts de tâche

- **To Do** — À faire.
- **In Progress** — En cours.
- **In Review** — En revue.
- **Done** — Terminé.
- **Cancelled** — Annulé.

**Règles clés**

- Le changement de statut est historisé.
- Une tâche terminée ou annulée peut être rouverte selon les permissions.
- Le statut alimente la progression du projet.

## 6.3 Tableau Kanban

- Afficher les tâches en colonnes.
- Déplacer les tâches entre les colonnes.
- Glisser-déposer.
- Mettre à jour le statut d'une tâche.
- Consulter les tâches par assigné.
- Consulter les tâches par priorité.
- Consulter les tâches en retard.
- Consulter les tâches terminées.

**Règles clés**

- Le glisser-déposer met à jour le statut de manière optimiste puis confirme côté serveur.
- En cas d'échec, l'interface revient à l'état précédent et affiche une erreur.
- Les colonnes respectent l'ordre défini par le projet.
- Les filtres ne modifient pas les données.

## 6.4 Détails d'une tâche

- Consulter les détails de la tâche.
- Modifier la tâche.
- Supprimer la tâche.
- Changer l'assigné.
- Changer l'échéance.
- Ajouter un commentaire.
- Consulter l'historique des modifications.
- Consulter les fichiers liés.
- Afficher la source de la tâche si elle a été extraite d'une réunion.

**Règles clés**

- Chaque modification importante est tracée (auteur, date, ancienne et nouvelle valeur).
- La suppression est soumise aux permissions du projet.
- Une tâche issue d'une réunion conserve le lien vers la réunion, le transcript et l'action item d'origine.

## 6.5 Sous-tâches et dépendances

- Créer des sous-tâches.
- Suivre l'avancement des sous-tâches.
- Lier des tâches entre elles.
- Définir les tâches précédentes et suivantes lorsque cela est pris en charge.

**Règles clés**

- Une sous-tâche appartient à une tâche parente.
- La complétion d'une tâche parente peut dépendre de ses sous-tâches selon la configuration.
- Les dépendances ne doivent pas créer de cycles.

## 6.6 Notifications de tâche

- Notifier l'utilisateur lorsqu'une tâche lui est assignée.
- Notifier lorsque l'échéance change.
- Notifier lorsqu'un commentaire est ajouté.
- Notifier lorsque l'échéance approche.
- Notifier lorsqu'une tâche est en retard.

**Règles clés**

- Les notifications respectent les préférences de l'utilisateur.
- Les rappels d'échéance sont générés par des tâches planifiées.
- Les notifications renvoient vers la tâche concernée.

## Points de vigilance

- Définir la matrice de transition entre statuts.
- Gérer les conflits de modification concurrente.
- Prévoir la réaffectation des tâches d'un membre retiré.
- Tracer clairement l'origine IA d'une tâche et l'identité de la personne qui l'a approuvée.

## Liens

- [Projets](05-projets.md)
- [Assistant IA](11-assistant-ia.md)
- [Notifications](12-notifications.md)
- [Tableau de bord](14-tableau-de-bord.md)
