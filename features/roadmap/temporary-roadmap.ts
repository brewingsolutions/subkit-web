import type { RoadmapSnapshot } from "@/features/roadmap/model";

// Temporary source until subkit-internal-services publishes the Roadmap.
export const TEMPORARY_ROADMAP: RoadmapSnapshot = {
  source: "temporary-local",
  reviewedAt: "2026-07-26",
  phases: [
    {
      id: "core-infrastructure",
      label: "Phase 1",
      title: "Core Sovereign Infrastructure",
      timeline: "Active · Q3 2026 target",
      status: "in-progress",
      description:
        "Establish the core self-hosted receipt validation and billing architecture.",
      capabilities: [
        "App Store and Google Play receipt validation",
        "PostgreSQL migrations and secure persistence",
        "Swift, Kotlin, Flutter, and React Native SDKs",
        "Billing webhook delivery",
        "Developer Console foundations",
      ],
    },
    {
      id: "remote-configuration",
      label: "Phase 2",
      title: "Remote Configuration & Dynamic Paywalls",
      timeline: "Q4 2026 target",
      status: "planned",
      description:
        "Enable remote paywall configuration without requiring a store release.",
      capabilities: [
        "JSON-driven paywall rendering",
        "No-code paywall configuration",
        "Localized offerings",
        "Promotional codes and discounts",
        "Cross-platform paywall delivery",
      ],
    },
    {
      id: "privacy-analytics",
      label: "Phase 3",
      title: "Privacy-First Analytics & Experimentation",
      timeline: "Q1 2027 target",
      status: "planned",
      description:
        "Provide conversion insights while keeping subscription data under customer control.",
      capabilities: [
        "Locally processed paywall experiments",
        "Cohort and lifetime-value analysis",
        "Database-native reporting",
        "Federated aggregate reporting",
        "Churn insights",
      ],
    },
  ],
};

