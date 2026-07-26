import type { ContactDelivery } from "@/features/contact/model";

interface InternalContactDeliveryConfig {
  baseUrl: string;
  token: string;
}

export function createInternalContactDelivery({
  baseUrl,
  token,
}: InternalContactDeliveryConfig): ContactDelivery {
  return {
    async deliver(inquiry) {
      const response = await fetch(
        new URL("/v1/contact-inquiries", ensureTrailingSlash(baseUrl)),
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${token}`,
            "content-type": "application/json",
          },
          body: JSON.stringify(inquiry),
          cache: "no-store",
          signal: AbortSignal.timeout(5_000),
        }
      );

      if (response.status !== 202) {
        throw new Error(`Contact service returned HTTP ${response.status}.`);
      }
    },
  };
}

function ensureTrailingSlash(value: string): string {
  return value.endsWith("/") ? value : `${value}/`;
}
