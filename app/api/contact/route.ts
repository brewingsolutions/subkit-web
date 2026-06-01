import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // If environment variables are not configured yet, log the message and simulate success for local development
    if (!botToken || !chatId) {
      console.log("=== TELEGRAM ENVIRONMENT VARIABLES NOT CONFIGERED ===");
      console.log("Form Submission Received:");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Company: ${company || "N/A"}`);
      console.log(`Message: ${message}`);
      console.log("====================================================");
      
      return NextResponse.json({
        success: true,
        message: "Message received (simulated locally). Configure TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in env to receive live messages.",
      });
    }

    // Format the Telegram HTML message beautifully and escape basic HTML tags
    const escapeHtml = (unsafe: string) => {
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    };

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || "N/A");
    const safeMessage = escapeHtml(message);

    const text = `
<b>🚀 New Subkit Contact Form Submission!</b>

👤 <b>Name:</b> ${safeName}
📧 <b>Email:</b> ${safeEmail}
🏢 <b>Company:</b> ${safeCompany}

💬 <b>Message:</b>
<i>${safeMessage}</i>
`.trim();

    // Call Telegram Bot API
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Telegram API Error:", errorData);
      return NextResponse.json(
        { error: "Failed to send notification via Telegram." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact Form API Error:", error);
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
