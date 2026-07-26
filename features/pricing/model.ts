export type PricingPlanId = "self-hosted" | "managed" | "enterprise";

export interface PricingPlan {
  id: PricingPlanId;
  name: string;
  audience: string;
  price: string;
  cadence: string;
  description: string;
  features: ReadonlyArray<string>;
  action: { label: string; href: string };
  featured?: boolean;
}

export interface PricingCatalog {
  reviewedAt: string;
  source: "temporary-local";
  plans: ReadonlyArray<PricingPlan>;
}

export interface PricingQuote {
  monthlyRevenue: number;
  competitorEstimate: number;
  subkitEstimate: number;
  estimatedSavings: number;
}

