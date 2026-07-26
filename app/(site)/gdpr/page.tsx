import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { InteriorPageFrame } from "@/components/layout/interior-page-frame";
import { ShieldCheck, ShieldAlert, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "GDPR & Data Sovereignty - Subkit",
  description: "Learn how self-hosting Subkit can support data control and EU data-residency strategies.",
};

export default function GDPRPage() {
  return (
    <InteriorPageFrame>
        <Container className="px-4 max-w-4xl">
          
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/50 text-xs font-semibold text-emerald-700">
              <ShieldCheck className="size-3.5" />
              <span>Privacy-first and self-hostable</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-card-foreground font-heading">
              GDPR & Data Sovereignty
            </h1>
            
            <p className="text-sm sm:text-base text-foreground/80 max-w-xl mx-auto">
              Compare how Subkit redefines privacy compliance by putting developers in complete control of subscriber metadata.
            </p>
            <div className="bg-brand-accent/60 mx-auto mt-4 h-0.5 w-16" />
          </div>

          {/* Core Content Grid */}
          <div className="space-y-8">
            
            {/* The Paradigm Shift comparison box */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Box 1: The US SaaS Problem (RevenueCat / Adapty) */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 p-6 md:p-8 shadow-lg shadow-slate-100/30 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="size-10 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center">
                    <ShieldAlert className="size-5" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground font-heading">US SaaS Monopolies</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    When using US-based proprietary platforms (RevenueCat, Adapty), they act as **&quot;data processors.&quot;** 
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Every app store purchase receipt, customer journey history, and device token must be transferred to external US cloud servers. Gaining GDPR compliance requires signed DPAs (Data Processing Addendums) and heavy privacy disclosures in your app&apos;s privacy policy.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 text-[11px] text-rose-500/80 font-semibold font-mono">
                  ❌ US Cloud Data Transferences
                </div>
              </div>

              {/* Box 2: The Subkit Solution */}
              <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 shadow-xl flex flex-col justify-between border border-slate-800">
                <div className="space-y-4">
                  <div className="bg-brand-accent/10 text-brand-accent-foreground flex size-10 items-center justify-center rounded-lg">
                    <ShieldCheck className="size-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-150 font-heading">Subkit Sovereign Open-Source</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    With Subkit Self-Hosted, **no subscriber transaction data ever leaves your own infrastructure.** 
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Running the database and engine on infrastructure you control can reduce third-party processing and support data-residency requirements. Self-hosting does not automatically establish GDPR compliance: operators remain responsible for configuration, security, retention, legal bases, and data-subject rights.
                  </p>
                </div>
                <div className="text-brand-accent mt-4 border-t border-slate-800 pt-4 font-mono text-[11px] font-semibold">
                  ✓ 100% Local Data Sovereignty
                </div>
              </div>

            </div>

            {/* GDPR Policy Content */}
            <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 p-8 md:p-10 shadow-xl shadow-slate-100/50 text-slate-700 space-y-8 leading-relaxed">
              
              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-card-foreground font-heading">Subkit Self-Hosted Compliance</h2>
                <p className="text-xs sm:text-sm">
                  Subkit can be utilized by developers who must comply with the strict requirements of the European General Data Protection Regulation (GDPR). 
                </p>
                <p className="text-xs sm:text-sm">
                  In the case of hosting Subkit on your own dedicated server (Self-Hosted), Subkit does **NOT** act as a processor or controller of your customer&apos;s data. You have absolute ownership of your database. No usage statistics, purchase receipts, or customer information is compiled or broadcast to external networks.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-card-foreground font-heading">Subkit Managed Cloud</h2>
                <p className="text-xs sm:text-sm">
                  For developers who prefer not to run server operations, we offer the fully-managed **Subkit Cloud** tier. In this model, Subkit acts as a **&quot;data processor&quot;** while you act as the **&quot;data controller.&quot;**
                </p>
                <ul className="list-disc pl-6 text-xs sm:text-sm space-y-2">
                  <li><strong>Sovereign EU Servers:</strong> All managed databases and receipt validation workers are hosted exclusively on European cloud infrastructure (Frankfurt / Paris).</li>
                  <li><strong>Data Processing Addendum (DPA):</strong> We offer a comprehensive GDPR-compliant DPA incorporating Standard Contractual Clauses (SCCs).</li>
                  <li><strong>Instant Data Erasure:</strong> Fully-compliant user deletion APIs enable automated deletion requests in real time.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-card-foreground font-heading">Our GDPR Principles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs sm:text-sm pt-2">
                  <div className="space-y-2">
                    <h4 className="font-bold text-card-foreground">Data Minimization</h4>
                    <p className="text-slate-500 leading-relaxed">
                      We only compile and process the absolute minimum metadata required to cryptographically validate App Store and Google Play receipts.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-card-foreground">Right to be Forgotten</h4>
                    <p className="text-slate-500 leading-relaxed">
                      Our system includes robust endpoints to immediately purge all customer subscription traces from database structures upon request.
                    </p>
                  </div>
                </div>
              </section>

              {/* Support & Compliance Email CTA */}
              <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
                <div>
                  <h4 className="text-sm font-bold text-card-foreground font-heading">Compliance Questions?</h4>
                  <p className="text-xs text-slate-500">Reach out to our dedicated European data privacy handlers.</p>
                </div>
                <a
                  href="mailto:compliance@subkit.io"
                  className="bg-brand-accent hover:bg-brand-accent/90 shadow-brand inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold text-slate-900 transition-colors"
                >
                  <FileText className="size-3.5" />
                  <span>compliance@subkit.io</span>
                </a>
              </div>

            </div>

          </div>
        </Container>
    </InteriorPageFrame>
  );
}
