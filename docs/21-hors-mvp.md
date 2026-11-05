# 21. Hors périmètre du MVP

> **Réf. catalogue :** §21 · **Statut :** Cadrage · **Domaine :** Périmètre produit

## Objectif

Définir explicitement ce qui est **volontairement exclu** de la première version.
Ce document protège l'équipe contre la dérive du périmètre (*scope creep*) et clarifie
les attentes.

## Fonctionnalités reportées

- **Tableau blanc avancé.**
- **Calendrier avancé.**
- **Webinaires.**
- **Applications mobiles.**
- **Analytique avancée.**
- **Recherche sémantique.**
- **Entraînement d'un modèle IA personnalisé.**
- **Nombreuses intégrations externes.**
- **Système complexe de gestion d'entreprise.**
- **Système de facturation et d'abonnements.**

## Raisons du report

| Fonctionnalité | Raison |
|---|---|
| Tableau blanc | Complexité temps réel élevée, non essentiel au parcours de valeur. |
| Calendrier avancé | Nécessite récurrence, fuseaux horaires et connecteurs externes. |
| Webinaires | Modèle d'audience et d'infrastructure différent des réunions internes. |
| Applications mobiles | Coût de développement et de maintenance trop élevé pour un premier release. |
| Analytique avancée | Nécessite un entrepôt de données et des définitions métriques stables. |
| Recherche sémantique | Dépend d'une indexation vectorielle et de modèles supplémentaires. |
| Modèle IA personnalisé | Coût d'entraînement et de données insuffisant au démarrage. |
| Intégrations externes | Chaque intégration ajoute authentification, quotas et maintenance. |
| Gestion d'entreprise complexe | Le MVP cible une organisation simple, pas un ERP. |
| Facturation | Aucun modèle économique validé à ce stade. |

## Ce qui reste autorisé dans le MVP

Exclure ces fonctionnalités ne signifie pas ignorer leurs conséquences :

- Les modèles de données doivent permettre de les ajouter plus tard sans refonte majeure.
- Les interfaces doivent rester extensibles (navigation, permissions, événements).
- Les choix d'architecture ne doivent pas bloquer l'ajout du temps réel avancé,
  de l'analytique ou du mobile.

## Règle de gestion du périmètre

Toute demande qui sort du périmètre doit être :

1. documentée comme **post-MVP** ;
2. évaluée en coût et en impact sur la Definition of Done ;
3. validée explicitement avant intégration au plan de release.

## Liens

- [MVP](20-mvp.md)
- [Definition of Done](22-definition-of-done.md)
- [Fonctionnalités avancées](19-fonctionnalites-avancees.md)
- [Feuille de route](../README.md#feuille-de-route)
