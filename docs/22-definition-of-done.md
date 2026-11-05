# 22. Definition of Done du MVP

> **Réf. catalogue :** §22 · **Statut :** Cadrage · **Domaine :** Critères de réussite

## Principe

La première version n'est **pas** considérée comme terminée simplement parce que toutes
les pages existent. Elle doit réussir le scénario de bout en bout ci-dessous, de manière
fiable et reproductible.

## Scénario officiel

1. Un utilisateur crée un compte.
2. Il crée un espace de travail.
3. Il invite d'autres membres.
4. Il crée un projet.
5. Il crée un canal lié au projet.
6. Les membres communiquent par messages.
7. L'utilisateur crée une tâche et l'assigne.
8. Il crée une réunion liée au projet.
9. Les participants rejoignent la réunion.
10. La caméra, le microphone et le partage d'écran fonctionnent.
11. La réunion est enregistrée.
12. L'enregistrement est sauvegardé dans MinIO.
13. Un webhook est envoyé après la fin de l'enregistrement.
14. Un worker démarre le traitement de l'enregistrement.
15. Whisper extrait le texte.
16. Le LLM crée le résumé, les décisions et les tâches suggérées.
17. L'utilisateur examine les résultats.
18. Il approuve les tâches correctes.
19. Les tâches apparaissent dans le tableau Kanban.
20. Les membres peuvent suivre leur exécution.

> **Si ce scénario réussit de manière fiable, NexaMeet a atteint le cœur de son idée.**

## Critères de qualité associés

La réussite du scénario ne suffit pas si elle n'est pas fiable. Les critères suivants
s'appliquent :

### Fonctionnel

- Chaque étape produit le résultat attendu.
- Les données persistent entre les sessions.
- Les permissions sont respectées à chaque étape.
- Les erreurs sont gérées et compréhensibles.

### Fiabilité

- Le scénario passe de manière répétée, sans intervention manuelle.
- Les services redémarrent sans perte de données.
- Les webhooks en double ne créent pas de doublons.
- Les jobs interrompus peuvent être repris.

### Sécurité

- Un utilisateur ne peut pas accéder aux données d'un autre espace.
- Les tokens LiveKit ne sont pas exposés.
- Les fichiers et enregistrements ne sont pas accessibles sans permission.
- Les opérations sensibles sont auditées.

### Performance perçue

- L'interface reste utilisable pendant les traitements longs.
- Le traitement IA affiche un état et une progression.
- La réunion reste stable sur une connexion raisonnable.

### Maintenabilité

- Les tests unitaires et d'intégration couvrent les parcours critiques.
- La configuration est documentée (variables d'environnement, Docker Compose).
- Les migrations de base de données sont versionnées.

## Preuves attendues

Pour déclarer le MVP terminé, fournir :

- Une démonstration enregistrée ou rejouable du scénario complet.
- Les résultats des tests automatisés.
- La liste des variables d'environnement et la procédure d'installation.
- Un état des services et des files de traitement.
- Les journaux d'audit des opérations sensibles.
- Une revue des limites connues et des risques résiduels.

## Ce qui n'est pas exigé

- Une couverture de tests exhaustive.
- Une haute disponibilité multi-région.
- Une optimisation avancée des coûts IA.
- La parité fonctionnelle avec les outils du marché.
- Les fonctionnalités listées dans [Hors périmètre](21-hors-mvp.md).

## Liens

- [MVP](20-mvp.md)
- [Hors périmètre](21-hors-mvp.md)
- [Parcours utilisateur](parcours-utilisateur.md)
- [Assistant IA](11-assistant-ia.md)
- [Architecture](../architecture/README.md)
