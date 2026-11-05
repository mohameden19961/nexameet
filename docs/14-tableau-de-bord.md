# 14. Tableau de bord & activité

> **Réf. catalogue :** §14 · **Statut :** MVP (base) · **Domaine :** Dashboard and activity

## Objectif

Donner à chaque utilisateur une vue personnelle et immédiate de son travail : ce qui est
en cours, ce qui est en retard, ce qui arrive, et ce qui s'est passé récemment dans ses
espaces, projets et équipes.

## 14.1 Tableau de bord personnel

- Afficher le résumé de l'espace de travail.
- Afficher les projets actifs.
- Afficher les tâches assignées à l'utilisateur.
- Afficher les tâches en retard.
- Afficher les réunions à venir.
- Afficher les messages récents.
- Afficher les notifications.
- Afficher les derniers fichiers.

**Règles clés**

- Le tableau de bord est filtré par les permissions de l'utilisateur.
- Les données affichées sont limitées aux espaces accessibles.
- Les blocs vides affichent un état vide utile, pas une erreur.
- Les informations sont ordonnées par urgence et par date.

## 14.2 Fil d'activité

- Afficher la création d'un projet.
- Afficher la création d'une tâche.
- Afficher les changements de statut d'une tâche.
- Afficher les activités liées aux réunions.
- Afficher les téléversements de fichiers.
- Afficher les arrivées de membres.
- Afficher les activités des équipes.

**Règles clés**

- Chaque entrée indique l'auteur, l'action, la ressource et la date.
- Le fil respecte les permissions et l'isolation entre espaces.
- Les activités sensibles peuvent être limitées aux administrateurs.

## 14.3 Progression d'un projet

- Afficher le nombre de tâches.
- Afficher les tâches terminées.
- Afficher les tâches en cours.
- Afficher les tâches en retard.
- Afficher le pourcentage d'achèvement.

**Règles clés**

- Le pourcentage est calculé à partir de règles explicites et documentées.
- Les tâches annulées sont exclues ou traitées selon la règle définie.
- La progression est cohérente avec le Kanban.

## Points de vigilance

- Performance des agrégations sur de gros projets.
- Cache et invalidation lors des changements de statut.
- Cohérence des fuseaux horaires dans les dates affichées.
- Accessibilité des graphiques et indicateurs.

## Liens

- [Projets](05-projets.md)
- [Tâches](06-taches-kanban.md)
- [Réunions](09-reunions.md)
- [Notifications](12-notifications.md)
- [Administration](15-administration.md)
