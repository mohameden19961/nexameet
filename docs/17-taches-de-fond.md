# 17. Système & traitement en arrière-plan

> **Réf. catalogue :** §17 · **Statut :** Transverse · **Domaine :** Internal system functions

## Objectif

Assurer l'exécution fiable des traitements qui ne doivent pas bloquer l'interface :
transcription, analyse IA, enregistrements, rappels, nettoyage et surveillance.
Le socle repose sur **Redis**, **BullMQ**, des **workers** et des tâches planifiées.

## 17.1 Jobs en arrière-plan

- Créer une tâche de traitement.
- La placer dans une file.
- Sélectionner un worker adapté.
- Exécuter la tâche.
- Mettre à jour l'état de la tâche.
- Réessayer en cas d'échec.
- Journaliser l'erreur.
- Empêcher l'exécution en double.
- Terminer la tâche.
- Nettoyer les fichiers temporaires.

**Règles clés**

- Chaque job possède un identifiant unique et un état persistant.
- Les jobs sont idempotents : une nouvelle exécution ne duplique pas les résultats.
- Les tentatives sont limitées avec un délai croissant.
- Les jobs bloqués sont détectés et repris.
- Les fichiers temporaires sont supprimés même en cas d'échec.

## 17.2 Tâches planifiées

- Envoyer les rappels de réunion.
- Envoyer les rappels de tâche.
- Nettoyer les fichiers temporaires.
- Gérer les données expirées selon la politique.
- Exécuter les opérations planifiées.

**Règles clés**

- Les tâches planifiées sont exécutées une seule fois par échéance.
- Les rappels respectent le fuseau horaire de l'utilisateur.
- Le nettoyage ne supprime jamais une donnée encore référencée.
- Les exécutions sont journalisées.

## 17.3 Surveillance du système

- Surveiller l'API.
- Surveiller Redis.
- Surveiller PostgreSQL.
- Surveiller MinIO.
- Surveiller LiveKit.
- Surveiller les workers.
- Journaliser les erreurs.
- Tracer les requêtes et les opérations.
- Mesurer le temps de réponse.

**Règles clés**

- Chaque service expose un état de santé (*health check*).
- Les métriques couvrent au minimum : disponibilité, latence, taux d'erreur, profondeur de file.
- Les traces relient une requête à ses jobs et appels externes.
- Les alertes sont définies pour les seuils critiques.

## 17.4 Fiabilité

- Gérer les pannes de service.
- Réessayer.
- Gérer les interruptions réseau.
- Récupérer les tâches bloquées.
- Gérer les webhooks en double.
- Protéger les opérations contre les duplications involontaires.

**Règles clés**

- Toute opération critique est rejouable sans effet de bord.
- Les événements externes sont dédupliqués par clé.
- Les services dégradés n'entraînent pas de perte de données.
- Les erreurs sont visibles, catégorisées et actionnables.

## Points de vigilance

- Dimensionner les workers et la file selon la charge.
- Éviter les jobs trop longs : découper les traitements audio.
- Surveiller la saturation de Redis et de MinIO.
- Prévoir une stratégie de sauvegarde de PostgreSQL et de MinIO.
- Tester les scénarios de reprise après incident.

## Liens

- [Intégration LiveKit](10-livekit.md)
- [Assistant IA](11-assistant-ia.md)
- [Notifications](12-notifications.md)
- [Administration](15-administration.md)
- [Architecture](../architecture/README.md)
