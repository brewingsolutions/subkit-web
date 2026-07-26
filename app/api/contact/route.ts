import { NextResponse } from "next/server";
import { submitContactInquiry } from "@/features/contact/contact-intake";
import { checkContactRateLimit } from "@/features/contact/contact-rate-limit";
import { createInternalContactDelivery } from "@/features/contact/internal-contact-delivery";

const MAX_BODY_BYTES = 16_384;

export async function POST(request: Request) {
  const serviceUrl = process.env.CONTACT_SERVICE_URL;
  const serviceToken = process.env.CONTACT_SERVICE_TOKEN;
  const clientKey = getClientKey(request);
  const rateLimit = checkContactRateLimit(clientKey);

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } }
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "The request body is too large." }, { status: 413 });
  }

  if (!serviceUrl || !serviceToken) {
    console.error("Contact delivery unavailable: internal service configuration is missing.");
    return NextResponse.json(
      {
        error:
          "Message delivery is temporarily unavailable. Please try again later.",
      },
      { status: 503 }
    );
  }

  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return NextResponse.json(
      { error: "The request body must be valid JSON." },
      { status: 400 }
    );
  }

  const result = await submitContactInquiry(
    input,
    createInternalContactDelivery({ baseUrl: serviceUrl, token: serviceToken })
  );

  if (result.ok) {
    return NextResponse.json({ success: true, message: "Message sent successfully." });
  }

  if (result.reason === "invalid") {
    return NextResponse.json({ error: result.message }, { status: 400 });
  }

  console.error("Contact delivery failed:", result.cause);
  return NextResponse.json(
    { error: "Message delivery failed. Please try again later." },
    { status: 502 }
  );
}

function getClientKey(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedFor || request.headers.get("x-real-ip") || "unknown";
}
