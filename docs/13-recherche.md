# 13. Système de recherche

> **Réf. catalogue :** §13 · **Statut :** MVP (base) · **Domaine :** Global search

## Objectif

Permettre de retrouver rapidement une personne, un projet, une tâche, un canal, un fichier,
une réunion, un message ou un passage de transcript — **uniquement parmi les ressources
auxquelles l'utilisateur a accès**.

## 13.1 Recherche globale

- Rechercher un utilisateur.
- Rechercher un projet.
- Rechercher une tâche.
- Rechercher un canal.
- Rechercher un fichier.
- Rechercher une réunion.
- Rechercher dans les messages.
- Rechercher dans les transcripts de réunion.

**Règles clés**

- La recherche est accessible depuis une barre globale.
- Les résultats sont regroupés par type de ressource.
- Les recherches récentes peuvent être proposées.
- Les résultats sont paginés et classés par pertinence.

## 13.2 Filtres de recherche

- Rechercher par date.
- Rechercher par utilisateur.
- Rechercher par espace de travail.
- Rechercher par projet.
- Rechercher par type de contenu.

**Règles clés**

- Les filtres sont combinables.
- Le contexte actif (espace de travail) est appliqué par défaut.
- Les filtres disponibles dépendent du type de ressource.

## 13.3 Permissions de recherche

- Ne pas afficher les résultats auxquels l'utilisateur n'a pas accès.
- Appliquer les permissions d'accès **avant** de retourner les résultats.

**Règles clés**

- Aucun résultat ne doit révéler l'existence d'une ressource privée.
- Le filtrage de sécurité est fait côté backend, pas côté client.
- Les compteurs et suggestions respectent les mêmes règles.

## Points de vigilance

- Performance des recherches sur de gros volumes (index, pagination).
- Recherche insensible à la casse et, si possible, aux accents.
- Prise en charge de l'arabe et du texte RTL dans l'indexation.
- Ne pas indexer de secrets ou de contenus supprimés.

## Liens

- [Messagerie](07-messagerie.md)
- [Fichiers](08-fichiers.md)
- [Assistant IA](11-assistant-ia.md)
- [Sécurité](16-securite.md)
