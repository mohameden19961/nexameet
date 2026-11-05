# 8. Gestion des fichiers

> **Réf. catalogue :** §8 · **Statut :** MVP · **Domaine :** File and document management

## Objectif

Centraliser les documents liés aux espaces, projets, réunions et messages. Les fichiers sont
stockés dans **MinIO**, leurs métadonnées dans **PostgreSQL**, et l'accès est contrôlé par
des permissions explicites.

## 8.1 Téléversement

- Téléverser un fichier.
- Téléverser plusieurs fichiers.
- Afficher la progression du téléversement.
- Valider le type de fichier.
- Valider la taille.
- Lier le fichier à un espace de travail.
- Lier le fichier à un projet.
- Lier le fichier à une réunion.
- Lier le fichier à un message.

**Règles clés**

- La taille maximale et les types autorisés sont définis par la politique de l'espace.
- Le téléversement multi-fichiers traite chaque fichier indépendamment.
- Un fichier peut être partagé dans plusieurs contextes sans être dupliqué.
- L'upload direct vers MinIO peut utiliser des URLs présignées.

## 8.2 Organisation

- Créer des dossiers.
- Renommer un fichier.
- Déplacer un fichier.
- Déplacer un fichier entre dossiers.
- Trier les fichiers.
- Filtrer par type.
- Rechercher des fichiers.
- Consulter les fichiers récents.
- Consulter les fichiers partagés par l'utilisateur.

**Règles clés**

- Les noms de fichiers sont affichés tels quels mais stockés avec un identifiant sûr.
- Le déplacement conserve les permissions existantes, sauf règle contraire.
- La recherche porte sur le nom et les métadonnées.

## 8.3 Opérations sur les fichiers

- Prévisualiser les fichiers pris en charge.
- Télécharger des fichiers.
- Supprimer des fichiers.
- Restaurer les fichiers supprimés lorsque cela est pris en charge.
- Afficher la taille du fichier.
- Afficher le type de fichier.
- Afficher la date de téléversement.
- Afficher le propriétaire du fichier.

**Règles clés**

- La prévisualisation ne doit pas exécuter de contenu actif.
- Le téléchargement vérifie la permission avant de générer un lien.
- La suppression peut être logique (corbeille) pour permettre la restauration.

## 8.4 Permissions des fichiers

- Définir qui peut consulter le fichier.
- Définir qui peut le télécharger.
- Définir qui peut le supprimer.
- Créer des liens de téléchargement temporaires.
- Empêcher tout accès direct non autorisé.

**Règles clés**

- Les permissions héritent du contexte (espace, projet, réunion, message) et peuvent être restreintes.
- Les liens temporaires expirent et ne révèlent pas le chemin de stockage interne.
- Les URLs MinIO publiques sont interdites pour les contenus privés.

## 8.5 Stockage

- Stocker les fichiers dans **MinIO**.
- Stocker les métadonnées dans **PostgreSQL**.
- Gérer les chemins de stockage.
- Vérifier l'intégrité des fichiers.
- Appliquer les politiques de rétention et de suppression.

**Règles clés**

- Le bucket et les chemins sont organisés par espace et par type de contenu.
- Les métadonnées comprennent au minimum : identifiant, nom, type MIME, taille, propriétaire, date, contexte.
- Une vérification d'intégrité (taille, checksum) est recommandée après upload.
- La suppression physique suit la politique de rétention de l'organisation.

## Points de vigilance

- Analyser les fichiers téléversés (antivirus, types MIME réels).
- Ne jamais faire confiance au nom de fichier fourni par le client.
- Prévoir des quotas par espace.
- Tracer les accès et suppressions dans les audit logs.

## Liens

- [Projets](05-projets.md)
- [Messagerie](07-messagerie.md)
- [Réunions](09-reunions.md)
- [Sécurité](16-securite.md)
- [Architecture](../architecture/README.md)
