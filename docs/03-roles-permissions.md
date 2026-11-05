# 3. Rôles & permissions — RBAC

> **Réf. catalogue :** §3 · **Statut :** MVP · **Domaine :** Gestion des rôles et permissions

## Objectif

Contrôler précisément qui peut faire quoi dans chaque espace de travail. Le modèle RBAC
(*Role-Based Access Control*) associe des permissions à des rôles, puis des rôles aux membres.
Toute décision d'accès est vérifiée côté backend.

## 3.1 Rôles par défaut

| Rôle | Usage attendu |
|---|---|
| **Owner** | Propriétaire de l'espace ; contrôle total. |
| **Administrator** | Administration de l'espace, des membres, des équipes et des politiques. |
| **Teacher** | Encadrement pédagogique : projets, équipes, réunions, contenus. |
| **Student** | Participation aux équipes, projets, canaux et réunions autorisés. |
| **Member** | Rôle générique configurable selon l'organisation. |

## 3.2 Gestion des rôles

- Créer des rôles personnalisés lorsque l'implémentation le permet.
- Modifier le nom d'un rôle.
- Définir les permissions d'un rôle.
- Supprimer les rôles personnalisés.
- Assigner un rôle à un utilisateur.
- Changer le rôle d'un utilisateur.
- Consulter les permissions associées à chaque rôle.

**Règles clés**

- Les rôles par défaut ne peuvent pas être supprimés.
- Un rôle personnalisé ne peut pas accorder plus de permissions que son créateur n'en possède.
- La suppression d'un rôle réaffecte ou bloque les membres concernés selon la politique choisie.

## 3.3 Gestion des permissions

Permissions couvertes par le catalogue :

- Créer un espace de travail.
- Modifier un espace de travail.
- Supprimer un espace de travail.
- Inviter des utilisateurs.
- Retirer des utilisateurs.
- Créer des projets.
- Modifier des projets.
- Supprimer des projets.
- Gérer les tâches.
- Créer des canaux.
- Gérer les messages.
- Créer des réunions.
- Enregistrer des réunions.
- Consulter les enregistrements.
- Téléverser des fichiers.
- Supprimer des fichiers.
- Gérer les paramètres de l'organisation.

**Règles clés**

- Une permission est nommée de façon stable et vérifiée par le backend.
- Les permissions sont cumulatives à l'intérieur d'un rôle.
- Le refus est explicite et journalisé lorsque l'opération est sensible.

## 3.4 Contrôle d'accès

- Vérifier les permissions dans le backend.
- Empêcher l'accès aux ressources d'un autre espace de travail.
- Empêcher l'accès aux projets non autorisés.
- Vérifier la permission de consulter les enregistrements.
- Vérifier la permission de télécharger des fichiers.
- Vérifier la permission de rejoindre une réunion.
- Journaliser les opérations sensibles dans les audit logs.

**Règles clés**

- Le contrôle d'accès ne repose jamais uniquement sur l'interface.
- Chaque requête porte l'identité de l'utilisateur et le contexte de l'espace.
- Les objets enfants (tâche, fichier, message, réunion) héritent des contrôles de leur parent.
- Toute vérification refusée sur une opération sensible est traçable.

## Points de vigilance

- Éviter l'élévation de privilèges lors de la création de rôles personnalisés.
- Vérifier les permissions sur les actions en masse (import, suppression, export).
- Tester l'isolation multi-espaces avec des scénarios d'accès croisés.
- Maintenir une matrice rôle × permission documentée et testée.

## Liens

- [Espaces de travail](02-workspaces.md)
- [Équipes](04-equipes.md)
- [Sécurité & confidentialité](16-securite.md)
- [Administration & gouvernance](15-administration.md)
