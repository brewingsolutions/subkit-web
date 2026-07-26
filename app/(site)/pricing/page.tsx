import type { Metadata } from "next";
import { Heart } from "lucide-react";
import { Container } from "@/components/layout/container";
import { InteriorPageFrame } from "@/components/layout/interior-page-frame";
import { PricingPlans } from "@/features/pricing/pricing-plans";
import { PRICING_CATALOG } from "@/features/pricing/temporary-catalog";

export const metadata: Metadata = {
  title: "Pricing - Subkit",
  description:
    "Review Subkit's open-source model and preliminary managed-service direction.",
};

export default function PricingPage() {
  return (
    <InteriorPageFrame>
      <Container className="px-4">
        <header className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <span className="text-brand-accent font-mono text-[10px] font-bold tracking-widest uppercase">
            Preliminary Offering Model
          </span>
          <h1 className="font-heading text-card-foreground text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Open Core, <br />
            <span className="text-brand-accent">Managed Convenience</span>
          </h1>
          <p className="text-foreground mx-auto max-w-xl text-base leading-relaxed">
            Subkit Core is Apache-2.0 licensed. Managed Cloud and support pricing
            are planning previews, not currently available commercial offers.
          </p>
          <div className="bg-brand-accent/60 mx-auto mt-4 h-0.5 w-16" />
          <p className="font-mono text-[10px] text-slate-400">
            Temporary catalog · last reviewed {PRICING_CATALOG.reviewedAt}
          </p>
        </header>

        <PricingPlans />

        <section className="space-y-6 text-center">
          <h2 className="font-heading text-card-foreground text-xl font-bold">
            Have questions about the planned offering?
          </h2>
          <p className="mx-auto max-w-lg text-xs text-slate-500 sm:text-sm">
            Share your requirements and help shape the managed-service roadmap.
          </p>
          <a
            href="/contact"
            className="bg-brand-accent hover:bg-brand-accent/90 shadow-brand-accent/20 inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold text-slate-900 shadow-lg transition-colors"
          >
            <Heart className="size-3.5 fill-current" />
            Contact the Project
          </a>
        </section>
      </Container>
    </InteriorPageFrame>
  );
}
