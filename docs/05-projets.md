# 5. Gestion de projets

> **Réf. catalogue :** §5 · **Statut :** MVP · **Domaine :** Project management

## Objectif

Organiser le travail collectif autour d'objectifs datés. Un projet rassemble des membres,
des tâches, des fichiers, des canaux et des réunions, et suit une progression mesurable.

## 5.1 Création d'un projet

- Créer un projet.
- Saisir le nom du projet.
- Saisir la description du projet.
- Définir la date de début.
- Définir la date de fin.
- Définir le statut du projet.
- Définir la priorité.
- Choisir les membres du projet.
- Désigner un chef de projet.
- Lier le projet à une équipe.
- Lier le projet à un espace de travail.

**Règles clés**

- Le projet appartient obligatoirement à un espace de travail.
- La date de fin ne peut pas précéder la date de début.
- Le chef de projet doit être membre de l'espace et du projet.
- Le statut et la priorité utilisent des valeurs contrôlées.

## 5.2 Détails du projet

- Consulter les informations du projet.
- Consulter les membres du projet.
- Consulter les tâches.
- Consulter les fichiers.
- Consulter les canaux liés.
- Consulter les réunions liées.
- Consulter les résumés de réunion.
- Consulter les activités récentes.

**Règles clés**

- L'affichage dépend des permissions de l'utilisateur sur le projet.
- Les résumés et les tâches extraites renvoient à leur réunion d'origine.
- Les activités récentes sont ordonnées chronologiquement.

## 5.3 Gestion du projet

- Modifier les données du projet.
- Archiver le projet.
- Restaurer un projet archivé.
- Supprimer le projet selon les permissions.
- Ajouter des membres.
- Retirer des membres.
- Définir le propriétaire du projet.
- Suivre la progression du projet.

**Règles clés**

- L'archivage conserve les données mais sort le projet des vues actives.
- La suppression est soumise aux permissions et à la politique de rétention.
- Le retrait d'un membre ne supprime pas les tâches qui lui étaient assignées ; une réaffectation est nécessaire.
- La progression est calculée à partir des tâches (terminées / total).

## 5.4 Recherche et filtrage des projets

- Rechercher des projets.
- Filtrer par statut.
- Filtrer par propriétaire.
- Filtrer par équipe.
- Filtrer par date.
- Trier les projets.
- Consulter les projets actifs et archivés.

**Règles clés**

- Les résultats respectent les permissions de l'utilisateur.
- Les filtres sont combinables.
- Les projets archivés sont accessibles via une vue dédiée.

## Points de vigilance

- Définir précisément les statuts de projet (ex. planifié, actif, en pause, terminé, annulé).
- Éviter les projets sans chef ou sans membre.
- Prévoir la réaffectation des tâches lors du retrait d'un membre.
- Aligner la progression affichée sur les règles de calcul des tâches.

## Liens

- [Équipes](04-equipes.md)
- [Tâches & Kanban](06-taches-kanban.md)
- [Fichiers](08-fichiers.md)
- [Réunions](09-reunions.md)
- [Assistant IA](11-assistant-ia.md)
