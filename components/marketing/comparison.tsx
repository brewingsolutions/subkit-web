"use client";

import { Check, X, HelpCircle, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

interface FeatureRow {
  name: string;
  description: string;
  subkit: { value: string | boolean; badge?: string };
  revenueCat: string | boolean;
  appleGoogle: string | boolean;
}

const COMPARISON_FEATURES: FeatureRow[] = [
  {
    name: "Cross-platform support",
    description: "Support for iOS, Android, Flutter, React Native, and Web purchases out-of-the-box.",
    subkit: { value: true },
    revenueCat: true,
    appleGoogle: false,
  },
  {
    name: "Data Sovereignty (Self-Hosted)",
    description: "Deploy on your own infrastructure to keep 100% ownership of your data and customer transactions.",
    subkit: { value: true, badge: "Unique" },
    revenueCat: false,
    appleGoogle: false,
  },
  {
    name: "100% Open-source Core",
    description: "Fully open-source backend, dashboard, and SDKs. Inspect, modify, and run without vendor lock-in.",
    subkit: { value: true, badge: "AB Supported" },
    revenueCat: false,
    appleGoogle: false,
  },
  {
    name: "GDPR & EU Digital Sovereignty",
    description: "Host in the EU or self-host. No transmission of customer transaction data to third-party US proprietary clouds.",
    subkit: { value: true },
    revenueCat: false,
    appleGoogle: "Complex",
  },
  {
    name: "Receipt validation",
    description: "Real-time cryptographically secure verification of App Store, Google Play, and Stripe receipts.",
    subkit: { value: true },
    revenueCat: true,
    appleGoogle: "Native Only",
  },
  {
    name: "Real-time webhooks",
    description: "Instant event notifications sent to your backend for purchases, renewals, trials, and churn.",
    subkit: { value: true },
    revenueCat: true,
    appleGoogle: "Limited",
  },
  {
    name: "Analytics & LTV tracking",
    description: "Pre-computed cohort analysis, MRR growth, active trials, and real-time revenue streams.",
    subkit: { value: true },
    revenueCat: true,
    appleGoogle: "Limited",
  },
  {
    name: "Customer Details & CRM",
    description: "Explore individual customer timelines, subscription states, purchase history, and device info.",
    subkit: { value: true },
    revenueCat: true,
    appleGoogle: false,
  },
];

export function Comparison() {
  const renderCell = (val: string | boolean, isHighlighted = false) => {
    if (typeof val === "boolean") {
      return val ? (
        <div className="flex justify-center">
          <span className={`inline-flex items-center justify-center size-6 rounded-full ${isHighlighted ? "bg-emerald-500/10 text-emerald-500" : "bg-emerald-100 text-emerald-600"}`}>
            <Check className="size-4 stroke-[3]" />
          </span>
        </div>
      ) : (
        <div className="flex justify-center">
          <span className="inline-flex items-center justify-center size-6 rounded-full bg-rose-50 text-rose-450">
            <X className="size-4 stroke-[3]" />
          </span>
        </div>
      );
    }
    return (
      <div className="text-center">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isHighlighted ? "bg-amber-500/10 text-amber-500" : "bg-slate-100 text-slate-500"}`}>
          {val}
        </span>
      </div>
    );
  };

  return (
    <Section borderTop id="comparison" className="bg-[#f8fafc]/50 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[600px] w-[600px] rounded-full bg-primary/[0.01] blur-3xl" />

      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-24 px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block font-mono">
            Digital Sovereignty
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl text-card-foreground font-heading">
            Break Free from Proprietary Lock-in
          </h2>
          <p className="mt-4 text-base text-foreground max-w-xl mx-auto">
            Compare Subkit with proprietary third-party platforms and native app store solutions.
          </p>
          <div className="mx-auto mt-6 h-[2px] w-24 bg-primary" />
        </div>

        {/* Desktop View Table */}
        <div className="hidden md:block max-w-6xl mx-auto rounded-2xl border border-slate-200/80 bg-card overflow-hidden">
          <div className="w-full border-collapse text-left">
            
            {/* Header */}
            <div className="grid grid-cols-12 bg-slate-50/75 border-b border-slate-200/80 py-6 px-8 items-center text-sm font-bold text-card-foreground font-heading">
              <div className="col-span-5">Core Capabilities</div>
              <div className="col-span-3 text-center flex flex-col items-center justify-center gap-1">
                <span className="flex items-center gap-1 text-primary">
                  <Sparkles className="size-3.5 fill-primary/10" />
                  Subkit
                </span>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                  Open-Source / EU
                </span>
              </div>
              <div className="col-span-2 text-center text-slate-500">RevenueCat</div>
              <div className="col-span-2 text-center text-slate-500">Apple / Google</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-slate-100">
              {COMPARISON_FEATURES.map((feature, idx) => (
                <div 
                  key={feature.name}
                  className="grid grid-cols-12 py-5 px-8 items-center hover:bg-slate-50/50 transition-colors"
                >
                  {/* Feature Name & Description */}
                  <div className="col-span-5 pr-8">
                    <div className="flex items-center gap-2 group relative">
                      <span className="font-semibold text-card-foreground text-sm cursor-default">
                        {feature.name}
                      </span>
                      <div className="relative cursor-help">
                        <HelpCircle className="size-4 text-slate-350 hover:text-slate-500 transition-colors" />
                        
                        {/* Custom Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-slate-900 text-white text-[11px] leading-relaxed p-3 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 z-20 font-sans">
                          {feature.description}
                          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subkit Cell */}
                  <div className="col-span-3 bg-primary/[0.015] self-stretch flex items-center justify-center border-x border-primary/5 py-1 px-4 relative">
                    <div className="flex flex-col items-center gap-1.5 w-full">
                      {renderCell(feature.subkit.value, true)}
                      {feature.subkit.badge && (
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-mono tracking-wider uppercase animate-pulse">
                          {feature.subkit.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* RevenueCat Cell */}
                  <div className="col-span-2 text-center">
                    {renderCell(feature.revenueCat)}
                  </div>

                  {/* Apple / Google Cell */}
                  <div className="col-span-2 text-center">
                    {renderCell(feature.appleGoogle)}
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Mobile View: Responsive Cards */}
        <div className="md:hidden space-y-6 px-4">
          {COMPARISON_FEATURES.map((feature) => (
            <div 
              key={feature.name}
              className="rounded-2xl border border-slate-200 bg-card p-5 space-y-4"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-bold text-card-foreground text-sm">{feature.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{feature.description}</p>
                </div>
                {feature.subkit.badge && (
                  <span className="text-[8px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-mono">
                    {feature.subkit.badge}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 text-center items-center text-xs">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-primary font-mono mb-1">Subkit</p>
                  {renderCell(feature.subkit.value, true)}
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 mb-1">RevenueCat</p>
                  {renderCell(feature.revenueCat)}
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400 mb-1">Apple/Google</p>
                  {renderCell(feature.appleGoogle)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </Section>
  );
}
