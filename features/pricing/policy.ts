import type { PricingQuote } from "@/features/pricing/model";

const COMPETITOR_FREE_REVENUE = 10_000;
const COMPETITOR_RATE_PER_THOUSAND = 8;
const SUBKIT_FREE_REVENUE = 20_000;
const SUBKIT_BASE_LIMIT = 50_000;
const SUBKIT_BASE_PRICE = 49;
const SUBKIT_RATE_PER_THOUSAND = 0.4;

export function calculatePricingQuote(monthlyRevenue: number): PricingQuote {
  const normalizedRevenue = Math.max(0, Math.round(monthlyRevenue));
  const competitorEstimate =
    normalizedRevenue <= COMPETITOR_FREE_REVENUE
      ? 0
      : Math.round(
          ((normalizedRevenue - COMPETITOR_FREE_REVENUE) / 1000) *
            COMPETITOR_RATE_PER_THOUSAND
        );

  let subkitEstimate = 0;
  if (normalizedRevenue > SUBKIT_FREE_REVENUE) {
    subkitEstimate =
      normalizedRevenue <= SUBKIT_BASE_LIMIT
        ? SUBKIT_BASE_PRICE
        : Math.round(
            SUBKIT_BASE_PRICE +
              ((normalizedRevenue - SUBKIT_BASE_LIMIT) / 1000) *
                SUBKIT_RATE_PER_THOUSAND
          );
  }

  return {
    monthlyRevenue: normalizedRevenue,
    competitorEstimate,
    subkitEstimate,
    estimatedSavings: Math.max(0, competitorEstimate - subkitEstimate),
  };
}

