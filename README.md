# Subkit Web

The public website and documentation surface for Subkit, an open-source and self-hostable in-app subscription platform.

> Early foundation: the product, APIs, and documentation are under active development and may change without notice.

This repository contains product pages, SDK and public-contract previews, preliminary
offering and roadmap presentations, system status, and contact intake. Private operational
integrations live in `subkit-internal-services` and are not part of this public repository.

The website distinguishes shipped foundations from planned capabilities. Subkit Cloud,
production store integrations, customer SDKs, paywall tooling, analytics, pricing, and
service-level commitments are not currently available unless a page explicitly says otherwise.
Privacy and data-processing pages describe project direction and current website handling;
they are not legal advice, compliance certifications, or executable Cloud agreements.

## Stack

- Next.js 16, React 19, and TypeScript
- Tailwind CSS 4 and Base UI primitives
- Vitest and ESLint
- Next.js standalone output for container deployment

## Local development

```bash
npm install
copy .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The internal service normally runs at `http://127.0.0.1:3001`.

The contact form requires `CONTACT_SERVICE_URL` and a matching `CONTACT_SERVICE_TOKEN`. Provider credentials such as Telegram tokens belong only in the private internal-services deployment.

## Verification

```bash
npm test
npm run lint
npx tsc --noEmit
npm run build
```

## Repository structure

```text
app/                 Route entries and HTTP adapters
features/            Product-domain modules and tests
components/          Shared UI, layout, and visual components
docs/adr/             Architecture decisions
```

Read [CONTEXT.md](./CONTEXT.md) for product boundaries, [AGENTS.md](./AGENTS.md) for contribution rules, and [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment notes.

## Security and contributions

See [SECURITY.md](./SECURITY.md) for private vulnerability reporting and [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a change.

## License

Licensed under the Apache License 2.0. See [LICENSE](./LICENSE).
