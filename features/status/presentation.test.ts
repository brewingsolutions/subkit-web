import { describe, expect, it } from "vitest";
import { getStatusPresentation } from "@/features/status/presentation";

describe("getStatusPresentation", () => {
  it.each([
    ["operational", "Operational", "success"],
    ["degraded", "Degraded", "warning"],
    ["outage", "Outage", "error"],
    ["unknown", "Unknown", "unknown"],
  ] as const)("maps %s without hiding its condition", (condition, label, tone) => {
    expect(getStatusPresentation(condition)).toEqual({ label, tone });
  });
});

