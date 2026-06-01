# Subkit - In-App Subscriptions Made Easy 🚀
> **Version: 1.0.0 (Production-Ready)**

Subkit is a production-grade, developer-friendly platform designed to handle the complexity of global in-app subscriptions, customer management, and real-time revenue analytics—from your first transaction to your billionth.

This repository hosts the ultra-optimized, high-performance marketing landing page and technical UI mockups built on modern React, Next.js, and Tailwind v4.

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

Kod tabanımız, en üst seviye ölçeklenebilirlik kurallarına göre katmanlandırılmıştır:

```text
components/
├── ui/              # Saf, atomik, markasız arayüz elemanları (button, generic card)
├── layout/          # Global iskelet elemanları (container, section, navbar, footer)
├── marketing/       # Pazarlama odaklı özel kartlar (hero, features, testimonials)
└── visuals/         # Dinamik, etkileşimli dashboard ve SVG akış mockup bileşenleri
lib/
├── types/           # Etki alanlarına göre ayrılmış TypeScript tanımları
└── constants/       # Etki alanlarına göre ayrılmış veri sabitleri
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

---

## 🐋 Docker & Küresel Dağıtım (Deployment)

Projemiz, **Next.js Standalone** çıktısı sayesinde Dockerize edilmiş durumdadır ve **Bunny.net Magic Containers** üzerinde global edge olarak dağıtılmaya tamamen hazırdır.

Detaylı adım adım manuel derleme, Docker Hub'a yükleme ve Bunny.net üzerinde sıfır saniye kesintiyle sitenizi güncelleme kılavuzu için **[DEPLOYMENT.md](file:///Users/ataberkdonmez/Downloads/test/landing-page/DEPLOYMENT.md)** dosyasını inceleyin.

---

## 🤖 Yapay Zeka Ajan Kuralları (AI Agents)

Bu projede çalışacak olan AI kodlama yardımcılarının, temiz mimariyi koruması ve kod kalitesini bozmaması için uyması gereken strict kurallara **[AGENTS.md](file:///Users/ataberkdonmez/Downloads/test/landing-page/AGENTS.md)** dosyasından erişebilirsiniz.
