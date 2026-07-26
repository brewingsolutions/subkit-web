"use client";

import { Zap, BarChart3, Layers, ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { ConfigurationGui } from "@/components/visuals/configuration-gui";
import { InsightsGui } from "@/components/visuals/insights-gui";
import { IntegrationsFlow } from "@/components/visuals/integrations-flow";

export function Features() {
  return (
    <Section borderTop gridOverlay id="features" className="relative">
      
      {/* Visual Divider / Observer Anchor */}
      <div id="integrations" className="absolute top-0 left-0" />

      {/* Global Title */}
      <div className="mx-auto max-w-3xl text-center px-6 mb-20 lg:mb-32">
        <span className="text-xs font-bold uppercase tracking-widest text-primary block font-mono">
          Product Direction
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl text-card-foreground font-heading">
          An Open Subscription Stack, Built in Public
        </h2>
        <div className="mx-auto mt-4 h-[2px] w-20 bg-primary" />
      </div>

      <Container className="space-y-28 lg:space-y-40">

        {/* SECTION 1: BUILD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 text-left">
            <div className="mb-6">
              <Badge variant="blue">
                <Zap className="size-3.5" />
                Build
              </Badge>
            </div>
            <h3 className="text-2xl font-bold sm:text-4xl text-card-foreground tracking-tight">
              Stable SDK Contracts
            </h3>
            <p className="mt-6 text-base leading-8 text-foreground">
              Subkit Core is establishing separate public SDK, authenticated operator, and private operational contracts.
            </p>
            <p className="mt-4 text-base leading-8 text-foreground">
              Native SDKs and production purchase flows are planned. Current work focuses on the runtime model, entitlement reads, and reliable store-event foundations.
            </p>
            <div className="mt-8">
              <a
                href="#docs"
                className="inline-flex items-center gap-1 text-primary hover:text-primary/90 font-semibold text-sm group transition-colors cursor-pointer"
              >
                View the Docs
                <ChevronRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Visual Representation (Paywall Settings GUI Mockup) */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <ConfigurationGui />
          </div>
        </div>

        {/* SECTION 2: ANALYZE */}
        <div id="customers" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Representation (Analytics Chart) on Left */}
          <div className="lg:col-span-6 order-2 lg:order-1 w-full flex justify-center">
            <InsightsGui />
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 text-left order-1 lg:order-2">
            <div className="mb-6">
              <Badge variant="purple">
                <BarChart3 className="size-3.5" />
                Analyze
              </Badge>
            </div>
            <h3 className="text-2xl font-bold sm:text-4xl text-card-foreground tracking-tight">
              Auditable Subscription State
            </h3>
            <p className="mt-6 text-base leading-8 text-foreground">
              PostgreSQL is planned as the authoritative source for subscription and entitlement state, with raw events retained through a provider-neutral inbox.
            </p>
            <p className="mt-4 text-base leading-8 text-foreground">
              Analytics, customer timelines, and store-specific reconciliation remain roadmap capabilities and will be published as they become testable.
            </p>
            <div className="mt-8">
              <a
                href="#customers"
                className="inline-flex items-center gap-1 text-primary hover:text-primary/90 font-semibold text-sm group transition-colors cursor-pointer"
              >
                Review the Roadmap
                <ChevronRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* SECTION 3: GROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 text-left">
            <div className="mb-6">
              <Badge variant="indigo">
                <Layers className="size-3.5" />
                Grow
              </Badge>
            </div>
            <h3 className="text-2xl font-bold sm:text-4xl text-card-foreground tracking-tight">
              Event Delivery
            </h3>
            <p className="mt-6 text-base leading-8 text-foreground">
              The early Event Inbox supports deduplication and recoverable worker processing across libSQL-compatible and PostgreSQL adapters.
            </p>
            <p className="mt-4 text-base leading-8 text-foreground">
              Outbound webhooks and third-party integrations are planned after store-event reconciliation and delivery guarantees are established.
            </p>
            <div className="mt-8">
              <a
                href="#integrations"
                className="inline-flex items-center gap-1 text-primary hover:text-primary/90 font-semibold text-sm group transition-colors cursor-pointer"
              >
                Explore Event Foundations
                <ChevronRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Visual Representation (Integrations Flow Mockup) */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <IntegrationsFlow />
          </div>
        </div>

      </Container>
    </Section>
  );
}
