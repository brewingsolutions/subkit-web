import { describe, expect, it } from "vitest";
import { calculatePricingQuote } from "@/features/pricing/policy";

describe("calculatePricingQuote", () => {
  it("normalizes negative revenue and returns a free quote", () => {
    expect(calculatePricingQuote(-100)).toEqual({
      monthlyRevenue: 0,
      competitorEstimate: 0,
      subkitEstimate: 0,
      estimatedSavings: 0,
    });
  });

  it("applies the managed base price after the free threshold", () => {
    expect(calculatePricingQuote(30_000)).toMatchObject({
      competitorEstimate: 160,
      subkitEstimate: 49,
      estimatedSavings: 111,
    });
  });

  it("applies managed overage above the base limit", () => {
    expect(calculatePricingQuote(100_000)).toMatchObject({
      competitorEstimate: 720,
      subkitEstimate: 69,
      estimatedSavings: 651,
    });
  });
});

