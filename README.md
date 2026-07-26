# Subkit - In-App Subscriptions Made Easy 🚀
> **Version: 1.0.0 (Production-Ready)**

Subkit is a production-grade, developer-friendly platform designed to handle the complexity of global in-app subscriptions, customer management, and real-time revenue analytics—from your first transaction to your billionth.

This repository hosts Subkit's public product surface: product discovery, SDK Guides, API Reference, Pricing Catalog, Roadmap, System Status, and contact intake.

---

## 🛠️ Tech Stack & Design System

The project is built on the absolute cutting-edge frontend ecosystem:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/), [TypeScript 6](https://www.typescriptlang.org/)
- **CSS Engine**: [Tailwind CSS v4](https://tailwindcss.com/) (using native CSS variables as semantic theme tokens)
- **UI & Primitives**: 
  - [Base UI Primitives](https://base-ui.com/)
  - [Class Variance Authority (CVA)](https://cva.style/)
  - `clsx` & `tailwind-merge` for clean utility string compositions
  - [Lucide React](https://lucide.dev/) for dynamic, crisp visual icon sets
- **Typography Guidelines**:
  - Headings & Visual Branding: **Plus Jakarta Sans**
  - Body & Form Controls: **Inter**
  - Technical Panels & Event Streams: **Source Code Pro**

---

## 📂 Codebase Mimarisi & Klasör Yapısı

Routing ile domain implementation birbirinden ayrılır. `app/(site)` URL'leri değiştirmeden ortak public shell'i sağlar; domain içeriği, tipleri, server/client implementation ve testler ilgili `features/` alanında birlikte tutulur:

```text
app/
├── (site)/          # Ortak public site layout ve route entry point'leri
└── api/             # HTTP route adapter'ları
features/
├── contact/         # Contact Inquiry intake ve delivery adapter'ları
├── docs/            # SDK Guide ve API Reference presentation
├── home/            # Ana sayfa domain implementation'ı
├── navigation/      # Public navigation content ve etkileşim
├── pricing/         # Pricing Catalog, Pricing Quote ve calculator
├── roadmap/         # Roadmap snapshot ve presentation
└── status/          # System Status modeli ve presentation
components/
├── ui/              # Saf, atomik, markasız arayüz elemanları
├── layout/          # Global iskelet elemanları
└── visuals/         # Paylaşılan dekoratif ve teknik görseller
docs/adr/             # Uzun ömürlü mimari kararlar
```

---

## ⚡ Hızlı Başlangıç (Quick Start)

### 1. Yerel Geliştirme (Local Preview)
Projeyi bilgisayarınızda çalıştırmak için:
```bash
npm install
npm run dev
```
* Tarayıcınızda açın: [http://localhost:3000](http://localhost:3000)

### 2. Üretim Derlemesi (Production Compilation)
Kod doğruluğu, TypeScript ve Turbopack derlemesi için:
```bash
npm run build
```

### 3. Doğrulama

```bash
npm test
npm run lint
npx tsc --noEmit
```

Pricing Catalog, Roadmap ve System Status için authoritative kaynak planlanan `subkit-internal-services` reposudur. Bu repo hazır olana kadar pricing ve roadmap tarihli temporary local kaynaklar kullanır; System Status doğrulanamıyorsa `Unknown` gösterilir.

---

## 🐋 Docker & Küresel Dağıtım (Deployment)

Projemiz, **Next.js Standalone** çıktısı sayesinde Dockerize edilmiş durumdadır ve **Bunny.net Magic Containers** üzerinde global edge olarak dağıtılmaya tamamen hazırdır.

Detaylı adım adım kılavuz için **[DEPLOYMENT.md](./DEPLOYMENT.md)** dosyasını inceleyin.

---

## 🤖 Yapay Zeka Ajan Kuralları (AI Agents)

Kodlama ajanlarının kuralları **[AGENTS.md](./AGENTS.md)**, ürün dili **[CONTEXT.md](./CONTEXT.md)** ve mimari kararlar **[docs/adr](./docs/adr/)** altında tutulur.
