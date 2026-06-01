import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { GradientMesh } from "@/components/visuals/gradient-mesh";
import { GridOverlay } from "@/components/visuals/grid-overlay";
import { CheckCircle2, CircleDot, Calendar, Award, ArrowRight, Zap, Eye, Share2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Roadmap - Subkit",
  description: "Explore our open-source, EU-aligned roadmap as we build the ultimate sovereign alternative to RevenueCat and Adapty.",
};

const ROADMAP_PHASES = [
  {
    phase: "Phase 1",
    title: "Core Sovereign Infrastructure",
    timeline: "Active & Q3 2026",
    status: "In Progress",
    statusColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    icon: CheckCircle2,
    iconColor: "text-emerald-500 bg-emerald-50",
    description: "Establishing the core self-hosted receipt validation and billing architecture.",
    items: [
      "Apple App Store & Google Play receipt validation engine",
      "Robust PostgreSQL connection layer with secure migrations",
      "Unified client SDKs (iOS Swift, Android Kotlin, Flutter, React Native)",
      "Real-time Billing Webhook Dispatcher (Stripe, Slack, customized endpoints)",
      "Essential Developer Console UI for managing products and API keys"
    ]
  },
  {
    phase: "Phase 2",
    title: "Remote Configuration & Dynamic Paywalls",
    timeline: "Q4 2026",
    status: "Planned",
    statusColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    icon: Zap,
    iconColor: "text-blue-500 bg-blue-50",
    description: "Enabling remote paywall customization and dynamic deployment without app store releases.",
    items: [
      "JSON-Driven dynamic Paywall engine and rendering layer",
      "No-Code Paywall configuration dashboard inside the console",
      "Localized Offerings (Segment users by geography, language, and behavior)",
      "Promotional Codes and Subscription discount integration",
      "Cross-platform Web view rendering for instant, zero-code paywall changes"
    ]
  },
  {
    phase: "Phase 3",
    title: "Privacy-First Analytics & Federated A/B Testing",
    timeline: "Q1 2027",
    status: "Planned",
    statusColor: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    icon: Share2,
    iconColor: "text-purple-500 bg-purple-50",
    description: "Deep analytics and conversion optimization running entirely on sovereign servers.",
    items: [
      "GDPR-compliant locally processed Paywall A/B testing",
      "Cohort & LTV (Lifetime Value) prediction models",
      "Database-native analytics queries to prevent third-party data tracking",
      "Federated Reporting Network (Securely aggregate metrics across separate server instances)",
      "Advanced Churn prediction insights and subscription analytics dashboard"
    ]
  }
];

export default function RoadmapPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f6f9fc] relative">
      <Navbar />
      
      {/* Mesh and Grid overlays in the background */}
      <div className="absolute inset-x-0 top-0 h-[600px] overflow-hidden -z-10 pointer-events-none">
        <GradientMesh />
        <GridOverlay />
      </div>

      <main className="flex-1 pt-32 pb-24 md:pt-40 md:pb-32 relative">
        <Container className="px-4 max-w-5xl">
          
          {/* Header */}
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/50 text-xs font-semibold text-blue-700">
              <Award className="size-3.5" />
              <span>EU Next Generation Internet Initiative Target</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-card-foreground font-heading">
              Our Visionary <span className="text-[#00c9db] bg-clip-text">Roadmap</span>
            </h1>
            
            <p className="text-base sm:text-lg leading-relaxed text-foreground max-w-2xl mx-auto">
              We are building a highly transparent, fully sovereign monetization stack. Trace our trajectory as we challenge proprietary monopolies and create the future of subscription systems.
            </p>
            <div className="mx-auto mt-4 h-[2px] w-24 bg-[#00c9db]/60" />
          </div>

          {/* Timeline Layout */}
          <div className="relative border-l border-slate-200/80 ml-4 md:ml-32 space-y-16 py-4">
            {ROADMAP_PHASES.map((phaseItem, index) => {
              const Icon = phaseItem.icon;
              return (
                <div key={phaseItem.phase} className="relative pl-8 md:pl-12 group">
                  
                  {/* Timeline Dot Connector */}
                  <span className="absolute -left-[17px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#f6f9fc] border border-slate-200 shadow-sm z-10 transition-transform duration-300 group-hover:scale-110">
                    <span className="h-2 w-2 rounded-full bg-[#00c9db]" />
                  </span>

                  {/* Desktop Phase Indicator on the Left of Timeline */}
                  <div className="hidden md:block absolute right-full mr-12 top-2 text-right w-24">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#00c9db] block uppercase">
                      {phaseItem.phase}
                    </span>
                    <span className="text-[11px] text-slate-400 font-semibold flex items-center justify-end gap-1 mt-1">
                      <Calendar className="size-3" />
                      {phaseItem.timeline}
                    </span>
                  </div>

                  {/* Main Card Content */}
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 p-6 md:p-8 shadow-xl shadow-slate-100/50 hover:border-primary/20 transition-all duration-300 relative group-hover:-translate-y-0.5">
                    
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                      <div className="space-y-1">
                        <span className="text-[10px] md:hidden font-mono font-bold tracking-widest text-[#00c9db] uppercase block">
                          {phaseItem.phase} — {phaseItem.timeline}
                        </span>
                        <h2 className="text-xl md:text-2xl font-bold text-card-foreground font-heading">
                          {phaseItem.title}
                        </h2>
                      </div>
                      
                      {/* Status Badge */}
                      <div>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${phaseItem.statusColor}`}>
                          <CircleDot className="size-3 animate-pulse" />
                          {phaseItem.status}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-6">
                      {phaseItem.description}
                    </p>

                    {/* Bullet List */}
                    <div className="space-y-3.5 border-t border-slate-150/50 pt-6">
                      <h4 className="text-xs font-mono font-bold text-slate-450 uppercase tracking-widest">
                        Key Deliverables
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {phaseItem.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-600">
                            <span className="text-[#00c9db] mt-1">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Footnote Alert aligning with EU */}
          <div className="mt-20 bg-slate-900 text-white rounded-2xl border border-slate-800 p-8 md:p-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-[#00c9db]/10 rounded-full blur-3xl group-hover:bg-[#00c9db]/20 transition-all duration-700" />
            
            <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold border border-blue-500/20">
                <CircleDot className="size-3 animate-pulse" />
                <span>Our Digital Sovereignty Pledge</span>
              </span>
              
              <h3 className="text-2xl md:text-3xl font-bold font-heading">
                Help Us Fuel a Human-Centric Internet
              </h3>
              
              <p className="text-xs sm:text-sm leading-relaxed text-slate-350 max-w-xl mx-auto">
                Subkit’s roadmap isn't just about matching feature tallies. It's about changing the paradigm of how subscription data is controlled, keeping it local, open, and secure.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00c9db] hover:bg-[#00c9db]/90 text-slate-900 text-xs font-bold px-6 py-3 rounded-full transition-all shadow-[0_4px_12px_rgba(0,201,219,0.2)]"
                >
                  <span>Inquire for Partnership</span>
                  <ArrowRight className="size-3.5" />
                </a>
                <a
                  href="https://github.com/brewingsolutions/subkit"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-700 bg-slate-800 hover:bg-slate-750 text-white text-xs font-bold px-6 py-3 rounded-full transition-all"
                >
                  <span>Star on GitHub</span>
                </a>
              </div>
            </div>
          </div>

        </Container>
      </main>

      <Footer />
    </div>
  );
}
