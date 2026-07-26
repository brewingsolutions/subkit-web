import type { PricingCatalog } from "@/features/pricing/model";

// Temporary source until subkit-internal-services publishes the Pricing Catalog.
export const PRICING_CATALOG: PricingCatalog = {
  reviewedAt: "2026-07-26",
  source: "temporary-local",
  plans: [
    {
      id: "self-hosted",
      name: "Self-Hosted",
      audience: "For teams that own their infrastructure and operations.",
      price: "Apache-2.0",
      cadence: "open-source license",
      description:
        "Evaluate the early Subkit Core foundation on infrastructure you control.",
      features: [
        "Public source and architecture decisions",
        "Compose Specification reference deployment",
        "PostgreSQL and Event Inbox foundations",
        "No production-readiness commitment",
      ],
      action: {
        label: "Deploy Community Core",
        href: "https://github.com/brewingsolutions/subkit-core",
      },
    },
    {
      id: "managed",
      name: "Managed Cloud",
      audience: "For product teams that want managed EU hosting.",
      price: "TBD",
      cadence: "planned offering",
      description:
        "A planned managed option for teams that do not want to operate Subkit Core themselves.",
      features: [
        "Managed operations under evaluation",
        "EU region strategy under evaluation",
        "Pricing and service levels not finalized",
        "No current availability commitment",
      ],
      action: { label: "Join the Cloud Waitlist", href: "/contact" },
      featured: true,
    },
    {
      id: "enterprise",
      name: "Enterprise Support",
      audience: "For regulated organizations with custom requirements.",
      price: "TBD",
      cadence: "planned support",
      description:
        "Potential future assistance for organizations with deployment or governance requirements.",
      features: [
        "Scope not finalized",
        "No current support SLA",
        "Legal terms subject to review",
        "Contact us to discuss requirements",
      ],
      action: { label: "Discuss Future Requirements", href: "/contact" },
    },
  ],
};

