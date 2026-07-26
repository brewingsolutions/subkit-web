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
    answer: "Subkit is an early open-source foundation for portable mobile subscription infrastructure. The current Core includes runtime, data-model, contract, and durable Event Inbox foundations; production receipt validation, lifecycle reconciliation, SDKs, and outbound webhooks remain roadmap work.",
  },
  {
    question: "How does Subkit compare to RevenueCat, Adapty, or Superwall?",
    answer: "Subkit is pursuing a portable, open-source alternative to proprietary subscription infrastructure. The current repository is an early Core foundation; production store integrations, SDKs, paywalls, analytics, and managed Cloud capabilities are roadmap work.",
  },
  {
    question: "What is Subkit's connection to the EU Next Generation Internet (NGI) initiative?",
    answer: "Subkit has submitted a European open-source funding application and is awaiting review. Its goals overlap with NGI themes such as openness, privacy, user control, and resilient digital infrastructure. The pending application does not imply selection, funding, endorsement, or support by NGI.",
  },
  {
    question: "Can I run A/B testing and design paywalls on my self-hosted instance?",
    answer: "Not yet. Remote paywall configuration and locally processed experimentation are roadmap items. Their final interfaces and delivery dates are not guaranteed during the pre-alpha phase.",
  },
  {
    question: "Is the self-hosted version free?",
    answer: "Subkit Core is licensed under Apache-2.0 and can be evaluated through its Compose reference deployment or run directly with Node.js and PostgreSQL. Containers are a supported packaging path, not a product requirement. Operators remain responsible for infrastructure, security, backups, upgrades, and compliance. The project is pre-alpha and not ready for production subscription decisions.",
  },
  {
    question: "Which platforms and payment providers do you support?",
    answer: "Production Apple App Store and Google Play integrations are planned but not implemented. Planned SDK targets include Swift, Kotlin, Flutter, and React Native. Stripe and additional providers will be evaluated after the core store lifecycle is reliable.",
  },
  {
    question: "What are the benefits of the managed Cloud tier?",
    answer: "Subkit Cloud is planned for teams that prefer managed upgrades, backups, monitoring, and support. Pricing, regions, service levels, and availability commitments have not been finalized. Joining the waitlist does not create a service or uptime commitment.",
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
