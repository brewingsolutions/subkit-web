import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { InteriorPageFrame } from "@/components/layout/interior-page-frame";
import { Shield, Code, Globe, Lock, Cpu, Server, Heart, Eye, Share2, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Subkit",
  description: "Learn why Subkit is building portable, open-source subscription infrastructure and how to follow its early development.",
};

export default function AboutPage() {
  return (
    <InteriorPageFrame backdrop="tall">
        <Container className="px-4">
          
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/50 text-xs font-semibold text-blue-700">
              <Globe className="size-3.5 animate-spin-slow" />
              <span>Open source · European funding applicant</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-card-foreground font-heading leading-tight">
              Sovereign & Open-Source <br />
              <span className="text-brand-accent-foreground bg-clip-text">Subscription Engine</span>
            </h1>
            
            <p className="text-base sm:text-lg leading-relaxed text-foreground max-w-2xl mx-auto">
              Subkit is an early open-source foundation for portable subscription infrastructure, designed so teams can inspect, operate, and extend their own deployment.
            </p>
            <div className="bg-brand-accent/60 mx-auto mt-4 h-0.5 w-24" />
          </div>

          {/* Mission & NGI Grant Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
            <div className="lg:col-span-7 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 p-8 md:p-10 shadow-xl shadow-slate-100/50 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Shield className="size-6" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground font-heading">
                  Why We Are Building Subkit
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Mobile subscription infrastructure is commonly delivered as a managed service. That is convenient, but it can make portability, inspection, and independent operation harder for teams that need those properties.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Subscription systems often require teams to trust infrastructure they cannot inspect or operate themselves. We believe critical transaction pipelines should be portable, auditable, and available as open-source building blocks.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-semibold text-card-foreground">
                  Our mission is simple: to democratize in-app monetization by building an open-source standard for mobile subscriptions.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-8 md:p-10 flex flex-col justify-between border border-slate-800 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-700" />
              
              <div className="space-y-6 z-10">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold tracking-tight text-white font-heading">European Open Internet Values</span>
                  <span className="text-[10px] uppercase bg-blue-500/20 text-blue-300 font-mono px-2 py-0.5 rounded-md border border-blue-500/30">
                    Sovereignty
                  </span>
                </div>
                
                <h3 className="text-xl font-bold font-heading text-slate-100">
                  Funding Intent & Public-Interest Direction
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Subkit has submitted a European open-source funding application and is awaiting review. An application does not imply selection, funding, endorsement, or support by NGI. Its public-interest goals overlap with themes promoted by European open-internet programmes:
                </p>
                
                <ul className="text-xs sm:text-sm text-slate-300 space-y-3.5 pl-2">
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span><strong>Human-Centric:</strong> Privacy-aware design and meaningful operator control.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span><strong>Open-Source Centered:</strong> Inspectable code, reusable interfaces, and portable deployment.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span><strong>Portable & Resilient:</strong> Self-hostable models that can support an operator&apos;s residency and continuity strategy.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Developed in Europe</span>
                <span className="font-mono text-[10px] text-blue-400">Application pending · no award claimed</span>
              </div>
            </div>
          </div>

          {/* Pillars of Subkit */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground font-heading">
              Our Core Pillars
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Designed around trust, agility, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {/* Pillar 1 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-slate-200/50 shadow-lg shadow-slate-100/30 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="size-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center">
                  <Lock className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground font-heading">No Data Vendor Lock-in</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  The self-hosted direction keeps application data in infrastructure selected by the operator. Portability and migration tooling are goals; they are not yet production guarantees.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-slate-200/50 shadow-lg shadow-slate-100/30 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="size-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Eye className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground font-heading">Auditability & Transparency</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Public source allows developers and reviewers to inspect Subkit&apos;s implementation and report security concerns. Formal third-party audits have not yet been completed.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-slate-200/50 shadow-lg shadow-slate-100/30 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="size-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Globe className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground font-heading">Data-Control by Design</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Portable deployment can help organizations choose where data is processed. Self-hosting does not itself guarantee GDPR compliance; operators remain responsible for security, retention, lawful processing, contracts, and data-subject rights.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-slate-200/50 shadow-lg shadow-slate-100/30 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="size-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Zap className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground font-heading">Green IT & Performance</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Planned SDKs will target small, documented dependency surfaces and measurable startup behavior. No performance or environmental-impact claim will be made before implementations are benchmarked.
                </p>
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-slate-200/50 shadow-lg shadow-slate-100/30 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="size-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                  <Share2 className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground font-heading">Open Core & Federation</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  A future research direction may explore interoperable Subkit installations. Federation is not part of the current product and would require a defined trust, identity, privacy, and threat model.
                </p>
              </div>
            </div>

            {/* Pillar 6 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-slate-200/50 shadow-lg shadow-slate-100/30 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="size-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Code className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground font-heading">Planned Public SDKs</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Swift, Kotlin, Flutter, and React Native are planned targets. Implementations, package footprints, compatibility, and performance will be published only after they are measured.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Architecture overview */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/50 p-8 md:p-12 mb-20">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="text-center space-y-2">
                <span className="text-brand-accent-foreground font-mono text-[10px] font-bold tracking-widest uppercase">Architecture</span>
                <h3 className="text-2xl font-bold text-card-foreground font-heading">Portable, Explicit, and Developer-Centric</h3>
                <p className="text-xs sm:text-sm text-slate-500">The current architecture direction and its pre-alpha boundaries.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4 items-start">
                  <div className="size-8 rounded bg-white flex items-center justify-center text-primary shadow-sm mt-1 flex-shrink-0">
                    <Server className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-card-foreground font-heading">Portable Self-Hosted Runtime</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Run the Core API directly with Node.js and PostgreSQL or use the OCI-compatible image and Compose reference deployment. The Event Inbox also has libSQL-compatible and PostgreSQL adapters. Production scaling guidance is not yet published.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="size-8 rounded bg-white flex items-center justify-center text-primary shadow-sm mt-1 flex-shrink-0">
                    <Cpu className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-card-foreground font-heading">Planned SDK Clients</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Planned iOS, Android, Flutter, and React Native clients built against an explicit public contract.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                <div>
                  <p className="text-xs font-semibold text-slate-400 font-mono">SUPPORT THE INITIATIVE</p>
                  <p className="text-sm text-slate-600 font-medium">Review the current foundation, open an issue, or contribute on GitHub.</p>
                </div>
                <a
                  href="https://github.com/brewingsolutions/subkit-core"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all"
                >
                  <Code className="size-3.5" />
                  <span>Star on GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Join Us CTA */}
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold font-heading text-card-foreground">Let&apos;s Build a More Open Internet</h3>
            <p className="text-sm text-slate-500 max-w-lg mx-auto">
              Interested in open-source subscription infrastructure or European digital-commons funding? We welcome technical feedback and collaboration.
            </p>
            <div>
              <a
                href="/contact"
                className="bg-brand-accent hover:bg-brand-accent/90 shadow-brand inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-bold text-slate-900 transition-colors"
              >
                <Heart className="size-3.5 fill-current" />
                <span>Get in Touch for Collaboration</span>
              </a>
            </div>
          </div>

        </Container>
    </InteriorPageFrame>
  );
}
