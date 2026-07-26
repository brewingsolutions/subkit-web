import { describe, expect, it } from "vitest";
import { mapInternalStatus } from "@/features/status/internal-services-status";

describe("mapInternalStatus", () => {
  it("maps the authoritative service condition into the web model", () => {
    expect(
      mapInternalStatus({
        condition: "Operational",
        message: "Dependencies are responding.",
        checkedAt: "2026-07-26T18:20:39.132Z",
        capabilities: [
          {
            id: "api",
            name: "API",
            condition: "Operational",
            message: "The API is responding.",
          },
        ],
      })
    ).toMatchObject({
      condition: "operational",
      message: "Dependencies are responding.",
      capabilities: [{ id: "api", condition: "operational" }],
    });
  });

  it("fails closed for an unknown future condition", () => {
    expect(
      mapInternalStatus({
        condition: "Unexpected",
        message: "Unrecognized condition.",
        checkedAt: "2026-07-26T18:20:39.132Z",
        capabilities: [],
      }).condition
    ).toBe("unknown");
  });
});
