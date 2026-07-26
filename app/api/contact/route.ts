import { NextResponse } from "next/server";
import { submitContactInquiry } from "@/features/contact/contact-intake";
import { createTelegramContactDelivery } from "@/features/contact/telegram-contact-delivery";

export async function POST(request: Request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error(
      "Contact delivery unavailable: Telegram configuration is missing."
    );
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
    createTelegramContactDelivery({ botToken, chatId })
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
