# 2. Gestion des espaces de travail

> **Réf. catalogue :** §2 · **Statut :** MVP · **Domaine :** Workspace management

## Objectif

Offrir un conteneur clair et isolé pour chaque organisation, faculté, département ou équipe.
L'espace de travail regroupe les membres, les équipes, les projets, les canaux, les fichiers
et les réunions. Il constitue la frontière principale d'isolation des données.

## 2.1 Création d'un espace de travail

- Créer un nouvel espace de travail.
- Définir le nom de l'espace.
- Ajouter une description.
- Choisir une image ou un logo.
- Définir le type d'organisation ou d'équipe.
- Configurer les paramètres de l'espace.
- Désigner le créateur comme propriétaire.

**Règles clés**

- Le créateur devient automatiquement `Owner`.
- Le nom est obligatoire ; la description et le logo sont optionnels.
- Les paramètres initiaux peuvent être modifiés ultérieurement par un propriétaire ou un administrateur autorisé.

## 2.2 Navigation entre espaces

- Afficher tous les espaces de travail auxquels l'utilisateur appartient.
- Basculer d'un espace de travail à un autre.
- Afficher l'espace de travail actif.
- Rechercher un espace de travail.
- Quitter un espace de travail.
- Afficher les données de l'espace de travail courant.

**Règles clés**

- L'espace actif détermine le contexte de navigation, les projets et les permissions affichés.
- Quitter un espace ne supprime pas les données de l'utilisateur dans cet espace.
- Un propriétaire ne peut pas quitter son espace sans transférer la propriété ou le supprimer.

## 2.3 Paramètres de l'espace

- Modifier le nom et la description.
- Modifier le logo.
- Définir les paramètres de confidentialité.
- Gérer les invitations.
- Gérer les membres.
- Définir les paramètres de notification.
- Définir les politiques de fichiers et d'enregistrement.
- Supprimer l'espace de travail selon les permissions du propriétaire et la politique de rétention des données.

**Règles clés**

- Seuls les rôles autorisés peuvent modifier les paramètres.
- La suppression est une opération sensible : confirmation explicite, contrôle des permissions et respect de la rétention.
- Les politiques de fichiers et d'enregistrement s'appliquent à tous les contenus de l'espace.

## 2.4 Membres de l'espace

- Consulter les membres.
- Rechercher un membre.
- Inviter un nouveau membre.
- Accepter les invitations.
- Refuser les invitations.
- Annuler les invitations envoyées.
- Renvoyer une invitation.
- Changer le rôle d'un membre.
- Retirer un membre.
- Consulter la date d'adhésion.
- Consulter le statut d'adhésion.

**Règles clés**

- Une invitation possède un statut : en attente, acceptée, refusée, annulée, expirée.
- Le renvoi d'une invitation invalide l'ancien lien.
- Un membre ne peut pas s'attribuer un rôle supérieur à ses propres permissions.
- Le retrait d'un membre révoque ses accès aux ressources de l'espace.

## Points de vigilance

- Isolation stricte entre espaces : aucune fuite de données d'un espace à un autre.
- Vérification des permissions côté backend, pas seulement dans l'interface.
- Journalisation des invitations, changements de rôle et suppressions.
- Gestion des invitations expirées et des doublons.

## Liens

- [Authentification](01-authentification.md)
- [Rôles & permissions](03-roles-permissions.md)
- [Équipes](04-equipes.md)
- [Administration & gouvernance](15-administration.md)
