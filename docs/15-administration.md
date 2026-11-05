# 15. Administration & gouvernance

> **Réf. catalogue :** §15 · **Statut :** Transverse · **Domaine :** Organization and system administration

## Objectif

Donner aux administrateurs les moyens de configurer l'organisation, de surveiller la
plateforme et de tracer les opérations sensibles. La gouvernance couvre à la fois
l'administration métier et l'administration système.

## 15.1 Administration de l'organisation

- Gérer les paramètres de l'organisation.
- Gérer les membres.
- Gérer les équipes.
- Gérer les espaces de travail.
- Gérer les rôles.
- Surveiller les activités.
- Gérer les politiques de stockage.
- Gérer la politique d'enregistrement des réunions.

**Règles clés**

- Les actions d'administration sont réservées aux rôles autorisés.
- Les politiques définies au niveau de l'organisation s'appliquent à tous les espaces.
- Les changements de politique sont journalisés.

## 15.2 Administration système

- Consulter l'état des services.
- Surveiller les erreurs du backend.
- Surveiller les jobs.
- Surveiller les opérations d'enregistrement.
- Surveiller le stockage.
- Surveiller la consommation des ressources.
- Gérer les paramètres système.

**Règles clés**

- L'état des services couvre au minimum : API, Redis, PostgreSQL, MinIO, LiveKit et workers.
- Les erreurs sont consultables avec un niveau de détail adapté au rôle.
- Les alertes critiques sont remontées aux responsables.

## 15.3 Audit logs

- Journaliser les opérations de connexion.
- Journaliser les changements de permissions.
- Journaliser les suppressions de fichiers.
- Journaliser l'accès aux enregistrements selon la politique.
- Journaliser l'approbation des tâches extraites.
- Journaliser les opérations administratives.
- Consulter le journal des opérations pour l'administrateur autorisé.

**Règles clés**

- Une entrée d'audit contient au minimum : date, acteur, action, ressource, résultat, contexte.
- Les journaux sont en lecture seule et protégés contre la modification.
- Les données sensibles (secrets, tokens) ne sont jamais écrites dans les logs.
- La durée de conservation des audit logs est définie par la politique.

## Points de vigilance

- Séparer les rôles d'administration métier et d'administration système.
- Prévoir une procédure de réponse aux incidents.
- Surveiller les tentatives d'accès non autorisées.
- Ne pas exposer les journaux bruts aux utilisateurs standards.

## Liens

- [Rôles & permissions](03-roles-permissions.md)
- [Sécurité](16-securite.md)
- [Tâches de fond](17-taches-de-fond.md)
- [Système & monitoring](../architecture/README.md)
