import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { GradientMesh } from "@/components/visuals/gradient-mesh";
import { GridOverlay } from "@/components/visuals/grid-overlay";
import { Shield, Code, Globe, Lock, Cpu, Server, Heart, Layers, Eye, Share2, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Subkit",
  description: "Learn how Subkit is building the open-source, self-hosted alternative to Adapty and RevenueCat, powered by EU NGI principles.",
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f6f9fc] relative">
      <Navbar />
      
      {/* Mesh and Grid overlays in the background */}
      <div className="absolute inset-x-0 top-0 h-[700px] overflow-hidden -z-10 pointer-events-none">
        <GradientMesh />
        <GridOverlay />
      </div>

      <main className="flex-1 pt-32 pb-24 md:pt-40 md:pb-32 relative">
        <Container className="px-4">
          
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/50 text-xs font-semibold text-blue-700">
              <Globe className="size-3.5 animate-spin-slow" />
              <span>Aligned with EU Next Generation Internet (NGI)</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-card-foreground font-heading leading-tight">
              Sovereign & Open-Source <br />
              <span className="text-[#00c9db] bg-clip-text">Subscription Engine</span>
            </h1>
            
            <p className="text-base sm:text-lg leading-relaxed text-foreground max-w-2xl mx-auto">
              Subkit is the privacy-first, developer-friendly, self-hosted alternative to US-based proprietary platforms like RevenueCat and Adapty. Built to give developers full digital sovereignty.
            </p>
            <div className="mx-auto mt-4 h-[2px] w-24 bg-[#00c9db]/60" />
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
                  In-app subscriptions have become the lifeblood of modern mobile and web applications. However, the ecosystem is heavily consolidated under US proprietary SaaS giants like RevenueCat and Adapty. 
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Every time a user subscribes, sensitive purchase receipts, customer journeys, and transaction values are routed through black-box architectures outside Europe. We believe that critical transaction pipelines must be transparent, secure, and fully owned by the developers building them.
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
                  <span className="text-2xl font-bold tracking-tight text-white font-heading">NGI Initiative</span>
                  <span className="text-[10px] uppercase bg-blue-500/20 text-blue-300 font-mono px-2 py-0.5 rounded-md border border-blue-500/30">
                    Sovereignty
                  </span>
                </div>
                
                <h3 className="text-xl font-bold font-heading text-slate-100">
                  EU Digital Sovereignty & Grant Vision
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Subkit is built directly in line with the European Commission’s <strong>Next Generation Internet (NGI)</strong> initiative. We champion an internet that is:
                </p>
                
                <ul className="text-xs sm:text-sm text-slate-300 space-y-3.5 pl-2">
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span><strong>Human-Centric:</strong> Privacy by design, placing absolute control back in the hands of creators and consumers.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span><strong>Open-Source Centered:</strong> Transparent codebases that prevent single-vendor monopolies and tech colonization.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span><strong>Decentralized & Resilient:</strong> Self-hostable models enabling businesses to maintain data residency inside EU boundaries.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span>Made with ♥ in Europe</span>
                <span className="font-mono text-[10px] text-blue-400">ngi.eu</span>
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
                  Your transactional and user activity data resides entirely inside your own servers. Migrating or integrating with custom internal business tools is a simple database query away.
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
                  Proprietary SDKs act as black boxes where developers cannot verify background tracking or telemetry. Subkit is completely transparent and open for third-party security audits.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-slate-200/50 shadow-lg shadow-slate-100/30 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="size-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Globe className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground font-heading">GDPR Compliance by Design</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Run inside European cloud providers or fully on-premise infrastructure. By self-hosting Subkit, you guarantee 100% data residency compliance for EU users without complex compliance legal overlays.
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
                  Unlike bloated proprietary SDKs that increase app size and battery consumption, Subkit’s zero-dependency native SDKs are ultra-lightweight. This preserves device battery, reduces data overhead, and minimizes carbon footprints—fully aligning with Green IT standards.
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
                  We are not just building a self-hosted server. Our vision includes a federated model where distinct Subkit instances can securely communicate via verified APIs, establishing a decentralized subscription validation network that eliminates central monopoly points.
                </p>
              </div>
            </div>

            {/* Pillar 6 */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-slate-200/50 shadow-lg shadow-slate-100/30 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="size-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Code className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground font-heading">Zero-Dependency SDKs</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Fully open-source client SDKs integrated directly within native frameworks like iOS Swift, Android Kotlin, Flutter, and React Native. Highly optimized to execute without impacting app boot performance.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Architecture overview */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/50 p-8 md:p-12 mb-20">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="text-center space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-[#00c9db] uppercase font-bold">Architecture</span>
                <h3 className="text-2xl font-bold text-card-foreground font-heading">Modern, Light, and Developer-Centric</h3>
                <p className="text-xs sm:text-sm text-slate-500">How Subkit replaces heavy proprietary SDK configurations.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4 items-start">
                  <div className="size-8 rounded bg-white flex items-center justify-center text-primary shadow-sm mt-1 flex-shrink-0">
                    <Server className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-card-foreground font-heading">Self-Hosted Docker Node</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Deploy the Subkit engine via a single Docker container. Connect to standard PostgreSQL or SQLite databases and scale horizontally as your traffic grows.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="size-8 rounded bg-white flex items-center justify-center text-primary shadow-sm mt-1 flex-shrink-0">
                    <Cpu className="size-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-card-foreground font-heading">Zero-Dependency SDKs</h4>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">
                      Native iOS, Android, Flutter, and React Native client SDKs. Lean codebases that don't bloat your app sizes or slow down startup cycles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                <div>
                  <p className="text-xs font-semibold text-slate-400 font-mono">SUPPORT THE INITIATIVE</p>
                  <p className="text-sm text-slate-600 font-medium">Join us on GitHub and help us construct a sovereign digital future.</p>
                </div>
                <a
                  href="https://github.com/brewingsolutions/subkit"
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
            <h3 className="text-2xl font-bold font-heading text-card-foreground">Let's Build a More Open Internet</h3>
            <p className="text-sm text-slate-500 max-w-lg mx-auto">
              Are you applying for NGI grants or looking to collaborate? We would love to share resources, documentation, and technical alignment.
            </p>
            <div>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#00c9db] hover:bg-[#00c9db]/90 text-slate-900 text-xs font-bold px-6 py-3 rounded-full transition-all shadow-[0_4px_12px_rgba(0,201,219,0.2)]"
              >
                <Heart className="size-3.5 fill-current" />
                <span>Get in Touch for Collaboration</span>
              </a>
            </div>
          </div>

        </Container>
      </main>

      <Footer />
    </div>
  );
}
