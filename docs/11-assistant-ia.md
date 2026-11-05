# 11. Assistant IA de réunion

> **Réf. catalogue :** §11 · **Statut :** MVP · **Domaine :** Smart meeting assistant

## Objectif

Transformer un enregistrement de réunion en connaissances exploitables : transcription,
résumé, décisions et tâches suggérées. L'IA propose, **l'humain décide** : aucun résultat
n'est intégré au projet sans revue et approbation.

## 11.1 Activation du traitement IA

- Activer le traitement de la réunion.
- Définir la langue cible.
- Choisir le type de traitement.
- Vérifier qu'un enregistrement valide existe.
- Vérifier le consentement de l'utilisateur et la politique de l'organisation.
- Créer un job dans **BullMQ**.

**Règles clés**

- Sans enregistrement valide, le traitement est refusé.
- Le consentement et la politique de l'organisation sont vérifiés avant tout traitement.
- Un job unique est créé par demande ; les doublons sont évités.
- Le type de traitement détermine les étapes exécutées.

## 11.2 Traitement audio

- Récupérer l'enregistrement depuis **MinIO**.
- Extraire la piste audio.
- Convertir l'audio dans un format adapté.
- Découper les enregistrements longs lorsque nécessaire.
- Gérer les fichiers temporaires.
- Nettoyer les fichiers temporaires à la fin du traitement.

**Règles clés**

- Les fichiers temporaires sont isolés par job et supprimés systématiquement.
- Le découpage préserve la continuité des horodatages.
- Les formats audio pris en charge sont normalisés avant transcription.

## 11.3 Speech-to-text

- Envoyer l'audio à **Whisper**.
- Définir la langue lorsque nécessaire.
- Extraire le texte.
- Obtenir les horodatages lorsqu'ils sont disponibles.
- Sauvegarder le texte.
- Sauvegarder les segments temporels.
- Définir l'état du traitement.
- Gérer les erreurs.
- Réessayer en cas d'échec.

**Règles clés**

- La transcription est stockée avec ses segments et leurs horodatages.
- Les erreurs sont catégorisées (audio invalide, service indisponible, délai dépassé).
- Les tentatives sont limitées et espacées (*backoff*).
- Le texte original est conservé même après correction.

## 11.4 Gestion du transcript

- Consulter le texte complet.
- Consulter les segments.
- Naviguer par horodatage.
- Rechercher dans le texte.
- Corriger le texte.
- Modifier le texte selon les permissions.
- Télécharger le texte.
- Conserver une copie du texte original.
- Journaliser les modifications.

**Règles clés**

- Toute correction est attribuée à son auteur et horodatée.
- L'original reste accessible pour comparaison.
- La recherche dans le transcript respecte les permissions.
- Le téléchargement est contrôlé comme les autres fichiers.

## 11.5 Résumé de réunion

- Créer un résumé exécutif.
- Extraire les sujets principaux.
- Identifier les points importants.
- Identifier les questions ouvertes.
- Créer un résumé dans la langue choisie.
- Sauvegarder le résumé.
- Modifier le résumé.
- Régénérer le résumé sur demande.

**Règles clés**

- Le résumé est lié à la réunion et à la version de transcription utilisée.
- Une régénération crée une nouvelle version sans écraser l'ancienne.
- Le résumé peut être édité par un utilisateur autorisé.

## 11.6 Extraction des décisions

- Extraire les décisions.
- Décrire la décision.
- Lier la décision à un segment du transcript.
- Déterminer si la décision est confirmée ou proposée.
- Afficher la décision pour revue.
- Accepter la décision.
- Rejeter la décision.
- Modifier la décision.

**Règles clés**

- Chaque décision possède un état : proposée, confirmée, acceptée, rejetée.
- Le lien vers le segment source permet de vérifier le contexte.
- Une décision rejetée reste tracée dans l'historique.

## 11.7 Extraction des actions

- Extraire des tâches suggérées.
- Créer un titre de tâche.
- Créer une description.
- Suggérer l'assigné lorsqu'il existe une preuve claire.
- Suggérer l'échéance lorsqu'elle est explicite.
- Définir un niveau de confiance.
- Lier la tâche au texte d'origine.
- Afficher la tâche pour revue.
- Modifier la tâche.
- Accepter la tâche.
- Rejeter la tâche.

**Règles clés**

- Une suggestion n'est jamais créée directement comme tâche du projet.
- Le niveau de confiance aide l'utilisateur à prioriser sa revue.
- Les suggestions d'assigné et d'échéance ne sont faites qu'en présence d'indices explicites.
- Le lien vers le texte source est conservé après création.

## 11.8 Revue humaine

- Revoir le résumé.
- Revoir les décisions.
- Revoir les tâches.
- Corriger les informations erronées.
- Accepter les résultats.
- Rejeter les résultats.
- Approuver un ensemble de résultats.
- Créer les tâches approuvées dans le projet.
- Sauvegarder le journal des approbations.

**Règles clés**

- La revue humaine est obligatoire avant toute création de tâche.
- L'approbation en lot est possible mais reste traçable item par item.
- Le journal d'approbation conserve l'identité du valideur et la date.
- Les résultats rejetés ne sont pas supprimés silencieusement.

## 11.9 Gestion des résultats IA

- Consulter les résultats de la réunion.
- Retraiter la réunion.
- Consulter l'état du traitement.
- Consulter l'historique des traitements.
- Consulter les erreurs de traitement.
- Comparer les résultats des différentes versions lorsque cela est pris en charge.

**Règles clés**

- L'état est visible par les utilisateurs autorisés : en attente, en cours, terminé, échoué.
- Un retraitement crée une nouvelle version.
- Les erreurs sont compréhensibles et actionnables.

## 11.10 Gestion des jobs IA

- Créer des jobs.
- Gérer la file d'attente.
- Exécuter des workers.
- Réessayer.
- Gérer les tâches échouées.
- Empêcher la duplication.
- Suivre la progression du traitement.
- Envoyer une notification à la fin.

**Règles clés**

- Un job possède un identifiant unique et un état persistant.
- Les workers sont idempotents.
- Les jobs bloqués sont détectés et récupérés.
- La progression est exposée à l'interface.

## Points de vigilance

- Qualité audio et bruit de fond influencent fortement la transcription.
- Langues et dialectes : prévoir une évaluation dédiée, notamment pour l'arabe.
- Coût et latence des appels LLM : limiter la taille des contextes et mettre en cache.
- Ne jamais envoyer de données sensibles à un service externe sans cadre explicite.
- Conserver la traçabilité complète : enregistrement → transcript → résumé → décision → tâche.

## Liens

- [Réunions](09-reunions.md)
- [LiveKit](10-livekit.md)
- [Tâches & Kanban](06-taches-kanban.md)
- [Tâches de fond](17-taches-de-fond.md)
- [Fonctionnalités avancées](19-fonctionnalites-avancees.md)
