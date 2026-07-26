"use client";

import { useEffect, useState } from "react";
import { ChevronRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { GradientMesh } from "@/components/visuals/gradient-mesh";
import { GridOverlay } from "@/components/visuals/grid-overlay";
import { RevenueChart } from "@/components/visuals/revenue-chart";
import { LiveLogger } from "@/components/visuals/live-logger";
import { SUPPORTED_PLATFORMS, TYPEWRITER_WORDS } from "@/features/home/content";

export function Hero() {
  const [typedText, setTypedText] = useState(TYPEWRITER_WORDS[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentWord = TYPEWRITER_WORDS[wordIndex];
    const delay = !isDeleting && typedText === currentWord
      ? 2000
      : isDeleting && typedText === ""
        ? 300
        : isDeleting
          ? 50
          : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentWord) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setWordIndex((previous) =>
          (previous + 1) % TYPEWRITER_WORDS.length
        );
        return;
      }

      setTypedText(
        currentWord.substring(
          0,
          typedText.length + (isDeleting ? -1 : 1)
        )
      );
    }, delay);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIndex]);

  return (
    <section className="relative overflow-hidden pt-28 lg:pt-36 bg-background pb-20 lg:pb-32">
      <GradientMesh />
      <GridOverlay />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            
            {/* NGI / Open Source Badge */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary border border-primary/20 shadow-sm">
                <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Open source · Aligned with NGI principles
              </div>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-card-foreground sm:text-6xl lg:text-7xl min-h-[160px] sm:min-h-[180px] lg:min-h-[220px] font-heading leading-tight">
              The open-source way to <br />
              <span className="from-blue-600 via-primary to-brand-highlight relative inline-block bg-gradient-to-r px-1 pt-1 pb-3 bg-clip-text text-transparent">
                {typedText || "\u00A0"}
              </span>
              <br />
              in-app subscriptions
            </h1>

            <p className="mt-6 text-base leading-8 text-foreground sm:text-lg max-w-xl">
              Subkit is the privacy-first alternative to proprietary tools. Run it on our fully-managed Cloud or self-host on your own infrastructure with 100% data ownership.
            </p>

            {/* Checklists */}
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="size-4 text-primary" />
                <span>100% Open-Source SDKs & Core</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="size-4 text-primary" />
                <span>Privacy-First & Self-Hostable</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
              <Button
                size="lg"
                className="w-full sm:w-auto rounded-full bg-primary hover:bg-primary/95 text-white px-7 py-6 text-sm font-semibold hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all flex items-center gap-1.5 group cursor-pointer"
              >
                Start on Subkit Cloud
                <ChevronRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <a
                href="https://github.com/brewingsolutions/subkit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-600 hover:text-card-foreground font-semibold text-sm group transition-colors cursor-pointer"
              >
                Deploy Self-Hosted
                <ChevronRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="/contact"
                className="flex items-center gap-1 text-primary hover:text-primary/90 font-semibold text-sm group transition-colors cursor-pointer"
              >
                Contact sales
                <ChevronRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Platform pills */}
            <div className="mt-12 flex flex-col gap-3">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                Supported Platforms & Frameworks
              </span>
              <div className="flex flex-wrap gap-3 items-center mt-1">
                {SUPPORTED_PLATFORMS.map((platform) => (
                  <span
                    key={platform}
                    className="px-3 py-1 rounded-full border border-slate-200 bg-card text-[11px] text-slate-650 font-medium hover:border-slate-350 hover:text-card-foreground transition-all cursor-default shadow-sm"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Stripe Billing Dashboard Mockup */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="shadow-hero group relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-xl">
              <div className="from-primary/5 absolute inset-0 -z-10 bg-gradient-to-tr to-transparent" />

              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-slate-950/60">
                <div className="flex items-center gap-1.5">
                  <span className="size-3 rounded-full bg-rose-500/80" />
                  <span className="size-3 rounded-full bg-amber-500/80" />
                  <span className="size-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider font-mono">
                  billing_live_stream
                </span>
                <span className="flex items-center gap-1 text-[9px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Live
                </span>
              </div>

              {/* Core Content */}
              <div className="p-6 space-y-6">
                
                {/* Revenue SVG Chart component */}
                <RevenueChart />

                {/* Dynamic Logger stream component */}
                <LiveLogger />

              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
