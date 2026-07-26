import { describe, expect, it } from "vitest";
import { submitContactInquiry } from "@/features/contact/contact-intake";
import { createInMemoryContactDelivery } from "@/features/contact/in-memory-contact-delivery";
import type { ContactDelivery } from "@/features/contact/model";

describe("submitContactInquiry", () => {
  it("normalizes valid input and crosses the delivery seam once", async () => {
    const delivery = createInMemoryContactDelivery();

    const result = await submitContactInquiry(
      {
        name: "  Ada Lovelace  ",
        email: " ADA@EXAMPLE.COM ",
        company: "  Analytical Engines ",
        message: "  Tell me more. ",
      },
      delivery
    );

    expect(result).toEqual({ ok: true });
    expect(delivery.inquiries).toEqual([
      {
        name: "Ada Lovelace",
        email: "ada@example.com",
        company: "Analytical Engines",
        message: "Tell me more.",
      },
    ]);
  });

  it("rejects malformed email without calling delivery", async () => {
    const delivery = createInMemoryContactDelivery();
    const result = await submitContactInquiry(
      { name: "Ada", email: "invalid", message: "Hello" },
      delivery
    );

    expect(result).toEqual({
      ok: false,
      reason: "invalid",
      message: "Enter a valid email address.",
    });
    expect(delivery.inquiries).toHaveLength(0);
  });

  it("maps adapter errors to a delivery failure", async () => {
    const delivery: ContactDelivery = {
      async deliver() {
        throw new Error("provider unavailable");
      },
    };

    const result = await submitContactInquiry(
      { name: "Ada", email: "ada@example.com", message: "Hello" },
      delivery
    );

    expect(result).toMatchObject({ ok: false, reason: "delivery-failed" });
  });
});

