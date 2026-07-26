"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is Subkit?",
    answer: "Subkit is an open-source in-app subscription and billing infrastructure for mobile apps. It acts as a unified hub to manage product catalog offerings, cryptographically validate receipts, track customer subscription lifecycles, and broadcast billing events via real-time webhooks.",
  },
  {
    question: "How does Subkit compare to RevenueCat, Adapty, or Superwall?",
    answer: "Subkit provides the receipt validation and subscription state management of RevenueCat, combined with the remote paywall configuration capabilities of Adapty and Superwall. The key difference is that Subkit is 100% open-source and self-hostable, eliminating expensive growth taxes (revenue percentage commissions) and proprietary vendor lock-in.",
  },
  {
    question: "What is Subkit's connection to the EU Next Generation Internet (NGI) initiative?",
    answer: "Subkit is designed around NGI values such as digital sovereignty, user-first privacy, open-source transparency, and resilience. Self-hosting can give operators control over where purchase metadata is processed, but compliance still depends on each deployment and the operator's legal obligations. Subkit is not currently presented as an NGI-funded project.",
  },
  {
    question: "Can I run A/B testing and design paywalls on my self-hosted instance?",
    answer: "Yes! Subkit's architectural roadmap includes JSON-driven dynamic paywalls and GDPR-compliant local A/B testing. This allows you to remotely customize paywall price offerings and run experiments directly on your own PostgreSQL database without sending end-user events to proprietary US analytics clouds.",
  },
  {
    question: "Is the self-hosted version free?",
    answer: "Yes, the self-hosted community core is 100% open-source and free forever. You can easily deploy it on any VPS, cloud instance, or bare-metal server using our simple Docker Compose setups, gaining absolute data sovereignty and unlimited scale at zero licensing cost.",
  },
  {
    question: "Which platforms and payment providers do you support?",
    answer: "Subkit natively coordinates purchases, subscription state, and receipt validation across Apple App Store, Google Play Store, and Stripe out-of-the-box. Our unified, zero-dependency SDKs support iOS Swift, Android Kotlin, Flutter, and React Native frameworks with zero impact on app boot performance.",
  },
  {
    question: "What are the benefits of the managed Cloud tier?",
    answer: "While the self-hosted version has 100% of the core features, you are responsible for server maintenance, database backups, security patches, and scaling. The managed Subkit Cloud tier handles all operational overhead for you, ensuring 99.99% uptime on sovereign EU clouds, automated backups, globally distributed low-latency endpoints, and priority developer support.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Section borderTop id="faq" className="relative bg-background">
      
      {/* Background soft gradients */}
      <div className="absolute top-1/2 left-1/4 -z-10 h-72 w-72 rounded-full bg-primary/[0.01] blur-3xl" />

      <Container>
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-24 px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block font-mono">
            Support & Knowledge
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl text-card-foreground font-heading">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-foreground max-w-xl mx-auto">
            Get instant answers to the most common questions about Subkit&apos;s open-source architecture, hosting, and privacy.
          </p>
          <div className="mx-auto mt-6 h-[2px] w-20 bg-primary" />
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4 px-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-card overflow-hidden transition-all duration-300"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors hover:bg-slate-50/50 cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle className="size-5 text-primary stroke-[1.8] flex-shrink-0" />
                    <span className="font-bold text-card-foreground text-sm sm:text-base font-heading">
                      {item.question}
                    </span>
                  </div>
                  <span className={`flex-shrink-0 inline-flex items-center justify-center size-8 rounded-full bg-slate-50 border border-slate-100 text-slate-400 hover:text-slate-600 transition-all ${isOpen ? "rotate-180 bg-primary/10 border-primary/10 text-primary" : ""}`}>
                    <ChevronDown className="size-4 transition-transform duration-300" />
                  </span>
                </button>

                {/* Accordion Content */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 border-t border-slate-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 text-sm text-foreground leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </Container>
    </Section>
  );
}
