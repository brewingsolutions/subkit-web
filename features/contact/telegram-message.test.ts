import { describe, expect, it } from "vitest";
import { renderTelegramContactInquiry } from "@/features/contact/telegram-message";

describe("renderTelegramContactInquiry", () => {
  it("escapes user-controlled Telegram HTML", () => {
    const message = renderTelegramContactInquiry({
      name: "Ada <admin>",
      email: "ada@example.com",
      company: "R&D",
      message: "Use <b>safe</b> output",
    });

    expect(message).toContain("Ada &lt;admin&gt;");
    expect(message).toContain("R&amp;D");
    expect(message).toContain("Use &lt;b&gt;safe&lt;/b&gt; output");
  });
});

