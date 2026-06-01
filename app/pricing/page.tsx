"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { GradientMesh } from "@/components/visuals/gradient-mesh";
import { GridOverlay } from "@/components/visuals/grid-overlay";
import { Check, Info, HelpCircle, ArrowRight, Zap, Code, Shield, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  const [revenue, setRevenue] = useState(30000); // Default monthly revenue

  // Calculate Competitor Pricing (RevenueCat Model)
  const calculateRevenueCat = (rev: number) => {
    if (rev <= 10000) return 0;
    // RevenueCat: charges roughly $8 per $1000 after 10k free
    const chargeable = rev - 10000;
    const base = 8; // standard fee
    return Math.round((chargeable / 1000) * base);
  };

  // Calculate Subkit Pricing
  const calculateSubkit = (rev: number) => {
    if (rev <= 20000) return 0; // Free up to 20k
    if (rev <= 50000) return 49; // Growth Tier base
    const chargeable = rev - 50000;
    return Math.round(49 + (chargeable / 1000) * 0.4); // $0.40 per $1000
  };

  const revenueCatCost = calculateRevenueCat(revenue);
  const subkitCost = calculateSubkit(revenue);
  const savings = Math.max(0, revenueCatCost - subkitCost);

  return (
    <div className="flex min-h-screen flex-col bg-[#f6f9fc] relative">
      <Navbar />
      
      {/* Mesh and Grid overlays in the background */}
      <div className="absolute inset-x-0 top-0 h-[600px] overflow-hidden -z-10 pointer-events-none">
        <GradientMesh />
        <GridOverlay />
      </div>

      <main className="flex-1 pt-32 pb-24 md:pt-40 md:pb-32 relative">
        <Container className="px-4">
          
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center mb-16 space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-[#00c9db] uppercase font-bold">
              Fair-Play Pricing
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-card-foreground font-heading">
              Sovereign Power, <br />
              <span className="text-[#00c9db] bg-clip-text">No Growth Tax</span>
            </h1>
            <p className="text-base leading-relaxed text-foreground max-w-xl mx-auto">
              Run it entirely free on your own infrastructure or choose our managed EU Cloud with predictable, half-price overage tiers.
            </p>
            <div className="mx-auto mt-4 h-[2px] w-16 bg-[#00c9db]/60" />
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch mb-24">
            
            {/* Tier 1: Self-Hosted */}
            <div className="bg-white/85 backdrop-blur-md rounded-2xl border border-slate-200/60 p-8 shadow-xl shadow-slate-100/50 flex flex-col justify-between hover:border-slate-300 transition-all duration-300">
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-card-foreground font-heading">Self-Hosted</h3>
                  <p className="text-xs text-slate-450">Best for digital sovereignty and indie hackers.</p>
                </div>
                
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-card-foreground font-heading">$0</span>
                  <span className="text-xs text-slate-400 font-semibold font-mono">/ FREE FOREVER</span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  Run the core Subkit receipt validation and webhook engine on your own VPS, Hetzner, or bare-metal servers.
                </p>

                <ul className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-emerald-500 stroke-[3]" />
                    <span>Sovereign Data Control</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-emerald-500 stroke-[3]" />
                    <span>Unlimited Apps & Purchases</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-emerald-500 stroke-[3]" />
                    <span>Full raw database access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-emerald-500 stroke-[3]" />
                    <span>Active GitHub community support</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a href="https://github.com/brewingsolutions/subkit" target="_blank" rel="noreferrer" className="w-full">
                  <Button variant="outline" className="w-full rounded-full border-slate-250 py-5 text-xs font-bold hover:bg-slate-50 flex items-center justify-center gap-1">
                    <Code className="size-3.5" />
                    <span>Deploy Community Core</span>
                  </Button>
                </a>
              </div>
            </div>

            {/* Tier 2: Managed Cloud (Most Popular) */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-2xl flex flex-col justify-between border border-slate-800 relative overflow-hidden group hover:border-[#00c9db]/30 transition-all duration-300">
              <div className="absolute top-0 right-0 bg-[#00c9db]/10 text-[#00c9db] text-[9px] font-mono font-bold px-4 py-1.5 rounded-bl-xl border-l border-b border-[#00c9db]/20 tracking-wider uppercase">
                Most Popular
              </div>
              <div className="absolute top-0 left-0 -mt-12 -ml-12 w-32 h-32 bg-[#00c9db]/5 rounded-full blur-2xl group-hover:bg-[#00c9db]/10 transition-all duration-700" />
              
              <div className="space-y-6 relative z-10">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-100 font-heading">Managed Cloud</h3>
                  <p className="text-xs text-slate-450">Best for fast-growing apps and SaaS teams.</p>
                </div>
                
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-[#00c9db] font-heading">$49</span>
                  <span className="text-xs text-slate-450 font-semibold font-mono">/ MO (START FREE)</span>
                </div>

                <p className="text-xs text-slate-350 leading-relaxed">
                  Hosted on GDPR-compliant European cloud nodes. Zero maintenance, 99.99% uptime, automated secure backups.
                </p>

                <ul className="space-y-3 pt-4 border-t border-slate-800 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-[#00c9db] stroke-[3]" />
                    <span><strong>Free up to $20,000 MTR/mo</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-[#00c9db] stroke-[3]" />
                    <span>GDPR Compliant EU Servers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-[#00c9db] stroke-[3]" />
                    <span>Real-time webhook dispatcher</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-[#00c9db] stroke-[3]" />
                    <span>Predictable overage: $0.40/1k</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8 relative z-10">
                <a href="/contact" className="w-full">
                  <Button className="w-full rounded-full bg-[#00c9db] hover:bg-[#00c9db]/90 text-slate-900 py-5 text-xs font-bold shadow-[0_4px_12px_rgba(0,201,219,0.2)] flex items-center justify-center gap-1">
                    <Zap className="size-3.5 fill-current" />
                    <span>Create Managed Account</span>
                  </Button>
                </a>
              </div>
            </div>

            {/* Tier 3: Enterprise Sovereign */}
            <div className="bg-white/85 backdrop-blur-md rounded-2xl border border-slate-200/60 p-8 shadow-xl shadow-slate-100/50 flex flex-col justify-between hover:border-slate-300 transition-all duration-300">
              <div className="space-y-6">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-card-foreground font-heading">Enterprise Support</h3>
                  <p className="text-xs text-slate-450">Best for corporate compliance & bank-grade SLA.</p>
                </div>
                
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-card-foreground font-heading">$250</span>
                  <span className="text-xs text-slate-400 font-semibold font-mono">/ MO STARTING</span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  Corporate SLA and technical assistance to host Subkit inside your bank-grade, isolated European networks.
                </p>

                <ul className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-emerald-500 stroke-[3]" />
                    <span>24/7 SLA Technical Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-emerald-500 stroke-[3]" />
                    <span>Database Clustering setup help</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-emerald-500 stroke-[3]" />
                    <span>Data Privacy DPA auditing help</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="size-4 text-emerald-500 stroke-[3]" />
                    <span>Federated Multi-node analytics</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <a href="/contact" className="w-full">
                  <Button variant="outline" className="w-full rounded-full border-slate-250 py-5 text-xs font-bold hover:bg-slate-50 flex items-center justify-center gap-1">
                    <Shield className="size-3.5" />
                    <span>Request Custom Contract</span>
                  </Button>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Savings Calculator */}
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200/60 p-8 md:p-12 shadow-xl shadow-slate-100/50 mb-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/[0.01] to-transparent -z-10" />

            <div className="text-center max-w-xl mx-auto space-y-3 mb-10">
              <h3 className="text-2xl font-bold text-card-foreground font-heading">
                Compare and Calculate Savings
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Proprietary SaaS platforms take a direct commission on your revenue. Subkit charges zero commission on self-hosted and flat, predictable rates on cloud.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Slider */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex justify-between items-center text-xs sm:text-sm text-slate-700">
                  <span className="font-semibold uppercase tracking-wider text-slate-400 font-mono">Monthly Revenue</span>
                  <span className="text-xl font-bold text-card-foreground font-heading">
                    ${revenue.toLocaleString('en-US')}
                  </span>
                </div>

                <div className="space-y-2">
                  <input
                    type="range"
                    min="5000"
                    max="200000"
                    step="5000"
                    value={revenue}
                    onChange={(e) => setRevenue(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00c9db]"
                  />
                  <div className="flex justify-between text-[10px] text-slate-450 font-bold font-mono">
                    <span>$5,000</span>
                    <span>$100,000</span>
                    <span>$200,000</span>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-150 text-[11px] sm:text-xs text-slate-500 flex gap-2">
                  <Info className="size-4 text-[#00c9db] flex-shrink-0 mt-0.5" />
                  <p>
                    Competitor pricing calculated based on standard RevenueCat rates (charges $8 / $1k tracked revenue after $10k free). Subkit Cloud includes $20k free and limits overage to just $0.40 / $1k.
                  </p>
                </div>
              </div>

              {/* Right Column: Comparative pricing cards */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* RevenueCat Cost */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex justify-between items-center">
                  <span className="text-xs font-semibold text-slate-500">RevenueCat Cost</span>
                  <span className="text-sm font-bold text-slate-700 font-mono">
                    ${revenueCatCost.toLocaleString('en-US')} / mo
                  </span>
                </div>

                {/* Subkit Managed Cloud */}
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 flex justify-between items-center">
                  <span className="text-xs font-semibold text-emerald-700">Subkit Managed Cloud</span>
                  <span className="text-sm font-bold text-emerald-800 font-mono">
                    ${subkitCost.toLocaleString('en-US')} / mo
                  </span>
                </div>

                {/* Savings Badge */}
                <div className="bg-slate-900 text-white rounded-xl p-4 border border-slate-800 flex justify-between items-center shadow-lg shadow-indigo-950/20">
                  <span className="text-xs font-bold font-heading text-slate-300">Your Monthly Savings</span>
                  <span className="text-base font-extrabold text-[#00c9db] font-mono">
                    ${savings.toLocaleString('en-US')} / mo
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* Help & Support FAQ footer */}
          <div className="text-center space-y-6">
            <h3 className="text-xl font-bold font-heading text-card-foreground">Have questions about our pricing?</h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
              Our open-source core is 100% free under transparent licensing. For migration services or custom data residency support, get in touch.
            </p>
            <div>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#00c9db] hover:bg-[#00c9db]/90 text-slate-900 text-xs font-bold px-6 py-3 rounded-full transition-all shadow-[0_4px_12px_rgba(0,201,219,0.2)]"
              >
                <Heart className="size-3.5 fill-current" />
                <span>Talk to our Integration Team</span>
              </a>
            </div>
          </div>

        </Container>
      </main>

      <Footer />
    </div>
  );
}
