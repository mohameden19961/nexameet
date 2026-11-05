# 16. Sécurité & confidentialité

> **Réf. catalogue :** §16 · **Statut :** Transverse · **Domaine :** Security and privacy functions

## Objectif

Protéger les identités, les données, les fichiers, les enregistrements et les transcripts.
La sécurité n'est pas une fonctionnalité isolée : chaque section du produit doit respecter
les exigences ci-dessous.

## Exigences de sécurité

- Vérification de l'identité.
- Vérification des permissions.
- Protection des sessions.
- Protection des mots de passe.
- Protection des tokens LiveKit.
- Vérification des webhooks.
- Vérification de la propriété des ressources.
- Protection des fichiers.
- Prévention des accès entre espaces de travail.
- Protection des endpoints API contre les abus.
- Limitation du débit (*rate limiting*).
- Validation des entrées.
- Protection contre l'injection SQL.
- Protection contre le XSS.
- Protection contre le CSRF lorsque le mécanisme d'authentification le permet.
- Gestion des secrets dans des variables d'environnement sécurisées.
- Utilisation de HTTPS.
- Gestion des politiques de rétention des données.
- Suppression des données utilisateur conformément à la politique de l'organisation.
- Recueil du consentement avant l'enregistrement et le traitement.
- Définition des permissions d'accès aux enregistrements et aux transcripts.

## Principes directeurs

### Défense en profondeur

Chaque couche applique ses propres contrôles : interface, API, services, base de données,
stockage et infrastructure. Une vérification côté client ne remplace jamais une vérification
côté serveur.

### Moindre privilège

Les utilisateurs, les services et les tokens disposent uniquement des droits nécessaires.
Les tokens LiveKit sont limités à une salle, une durée et des actions précises.

### Isolation des espaces

Toute ressource appartient à un espace de travail. Une requête doit prouver l'appartenance
de l'utilisateur à cet espace avant de retourner ou modifier une ressource.

### Traçabilité

Les actions sensibles sont journalisées : connexions, changements de permissions,
suppressions de fichiers, accès aux enregistrements, approbations de tâches et opérations
d'administration.

### Confidentialité by design

- Collecte minimale de données.
- Consentement explicite pour l'enregistrement et le traitement IA.
- Durées de conservation définies.
- Droit à la suppression traité selon la politique.
- Données sensibles jamais journalisées en clair.

## Bonnes pratiques techniques

- Hachage des mots de passe avec un algorithme adapté (Argon2id ou bcrypt).
- Cookies `HttpOnly`, `Secure`, `SameSite` lorsque des cookies sont utilisés.
- En-têtes de sécurité HTTP (CSP, HSTS, X-Content-Type-Options, etc.).
- Validation stricte des schémas d'entrée.
- Requêtes paramétrées pour la base de données.
- Échappement du contenu affiché dans l'interface.
- URLs présignées à durée limitée pour les fichiers privés.
- Rotation et stockage sécurisé des secrets.
- Journalisation corrélée par identifiant de requête.
- Tests de sécurité et revue des dépendances.

## Points de vigilance

- Ne pas exposer l'API Secret LiveKit au navigateur.
- Vérifier la signature de chaque webhook et rejeter les événements rejoués.
- Protéger les transcripts et résumés comme des données sensibles.
- Définir clairement qui peut télécharger un enregistrement.
- Prévoir une procédure de réponse à une fuite de données.

## Liens

- [Authentification](01-authentification.md)
- [Rôles & permissions](03-roles-permissions.md)
- [Fichiers](08-fichiers.md)
- [LiveKit](10-livekit.md)
- [Administration](15-administration.md)
- [Architecture](../architecture/README.md)
