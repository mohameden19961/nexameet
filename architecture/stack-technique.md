# Stack technique

> Ce document distingue ce qui est **imposé par le catalogue fonctionnel** de ce qui est
> **proposé** pour l'implémentation. Les propositions ne sont pas des engagements :
> elles doivent être validées par l'équipe.

## Composants spécifiés

| Composant | Rôle | Référence |
|---|---|---|
| **PostgreSQL** | Métadonnées : identités, espaces, projets, tâches, messages, réunions, transcripts, audit | §8.5, §17.3 |
| **Redis** | Cache, présence, pub/sub, backend des files | §17.3 |
| **BullMQ** | File de jobs asynchrone | §11.1, §11.10, §17.1 |
| **MinIO** | Stockage objet des fichiers et enregistrements | §8.5, §9.6, §10.4 |
| **LiveKit** | Audio, vidéo, partage d'écran, egress, webhooks | §9, §10 |
| **Whisper** | Speech-to-text | §11.3 |
| **LLM** | Résumé, décisions, actions | §11.5–11.7 |
| **Docker Compose** | Environnement conteneurisé | §20.G |

## Composants non spécifiés (propositions)

| Composant | Proposition | Justification |
|---|---|---|
| **Frontend** | React ou Next.js + TypeScript | Écosystème mature, composants riches, SSR possible, bonne prise en charge RTL. |
| **UI** | Tailwind CSS + bibliothèque accessible | Rapidité, cohérence, support du mode sombre et de l'accessibilité. |
| **Backend** | Node.js + NestJS (ou Express structuré) | Typage partagé avec le frontend, bon support WebSocket, écosystème BullMQ. |
| **API** | REST + WebSocket | Simplicité, compatibilité, séparation claire lecture/écriture et temps réel. |
| **Temps réel** | WebSocket (Socket.IO ou `ws`) + Redis adapter | Diffusion multi-instances et reconnexion. |
| **ORM** | Prisma ou TypeORM | Migrations versionnées, typage, productivité. |
| **Validation** | Zod ou class-validator | Validation stricte des entrées. |
| **Authentification** | Sessions serveur + cookies sécurisés, ou JWT courts + refresh | À trancher selon le besoin de révocation et le mobile futur. |
| **Recherche** | PostgreSQL full-text au MVP, moteur dédié ensuite | Simplicité initiale, évolution possible. |
| **Monitoring** | OpenTelemetry + Prometheus/Grafana, ou solution managée | Traces, métriques, journaux corrélés. |
| **Tests** | Vitest/Jest + Supertest + Playwright | Unitaires, intégration API, E2E. |
| **CI/CD** | GitHub Actions | Standard, simple à intégrer. |

## Architecture logique proposée

```text
apps/
├── web/                 # Application frontend
├── api/                 # API backend
│   ├── auth/
│   ├── workspaces/
│   ├── teams/
│   ├── projects/
│   ├── tasks/
│   ├── messaging/
│   ├── files/
│   ├── meetings/
│   ├── ai/
│   ├── notifications/
│   ├── search/
│   └── admin/
└── worker/              # Consommateurs BullMQ

packages/
├── database/            # Schéma, migrations, seeds
├── shared/              # Types, constantes, validateurs
└── config/              # Configuration partagée

infra/
├── docker-compose.yml
├── livekit/
└── minio/
```

## Variables d'environnement (proposition)

> Les valeurs réelles ne doivent jamais être commitées.

```dotenv
# Application
NODE_ENV=development
APP_URL=http://localhost:3000
API_URL=http://localhost:4000

# PostgreSQL
DATABASE_URL=postgresql://user:password@postgres:5432/nexameet

# Redis
REDIS_URL=redis://redis:6379

# MinIO
MINIO_ENDPOINT=minio
MINIO_PORT=9000
MINIO_ACCESS_KEY=change-me
MINIO_SECRET_KEY=change-me
MINIO_BUCKET_FILES=nexameet-files
MINIO_BUCKET_RECORDINGS=nexameet-recordings

# LiveKit
LIVEKIT_URL=wss://livekit.example.com
LIVEKIT_API_KEY=change-me
LIVEKIT_API_SECRET=change-me

# IA
WHISPER_URL=http://whisper:9000
LLM_PROVIDER=openai
LLM_API_KEY=change-me
LLM_MODEL=change-me

# Sécurité
SESSION_SECRET=change-me
WEBHOOK_SECRET=change-me
```

## Contraintes d'implémentation

### Performance

- Les appels IA sont asynchrones : aucune requête HTTP ne doit attendre une transcription.
- Les listes sont paginées.
- Les fichiers passent par des URLs présignées, pas par le backend.
- Les vidéos ne transitent jamais par l'API.

### Fiabilité

- Les webhooks sont idempotents.
- Les jobs sont rejouables.
- Les migrations sont versionnées.
- Les services exposent un *health check*.

### Sécurité

- Validation systématique des entrées.
- Secrets uniquement en variables d'environnement.
- Principe du moindre privilège pour les tokens LiveKit.
- Chiffrement en transit (HTTPS/WSS).

### Portabilité

- Docker Compose doit permettre de lancer l'ensemble de la plateforme localement.
- Les services externes (Whisper, LLM) doivent pouvoir être remplacés par des API distantes.

## Décisions à prendre

| Décision | Options | Critères |
|---|---|---|
| Sessions vs JWT | Cookies serveur / JWT + refresh | Révocation, mobile, complexité |
| Framework frontend | React / Next.js / autre | Équipe, SEO, temps réel |
| Framework backend | NestJS / Express / Fastify | Structure, typage, écosystème |
| Hébergement IA | Local / API managée | Coût, confidentialité, latence |
| Recherche | PostgreSQL / Meilisearch / OpenSearch | Volume, pertinence, exploitation |
| Monitoring | OpenTelemetry / SaaS | Budget, compétences |

## Liens

- [Architecture](README.md)
- [Modèle de données](modele-de-donnees.md)
- [Sécurité](../docs/16-securite.md)
- [Tâches de fond](../docs/17-taches-de-fond.md)
