"use client";

import { SlidersHorizontal, Zap, ShieldCheck, Database, Users, Webhook } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

interface BenefitCard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconColor: string;
}

const BENEFITS: BenefitCard[] = [
  {
    title: "Remote Product Configuration",
    description: "Organize and configure paywalls, active products, and offerings remotely to bypass long app store release cycles.",
    icon: SlidersHorizontal,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    title: "One-Line SDK Integration",
    description: "Deploy faster. Subkit's unified native SDKs cut complex subscription integration time from months to mere hours.",
    icon: Zap,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
  },
  {
    title: "EU Digital Sovereignty",
    description: "100% GDPR compliant. Store all transaction and subscriber logs in secure EU clouds or your own dedicated server.",
    icon: ShieldCheck,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
  },
  {
    title: "Full Data Ownership",
    description: "Deploy self-hosted in minutes using Docker. Zero vendor lock-in. Keep complete, unfiltered access to all raw SQL data.",
    icon: Database,
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600",
  },
  {
    title: "Granular Customer Timelines",
    description: "Understand each user. Explore granular histories showing purchases, active trials, promotional grants, and device metadata.",
    icon: Users,
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-600",
  },
  {
    title: "Real-time Webhook Engine",
    description: "Instantly broadcast billing event payloads (renewals, cancels, churn) to your servers or active integrations.",
    icon: Webhook,
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-600",
  },
];

export function Benefits() {
  return (
    <Section borderTop id="benefits" className="relative bg-background">
      
      {/* Background graphic elements */}
      <div className="absolute top-0 right-1/4 -z-10 h-72 w-72 rounded-full bg-primary/[0.015] blur-3xl" />
      <div className="absolute bottom-0 left-1/4 -z-10 h-72 w-72 rounded-full bg-indigo-500/[0.01] blur-3xl" />

      <Container>
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-24 px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block font-mono">
            Sovereign Architecture
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl text-card-foreground font-heading">
            Easy Implementation, Sovereign Power
          </h2>
          <p className="mt-4 text-sm sm:text-base text-foreground max-w-xl mx-auto">
            Spend time building your core product features, not an intricate, proprietary subscription backend.
          </p>
          <div className="mx-auto mt-6 h-[2px] w-20 bg-primary" />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 max-w-6xl mx-auto px-4">
          {BENEFITS.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={benefit.title}
                className="group relative rounded-2xl border border-slate-200/80 bg-card p-8 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left"
              >
                {/* Glowing border accent on hover */}
                <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/10 transition-colors pointer-events-none" />

                {/* Icon Container */}
                <div className={`p-3 rounded-xl ${benefit.iconBg} ${benefit.iconColor} transition-transform duration-300 group-hover:scale-110 mb-6 flex items-center justify-center`}>
                  <Icon className="size-6 stroke-[2.2]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-card-foreground mb-3 font-heading group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground leading-relaxed flex-1">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

      </Container>
    </Section>
  );
}
