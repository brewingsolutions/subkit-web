import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { GradientMesh } from "@/components/visuals/gradient-mesh";
import { GridOverlay } from "@/components/visuals/grid-overlay";
import { ShieldCheck, FileText, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Data Processing Addendum (DPA) - Subkit",
  description: "Read the GDPR-compliant Data Processing Addendum (DPA) for Subkit managed cloud services and sovereign data processing.",
};

export default function DPAPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f6f9fc] relative">
      <Navbar />
      
      {/* Mesh and Grid overlays in the background */}
      <div className="absolute inset-x-0 top-0 h-[600px] overflow-hidden -z-10 pointer-events-none">
        <GradientMesh />
        <GridOverlay />
      </div>

      <main className="flex-1 pt-32 pb-24 md:pt-40 md:pb-32 relative">
        <Container className="px-4 max-w-4xl">
          
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/50 text-xs font-semibold text-blue-700">
              <FileText className="size-3.5" />
              <span>Standard Contractual Clauses & GDPR Alignment</span>
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-card-foreground font-heading">
              Data Processing Addendum (DPA)
            </h1>
            
            <p className="text-sm sm:text-base text-foreground/80 max-w-xl mx-auto">
              Effective Date: May 31, 2026. This DPA establishes the terms for secure and compliant data processing.
            </p>
            <div className="mx-auto mt-4 h-[2px] w-16 bg-[#00c9db]/60" />
          </div>

          {/* DPA Note about Self-Hosting */}
          <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-2xl p-6 md:p-8 mb-10 border border-slate-800 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all duration-700" />
            <div className="flex gap-4 items-start relative z-10">
              <div className="size-10 rounded-lg bg-[#00c9db]/10 text-[#00c9db] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="size-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-100 font-heading">Self-Hosting Legal Advantage</h4>
                <p className="text-xs text-slate-350 leading-relaxed">
                  If you deploy the **Subkit Self-Hosted Community Edition**, you operate your own database and validation engine on your own servers. In this model, **Subkit never processes, receives, or has access to your customer data.** 
                </p>
                <p className="text-xs text-slate-350 leading-relaxed">
                  Consequently, **no DPA is required for self-hosted installations**, giving you absolute data residency sovereignty with zero legal dependencies.
                </p>
              </div>
            </div>
          </div>

          {/* DPA Content */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 p-8 md:p-12 shadow-xl shadow-slate-100/50 text-slate-700 space-y-8 leading-relaxed text-xs sm:text-sm">
            
            <section className="space-y-4">
              <h2 className="text-lg md:text-xl font-bold text-card-foreground font-heading">1. Introduction & Scope</h2>
              <p>
                This GDPR Data Processing Addendum (&quot;DPA&quot;) forms part of the Terms of Service or Master Services Agreement 
                available at <a href="/terms" className="text-[#00c9db] hover:underline font-semibold">subkit.io/terms</a> (the &quot;Agreement&quot;), 
                entered into by and between the Customer (the &quot;data controller&quot;) and Subkit (the &quot;data processor&quot;), pursuant 
                to which Customer has accessed Subkit Managed Cloud Services.
              </p>
              <p>
                The purpose of this DPA is to reflect the parties&apos; agreement with regards to the processing of Customer Data 
                in accordance with the requirements of Data Protection Legislation (specifically Regulation (EU) 2016/679 - General Data Protection Regulation).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg md:text-xl font-bold text-card-foreground font-heading">2. Definitions</h2>
              <div className="space-y-3 pl-4 border-l-2 border-slate-200">
                <p>
                  <strong>&quot;Data Protection Legislation&quot;</strong> means, as applicable, the GDPR (Regulation (EU) 2016/679), European Directives 95/46/EC and 2002/58/EC, and any subsequent amending or replacing legislation relating to the processing of personal data and privacy inside the European Union.
                </p>
                <p>
                  <strong>&quot;Customer Data&quot;</strong> means any data which is defined as &apos;personal data&apos; under Data Protection Legislation processed by Subkit on behalf of the Customer in the course of providing Managed Cloud Services.
                </p>
                <p>
                  <strong>&quot;Data Controller&quot;</strong>, <strong>&quot;Data Processor&quot;</strong>, <strong>&quot;Data Subject&quot;</strong>, and <strong>&quot;Processing&quot;</strong> shall be interpreted in accordance with the definitions set forth in the GDPR.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg md:text-xl font-bold text-card-foreground font-heading">3. Roles & Compliance</h2>
              <p>
                The parties agree that Customer is the **Data Controller** and that Subkit is its **Data Processor** in relation to Customer Data. 
                Customer shall comply at all times with Data Protection Legislation in respect of all personal data it provides or configures 
                to be processed by Subkit pursuant to the Agreement.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg md:text-xl font-bold text-card-foreground font-heading">4. Processor Obligations</h2>
              <p>In respect of Customer Data processed under this DPA, Subkit agrees to:</p>
              
              <ul className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Documented Instructions:</strong> Process Customer Data only in accordance with the documented instructions from the Customer. If Subkit is required to process the personal data for any other purpose provided by applicable law, Subkit will inform the Customer prior to the processing unless prohibited on important grounds of public interest.
                </li>
                <li>
                  <strong>Technical & Organizational Measures:</strong> Implement and maintain appropriate technical and organizational security measures designed to protect Customer Data against unauthorized or unlawful processing and against accidental loss, destruction, damage, theft, alteration, or disclosure.
                </li>
                <li>
                  <strong>Sub-Processors:</strong> Hire third-party sub-processors only under strict written agreements containing terms substantially similar to this DPA. Subkit remains fully responsible for its Sub-Processors&apos; compliance with these obligations.
                </li>
                <li>
                  <strong>Confidentiality:</strong> Ensure that all Subkit personnel required to access Customer Data are informed of its confidential nature and have entered into binding confidentiality agreements.
                </li>
                <li>
                  <strong>Data Subject Rights Support:</strong> Assist the Customer (insofar as possible, and at Customer&apos;s request and cost) in responding to data subject rights requests under the GDPR, including requests for rectification, access, erasure, or portability of personal data.
                </li>
                <li>
                  <strong>Data Erasure:</strong> At the end of the term of Managed Services, upon Customer&apos;s request, securely destroy or return to the Customer all Customer Data within Subkit&apos;s possession or control.
                </li>
                <li>
                  <strong>Security Incident Notification:</strong> If Subkit becomes aware of any accidental, unauthorized, or unlawful destruction, loss, alteration, disclosure of, or access to Customer Data (a &quot;Security Incident&quot;), it shall without undue delay notify the Customer and provide necessary details and mitigation updates.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg md:text-xl font-bold text-card-foreground font-heading">5. Audits & Inspections</h2>
              <p>
                Subkit shall allow, no more than once every 12 months and at Customer&apos;s expense, the Customer or its authorized agents 
                to conduct audits or inspections during the term of the Agreement, provided that Customer has given Subkit at least 30 days prior 
                written notice. Such audit will be conducted during reasonable business hours with minimal disruption. For the avoidance of doubt, 
                no direct logical access to Subkit&apos;s cloud networks, databases, or IT infrastructure hosting other customers will be permitted.
              </p>
            </section>

            <section className="space-y-4 border-t border-slate-100 pt-8">
              <h3 className="text-base font-bold text-card-foreground font-heading">Annex 1: Details of the Data Processing</h3>
              
              <div className="space-y-4 mt-4 font-sans text-xs sm:text-sm">
                <p><strong>1. Subject Matter, Nature, and Purpose:</strong> Subkit processes Customer Data to provide App Store, Google Play, and Stripe in-app subscription receipt validation, cohort analytics, and entitlment state management.</p>
                <p><strong>2. Duration of Processing:</strong> The duration of processing will be the same as the duration of the provision of Managed Services under the Agreement.</p>
                <p><strong>3. Categories of Individuals:</strong> End-users of Customer&apos;s mobile and web applications who engage in subscription or billing activities.</p>
                
                <div className="space-y-2">
                  <p><strong>4. Types of Personal Data processed by default:</strong></p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Unique, non-personally identifiable App User ID (created by Customer).</li>
                    <li>Cryptographically signed Store Purchase Receipts (containing transaction ID, package purchased, and timestamps).</li>
                    <li>IP Addresses (processed for local geolocation tax rendering, discarded or hashed immediately).</li>
                    <li>Attribution tokens (e.g. AppsFlyer, Adjust, or Branch tokens configured by the Customer).</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Compliance Email CTA */}
            <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
              <div>
                <h4 className="text-sm font-bold text-card-foreground font-heading">DPA Requests</h4>
                <p className="text-xs text-slate-500">For signed copies or custom DPAs, please contact compliance.</p>
              </div>
              <a
                href="mailto:compliance@subkit.io"
                className="inline-flex items-center gap-2 bg-[#00c9db] hover:bg-[#00c9db]/90 text-slate-900 text-xs font-bold px-5 py-2.5 rounded-full transition-all shadow-[0_4px_12px_rgba(0,201,219,0.2)]"
              >
                <FileText className="size-3.5" />
                <span>compliance@subkit.io</span>
              </a>
            </div>

          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
