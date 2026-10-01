# CRM Engine

A PipeDrive-style CRM platform starter with a monorepo architecture: web app, API, and shared types.

## Stack

- Frontend: Next.js, TypeScript, Tailwind CSS
- Backend: NestJS, TypeScript
- Database: PostgreSQL
- ORM: Prisma
- Real-time: WebSockets / server-sent events
- Queue: BullMQ + Redis
- Auth: NextAuth / Auth.js + role-based access
- Validation: Zod
- Deployment: Docker + Compose

## Monorepo layout

- `apps/web` - Next.js application
- `apps/api` - NestJS API
- `packages/db` - Prisma schema and migrations
- `packages/shared` - shared DTOs, enums, validators, and types
- `docker-compose.yml` - local services
- `.env.example` - environment configuration

## Getting started

```bash
cp .env.example .env
npm install
npm run dev
```

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run test
```
