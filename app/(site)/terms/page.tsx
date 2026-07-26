import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { InteriorPageFrame } from "@/components/layout/interior-page-frame";

export const metadata: Metadata = {
  title: "Terms of Service - Subkit",
  description: "Read our terms of service and usage agreements for the Subkit subscription management platform.",
};

export default function TermsPage() {
  return (
    <InteriorPageFrame>
        <Container className="px-4 max-w-4xl">
          
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-card-foreground font-heading">
              Terms of Service
            </h1>
            <p className="text-sm sm:text-base text-foreground/80 max-w-xl mx-auto">
              Last updated: May 31, 2026. Please read these terms carefully before using our developer platform.
            </p>
            <div className="bg-brand-accent/60 mx-auto mt-4 h-0.5 w-16" />
          </div>

          {/* Terms Content */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 p-8 md:p-12 shadow-xl shadow-slate-100/50 text-slate-700 space-y-8 leading-relaxed">
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-card-foreground font-heading">1. Agreement to Terms</h2>
              <p>
                By accessing or using Subkit (the &quot;Service&quot;), provided by Subkit (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), 
                you agree to be bound by these Terms of Service. If you do not agree to all of these terms, 
                you may not access or use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-card-foreground font-heading">2. Description of Service</h2>
              <p>
                Subkit provides in-app subscription management and analytics tools, including SDKs, APIs, and a dashboard 
                for visualizing transaction events and user analytics. We reserve the right to modify, suspend, or discontinue 
                any part of the Service at any time with or without notice.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-card-foreground font-heading">3. Account Registration & Security</h2>
              <p>
                To utilize certain features, you must register for an account. You agree to provide accurate, complete, 
                and current information during registration. You are responsible for safeguarding your account credentials 
                and for any activities or actions conducted under your account.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-card-foreground font-heading">4. SDK & API Usage</h2>
              <p>
                Subject to these Terms, Subkit grants you a limited, non-exclusive, non-transferable, and revocable license 
                to integrate our SDKs and utilize our APIs solely for managing and tracking your in-app subscriptions.
              </p>
              <p>
                You agree not to abuse, reverse-engineer, disrupt, or bypass security mechanisms of our infrastructure, 
                APIs, or client-side packages.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-card-foreground font-heading">5. Intellectual Property</h2>
              <p>
                All intellectual property rights in and to the Service, including software, design systems, logos, 
                and documentation, are and will remain the exclusive property of Subkit and its licensors.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-card-foreground font-heading">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, Subkit shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, 
                arising out of or in connection with your use or inability to use the Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-card-foreground font-heading">7. Contact Information</h2>
              <p>
                For questions regarding these Terms of Service, please reach out to us at:
              </p>
              <p className="font-medium text-card-foreground">
                Email: <a href="mailto:support@subkit.io" className="text-brand-accent-foreground hover:underline">support@subkit.io</a>
              </p>
            </section>

          </div>
        </Container>
    </InteriorPageFrame>
  );
}
