# 1. Authentification & gestion d'identité

> **Réf. catalogue :** §1 · **Statut :** MVP · **Domaine :** Identité et authentification

## Objectif

Permettre à un utilisateur de créer un compte universitaire, de se connecter de manière
sécurisée, de gérer son profil et son compte, et de contrôler ses sessions actives.
L'authentification est la porte d'entrée de toutes les autres fonctionnalités :
elle doit être fiable, compréhensible et protégée.

## 1.1 Inscription

- Créer un nouveau compte.
- Saisir le nom complet.
- Saisir l'adresse e-mail.
- Saisir le mot de passe.
- Confirmer le mot de passe.
- Accepter les conditions d'utilisation et la politique de confidentialité.
- Vérifier l'adresse e-mail.
- Empêcher la création de comptes avec des adresses e-mail en doublon.
- Valider les données saisies.

**Règles clés**

- L'e-mail est l'identifiant unique du compte.
- Le mot de passe est stocké sous forme de hash, jamais en clair.
- La vérification d'e-mail conditionne l'accès aux fonctionnalités protégées.
- Les erreurs de validation sont explicites et ne révèlent pas d'informations sensibles.

## 1.2 Connexion

- Se connecter avec une adresse e-mail et un mot de passe.
- Valider les identifiants fournis.
- Gérer la session utilisateur.
- Mémoriser l'utilisateur lorsque l'option est sélectionnée.
- Se déconnecter.
- Se déconnecter de tous les appareils.
- Afficher des messages d'erreur clairs lorsque la connexion échoue.

**Règles clés**

- Un échec de connexion ne doit pas indiquer si l'e-mail existe ou non.
- La déconnexion invalide la session courante ; la déconnexion globale invalide toutes les sessions.
- L'option « se souvenir de moi » prolonge la session sans contourner les contrôles de sécurité.

## 1.3 Gestion du mot de passe

- Demander la récupération du mot de passe.
- Envoyer un lien de réinitialisation.
- Valider la validité du lien.
- Définir un nouveau mot de passe.
- Invalider les liens de réinitialisation après leur utilisation.
- Mettre fin aux anciennes sessions lorsque le mot de passe change, conformément à la politique de sécurité.

**Règles clés**

- Un lien de réinitialisation est à usage unique et expire.
- La demande de récupération renvoie toujours la même réponse, que l'e-mail existe ou non.
- Le nouveau mot de passe respecte la politique de complexité et ne peut pas réutiliser l'ancien si la politique l'interdit.

## 1.4 Profil utilisateur

- Consulter le profil.
- Modifier le nom.
- Modifier la photo de profil.
- Modifier la biographie personnelle.
- Modifier les informations de contact.
- Changer le mot de passe.
- Changer la langue.
- Définir le fuseau horaire.
- Consulter les espaces de travail auxquels l'utilisateur appartient.
- Consulter l'activité de base de l'utilisateur.

**Règles clés**

- Les champs modifiables sont limités aux données personnelles de l'utilisateur.
- Le changement de langue et de fuseau horaire s'applique à l'interface et aux dates affichées.
- La liste des espaces de travail respecte les permissions d'accès.

## 1.5 Gestion du compte

- Désactiver le compte.
- Demander la suppression du compte.
- Se déconnecter.
- Gérer les sessions actives.
- Consulter les appareils connectés lorsque cela est pris en charge.

**Règles clés**

- La désactivation suspend l'accès sans supprimer immédiatement les données.
- La suppression suit la politique de rétention et les obligations de l'organisation.
- L'utilisateur peut révoquer une session active à tout moment.

## Points de vigilance

- Protection contre le bourrage d'identifiants (*credential stuffing*) et le brute force.
- Limitation du nombre de tentatives de connexion et de réinitialisation.
- Cookies de session `HttpOnly`, `Secure` et `SameSite` lorsque des cookies sont utilisés.
- Journalisation des connexions et des changements sensibles dans les audit logs.
- Cohérence entre le changement de mot de passe et la révocation des sessions.

## Liens

- [Sécurité & confidentialité](16-securite.md)
- [Rôles & permissions](03-roles-permissions.md)
- [Espaces de travail](02-workspaces.md)
- [Notifications](12-notifications.md)
