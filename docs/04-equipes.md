# 4. Gestion des équipes

> **Réf. catalogue :** §4 · **Statut :** MVP · **Domaine :** Team management

## Objectif

Structurer les personnes au sein d'un espace de travail : départements universitaires,
équipes de projets de fin d'études, équipes de recherche. Une équipe relie les membres,
les projets et les canaux.

## 4.1 Création d'une équipe

- Créer une équipe.
- Définir le nom de l'équipe.
- Ajouter une description.
- Choisir une image.
- Lier l'équipe à un espace de travail.
- Désigner un chef d'équipe.

**Règles clés**

- Une équipe appartient à un seul espace de travail.
- Le chef d'équipe doit être membre de l'espace.
- Le créateur peut être le chef par défaut si aucun autre chef n'est désigné.

## 4.2 Membres de l'équipe

- Ajouter des membres.
- Retirer des membres.
- Consulter la liste des membres.
- Changer le chef d'équipe.
- Définir les rôles des membres.
- Consulter les activités de l'équipe.

**Règles clés**

- Seuls les membres de l'espace peuvent rejoindre une équipe.
- Le changement de chef est une opération auditée.
- Le retrait d'un membre ne supprime pas ses contributions passées (messages, tâches, fichiers).

## 4.3 Organisation des équipes

- Créer des équipes par département universitaire.
- Créer des équipes pour les projets de fin d'études.
- Créer des équipes de recherche.
- Lier des projets aux équipes.
- Lier des canaux aux équipes.

**Règles clés**

- Une équipe peut porter plusieurs projets.
- Un projet peut être lié à une équipe pour clarifier la responsabilité.
- Les canaux d'équipe facilitent la communication autour d'un domaine ou d'un projet.

## Points de vigilance

- Éviter les équipes orphelines ou sans chef.
- Vérifier les permissions lors de l'ajout ou du retrait de membres.
- Prévoir une procédure de fusion ou d'archivage d'équipe.

## Liens

- [Espaces de travail](02-workspaces.md)
- [Projets](05-projets.md)
- [Rôles & permissions](03-roles-permissions.md)
- [Messagerie](07-messagerie.md)
