import type { ContactDelivery } from "@/features/contact/model";
import { renderTelegramContactInquiry } from "@/features/contact/telegram-message";

interface TelegramContactDeliveryConfig {
  botToken: string;
  chatId: string;
}

export function createTelegramContactDelivery({
  botToken,
  chatId,
}: TelegramContactDeliveryConfig): ContactDelivery {
  return {
    async deliver(inquiry) {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: renderTelegramContactInquiry(inquiry),
            parse_mode: "HTML",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Telegram delivery returned HTTP ${response.status}.`);
      }
    },
  };
}

