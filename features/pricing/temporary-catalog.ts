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
      price: "$0",
      cadence: "free forever",
      description:
        "Run the Subkit receipt validation and webhook engine on infrastructure you control.",
      features: [
        "Sovereign data control",
        "Unlimited apps and purchases",
        "Direct database access",
        "Community support",
      ],
      action: {
        label: "Deploy Community Core",
        href: "https://github.com/brewingsolutions/subkit",
      },
    },
    {
      id: "managed",
      name: "Managed Cloud",
      audience: "For product teams that want managed EU hosting.",
      price: "$49",
      cadence: "per month",
      description:
        "Subkit operates the infrastructure, backups, and delivery environment for you.",
      features: [
        "First $20,000 MTR included",
        "EU hosting",
        "Webhook delivery",
        "Predictable usage overage",
      ],
      action: { label: "Create Managed Account", href: "/contact" },
      featured: true,
    },
    {
      id: "enterprise",
      name: "Enterprise Support",
      audience: "For regulated organizations with custom requirements.",
      price: "$250",
      cadence: "starting per month",
      description:
        "Deployment assistance and support for isolated or regulated environments.",
      features: [
        "Custom support agreement",
        "Database topology assistance",
        "DPA and residency guidance",
        "Multi-node deployment support",
      ],
      action: { label: "Request Custom Contract", href: "/contact" },
    },
  ],
};

