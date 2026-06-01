"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ArrowRight, Calendar, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function RoadmapBanner() {
  return (
    <Section borderTop className="bg-slate-900 text-white relative overflow-hidden py-20 lg:py-24">
      {/* Background soft glowing blur elements */}
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-[#00c9db]/5 blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 -z-10 h-96 w-96 rounded-full bg-indigo-500/5 blur-[120px]" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Heading and Details */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold border border-blue-500/20">
              <Award className="size-3.5" />
              <span>EU Digital Sovereignty Roadmap</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight">
              Our Vision for the <br />
              <span className="text-[#00c9db] bg-clip-text">Future of Subscriptions</span>
            </h2>
            
            <p className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-xl">
              We are not just replicating proprietary billing tools. We are designing a fully transparent, federated monetization ecosystem. Explore our detailed plan to replace RevenueCat and Adapty with a sovereign, open-source standard.
            </p>

            <div className="pt-4">
              <a href="/roadmap">
                <Button
                  size="lg"
                  className="rounded-full bg-[#00c9db] hover:bg-[#00c9db]/90 text-slate-900 px-7 py-6 text-sm font-bold shadow-[0_4px_12px_rgba(0,201,219,0.2)] hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all flex items-center gap-1.5 group cursor-pointer"
                >
                  Explore the Roadmap
                  <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column: Mini Roadmap preview cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phase 1 Preview */}
            <div className="bg-white/[0.03] backdrop-blur-md rounded-xl border border-white/5 p-5 flex gap-4 items-start hover:bg-white/[0.05] transition-all duration-300">
              <div className="size-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="space-y-1 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#00c9db] uppercase font-bold">Phase 1</span>
                  <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-0.5">
                    <Calendar className="size-2.5" />
                    Q3 2026
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white font-heading">Core Sovereign Infrastructure</h4>
                <p className="text-xs text-slate-450 leading-relaxed">
                  PostgreSQL core receipt verification API & Native SDK deployments.
                </p>
              </div>
            </div>

            {/* Phase 2 Preview */}
            <div className="bg-white/[0.03] backdrop-blur-md rounded-xl border border-white/5 p-5 flex gap-4 items-start hover:bg-white/[0.05] transition-all duration-300">
              <div className="size-8 rounded-lg bg-blue-500/10 text-blue-450 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="size-2 rounded-full bg-blue-400" />
              </div>
              <div className="space-y-1 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#00c9db] uppercase font-bold">Phase 2</span>
                  <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-0.5">
                    <Calendar className="size-2.5" />
                    Q4 2026
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white font-heading">Remote Paywalls & Configuration</h4>
                <p className="text-xs text-slate-450 leading-relaxed">
                  JSON-driven paywalls & remote price changes without App Store releases.
                </p>
              </div>
            </div>

            {/* Phase 3 Preview */}
            <div className="bg-white/[0.03] backdrop-blur-md rounded-xl border border-white/5 p-5 flex gap-4 items-start hover:bg-white/[0.05] transition-all duration-300">
              <div className="size-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="size-2 rounded-full bg-purple-400" />
              </div>
              <div className="space-y-1 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#00c9db] uppercase font-bold">Phase 3</span>
                  <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-0.5">
                    <Calendar className="size-2.5" />
                    Q1 2027
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white font-heading">Privacy-First A/B Testing & AI</h4>
                <p className="text-xs text-slate-450 leading-relaxed">
                  Local GDPR A/B testing & lifetime value predictions on sovereign DBs.
                </p>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </Section>
  );
}
