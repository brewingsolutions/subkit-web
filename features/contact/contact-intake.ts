import type {
  ContactDelivery,
  ContactInquiry,
  ContactSubmissionResult,
} from "@/features/contact/model";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 120;
const MAX_COMPANY_LENGTH = 160;
const MAX_MESSAGE_LENGTH = 5_000;

export async function submitContactInquiry(
  input: unknown,
  delivery: ContactDelivery
): Promise<ContactSubmissionResult> {
  const inquiry = parseContactInquiry(input);
  if (!inquiry.ok) {
    return inquiry;
  }

  try {
    await delivery.deliver(inquiry.value);
    return { ok: true };
  } catch (cause) {
    return { ok: false, reason: "delivery-failed", cause };
  }
}

type ParseResult =
  | { ok: true; value: ContactInquiry }
  | { ok: false; reason: "invalid"; message: string };

function parseContactInquiry(input: unknown): ParseResult {
  if (!isRecord(input)) {
    return invalid("Contact details are required.");
  }

  const name = normalizeRequiredText(input.name);
  const email = normalizeRequiredText(input.email).toLowerCase();
  const message = normalizeRequiredText(input.message);
  const company = normalizeOptionalText(input.company);

  if (!name || !email || !message) {
    return invalid("Name, email, and message are required.");
  }
  if (!EMAIL_PATTERN.test(email)) {
    return invalid("Enter a valid email address.");
  }
  if (name.length > MAX_NAME_LENGTH) {
    return invalid("Name is too long.");
  }
  if (company && company.length > MAX_COMPANY_LENGTH) {
    return invalid("Company name is too long.");
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return invalid("Message is too long.");
  }

  return { ok: true, value: { name, email, company, message } };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function normalizeRequiredText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeOptionalText(value: unknown): string | null {
  const normalized = normalizeRequiredText(value);
  return normalized || null;
}

function invalid(message: string): ParseResult {
  return { ok: false, reason: "invalid", message };
}

