# Documentation NexaMeet

Index complet de la spécification fonctionnelle et des documents d'architecture.

## Par où commencer ?

| Besoin | Document |
|---|---|
| Découvrir le produit | [`../README.md`](../README.md) |
| Comprendre le scénario complet | [`parcours-utilisateur.md`](parcours-utilisateur.md) |
| Vérifier le périmètre | [`20-mvp.md`](20-mvp.md) · [`21-hors-mvp.md`](21-hors-mvp.md) |
| Vérifier les critères de réussite | [`22-definition-of-done.md`](22-definition-of-done.md) |
| Préparer le développement | [`../architecture/README.md`](../architecture/README.md) |
| Comprendre un terme | [`glossaire.md`](glossaire.md) |

## Les 22 sections

### Fondations

| # | Section | Statut | Document |
|---|---|---|---|
| 1 | Authentification & gestion d'identité | MVP | [`01-authentification.md`](01-authentification.md) |
| 2 | Gestion des espaces de travail | MVP | [`02-workspaces.md`](02-workspaces.md) |
| 3 | Rôles & permissions (RBAC) | MVP | [`03-roles-permissions.md`](03-roles-permissions.md) |
| 4 | Gestion des équipes | MVP | [`04-equipes.md`](04-equipes.md) |

### Collaboration & travail

| # | Section | Statut | Document |
|---|---|---|---|
| 5 | Gestion de projets | MVP | [`05-projets.md`](05-projets.md) |
| 6 | Gestion des tâches — Kanban | MVP | [`06-taches-kanban.md`](06-taches-kanban.md) |
| 7 | Messagerie en temps réel | MVP | [`07-messagerie.md`](07-messagerie.md) |
| 8 | Gestion des fichiers | MVP | [`08-fichiers.md`](08-fichiers.md) |

### Réunions & intelligence

| # | Section | Statut | Document |
|---|---|---|---|
| 9 | Gestion des réunions | MVP | [`09-reunions.md`](09-reunions.md) |
| 10 | Intégration LiveKit | MVP | [`10-livekit.md`](10-livekit.md) |
| 11 | Assistant IA de réunion | MVP | [`11-assistant-ia.md`](11-assistant-ia.md) |

### Plateforme

| # | Section | Statut | Document |
|---|---|---|---|
| 12 | Système de notifications | MVP (base) | [`12-notifications.md`](12-notifications.md) |
| 13 | Système de recherche | MVP (base) | [`13-recherche.md`](13-recherche.md) |
| 14 | Tableau de bord & activité | MVP (base) | [`14-tableau-de-bord.md`](14-tableau-de-bord.md) |
| 15 | Administration & gouvernance | Transverse | [`15-administration.md`](15-administration.md) |

### Transverse

| # | Section | Statut | Document |
|---|---|---|---|
| 16 | Sécurité & confidentialité | Transverse | [`16-securite.md`](16-securite.md) |
| 17 | Système & traitement en arrière-plan | Transverse | [`17-taches-de-fond.md`](17-taches-de-fond.md) |
| 18 | Expérience utilisateur & interface | Transverse | [`18-experience-utilisateur.md`](18-experience-utilisateur.md) |

### Cadrage produit

| # | Section | Statut | Document |
|---|---|---|---|
| 19 | Fonctionnalités avancées & futures | Post-MVP | [`19-fonctionnalites-avancees.md`](19-fonctionnalites-avancees.md) |
| 20 | MVP — première version officielle | MVP | [`20-mvp.md`](20-mvp.md) |
| 21 | Hors périmètre du MVP | Cadrage | [`21-hors-mvp.md`](21-hors-mvp.md) |
| 22 | Definition of Done du MVP | Cadrage | [`22-definition-of-done.md`](22-definition-of-done.md) |

## Conventions

- **Statut `MVP`** : fonctionnalité attendue dans la première version.
- **Statut `MVP (base)`** : version simplifiée attendue dans le MVP, extension ensuite.
- **Statut `Transverse`** : exigence qui s'applique à toutes les fonctionnalités.
- **Statut `Post-MVP`** : prévue pour une version ultérieure.
- Les identifiants techniques (tables, rôles, composants) restent en anglais.
- Les liens entre sections sont indiqués en fin de chaque document.

## Source

Le contenu est issu du diagramme **NexaMeet — Complete Functionalities Catalogue**
(`assets/NexaMeet.svg` et sa version éditable `assets/NexaMeet.drawio`).
