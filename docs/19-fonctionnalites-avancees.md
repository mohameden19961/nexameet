# 19. Fonctionnalités avancées & futures

> **Réf. catalogue :** §19 · **Statut :** Post-MVP · **Domaine :** Future releases

## Objectif

Décrire les évolutions prévues après le MVP. Elles ne doivent pas complexifier la première
version, mais l'architecture doit rester compatible avec leur ajout.

## 19.1 Tableau blanc collaboratif

- Créer un tableau blanc.
- Dessiner.
- Ajouter des formes.
- Ajouter du texte.
- Collaborer simultanément.
- Sauvegarder le tableau blanc.
- Lier le tableau blanc à un projet ou à une réunion.

**Implications techniques** : synchronisation temps réel, résolution de conflits,
stockage des documents, permissions par tableau.

## 19.2 Calendrier avancé

- Calendrier personnel.
- Calendrier d'équipe.
- Planification de réunions.
- Réunions récurrentes.
- Gestion des conflits.
- Synchronisation avec des calendriers externes lorsque nécessaire.

**Implications techniques** : modèle de récurrence, fuseaux horaires, connecteurs externes,
détection de disponibilité.

## 19.3 Webinaires & événements

- Créer un webinaire.
- Gérer les inscriptions.
- Gérer les intervenants.
- Gérer la présence.
- Afficher la diffusion.
- Enregistrer l'événement.
- Produire des rapports de participation.

**Implications techniques** : gestion de grandes audiences, rôles spécifiques,
inscriptions, diffusion, analytique.

## 19.4 IA avancée

- Identification des locuteurs (*diarization*).
- Recherche sémantique dans les réunions.
- Poser des questions sur une réunion passée.
- Comparer plusieurs réunions.
- Détecter les sujets récurrents.
- Extraire les décisions historiques.
- Résumer les réunions longues par étapes.
- Prise en charge multilingue.
- Amélioration du traitement des dialectes arabes.
- Suggérer des tâches à partir du contexte du projet.

**Implications techniques** : stockage vectoriel, indexation sémantique, modèles multilingues,
gestion de versions des résultats.

## 19.5 Analytique avancée

- Statistiques de réunions.
- Statistiques de projets.
- Indicateurs d'achèvement des tâches.
- Indicateurs de participation.
- Indicateurs d'utilisation de la plateforme.
- Rapports d'organisation.

**Implications techniques** : entrepôt de données, agrégations planifiées, exports,
tableaux de bord configurables.

## 19.6 Applications mobiles

- Application Android.
- Application iOS.
- Notifications push.
- Participation aux réunions.
- Gestion des tâches.
- Consultation des enregistrements et des résumés.

**Implications techniques** : API mobile stable, authentification adaptée,
notifications push, optimisation média.

## Points de vigilance

- Ne pas anticiper ces fonctionnalités au détriment de la qualité du MVP.
- Concevoir des points d'extension sans sur-ingénierie.
- Valider la valeur utilisateur avant chaque investissement.
- Estimer les coûts d'infrastructure (stockage, IA, streaming).

## Liens

- [MVP](20-mvp.md)
- [Hors périmètre](21-hors-mvp.md)
- [Assistant IA](11-assistant-ia.md)
- [Architecture](../architecture/README.md)
