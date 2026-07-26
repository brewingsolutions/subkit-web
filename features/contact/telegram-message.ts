import type { ContactInquiry } from "@/features/contact/model";

export function renderTelegramContactInquiry(inquiry: ContactInquiry): string {
  const company = inquiry.company ?? "N/A";

  return [
    "<b>New Subkit Contact Inquiry</b>",
    "",
    `<b>Name:</b> ${escapeTelegramHtml(inquiry.name)}`,
    `<b>Email:</b> ${escapeTelegramHtml(inquiry.email)}`,
    `<b>Company:</b> ${escapeTelegramHtml(company)}`,
    "",
    "<b>Message:</b>",
    `<i>${escapeTelegramHtml(inquiry.message)}</i>`,
  ].join("\n");
}

function escapeTelegramHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

