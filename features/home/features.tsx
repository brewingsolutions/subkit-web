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
          Our Platform
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl text-card-foreground font-heading">
          In-App Subscriptions Made Easy
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
              Open Source SDKs
            </h3>
            <p className="mt-6 text-base leading-8 text-foreground">
              With Subkit you can build a customized mobile subscription business in hours, not months.
            </p>
            <p className="mt-4 text-base leading-8 text-foreground">
              Host and configure products using our dashboard and fetch products, make purchases, and check subscription status using our native SDKs.
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
              Subscription Insights
            </h3>
            <p className="mt-6 text-base leading-8 text-foreground">
              Get insights into your data with a single source of truth for your app. Monitor MRR, trials, churn rate, cohorts, and more.
            </p>
            <p className="mt-4 text-base leading-8 text-foreground">
              Understand your customers like never before with real-time metrics support for Apple App Store, Google Play, and Stripe.
            </p>
            <div className="mt-8">
              <a
                href="#customers"
                className="inline-flex items-center gap-1 text-primary hover:text-primary/90 font-semibold text-sm group transition-colors cursor-pointer"
              >
                Explore the Dashboard
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
              Data Integrations
            </h3>
            <p className="mt-6 text-base leading-8 text-foreground">
              Subkit makes it easy to send enriched subscription events to services like Slack, Stripe, AppsFlyer, Branch, Adjust, and many more.
            </p>
            <p className="mt-4 text-base leading-8 text-foreground">
              Use revenue and LTV data to optimize ad spend, improve attribution, and get a deeper understanding of how customers use your app.
            </p>
            <div className="mt-8">
              <a
                href="#integrations"
                className="inline-flex items-center gap-1 text-primary hover:text-primary/90 font-semibold text-sm group transition-colors cursor-pointer"
              >
                See Our Integrations
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
