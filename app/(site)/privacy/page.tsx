import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { InteriorPageFrame } from "@/components/layout/interior-page-frame";

export const metadata: Metadata = {
  title: "Privacy Policy - Subkit",
  description: "Read our privacy policy to understand how Subkit collects, uses, and protects your data and user subscription insights.",
};

export default function PrivacyPage() {
  return (
    <InteriorPageFrame>
        <Container className="px-4 max-w-4xl">
          
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-card-foreground font-heading">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-foreground/80 max-w-xl mx-auto">
              Last updated: May 31, 2026. Please read this policy carefully to understand our practices regarding your information.
            </p>
            <div className="bg-brand-accent/60 mx-auto mt-4 h-0.5 w-16" />
          </div>

          {/* Policy Content */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 p-8 md:p-12 shadow-xl shadow-slate-100/50 text-slate-700 space-y-8 leading-relaxed">
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-card-foreground font-heading">1. Introduction</h2>
              <p>
                Welcome to Subkit. We are committed to protecting your personal data and respecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website or use our developer platform, SDKs, and associated subscription management services.
              </p>
              <p>
                By accessing or using our services, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-card-foreground font-heading">2. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, as well as data automatically generated when you interact with our platform.
              </p>
              <div className="border-brand-accent/30 space-y-3 border-l-2 pl-4">
                <p>
                  <strong>Account Information:</strong> When you register an account, we collect credentials such as your name, email address, company name, and billing details.
                </p>
                <p>
                  <strong>Developer & Integration Data:</strong> To provide our subscription insights, we process transaction data, subscription states, and platform-specific receipt identifiers (e.g., App Store or Google Play data) that you configure.
                </p>
                <p>
                  <strong>Usage Data:</strong> We automatically log information about your device, IP address, browser type, pages visited, and timestamps to optimize service performance and security.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-card-foreground font-heading">3. How We Use Your Information</h2>
              <p>
                We use the collected data for various purposes, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing, operating, and maintaining our platform and SDK services.</li>
                <li>Processing transactions, validating subscription statuses, and generating dashboard analytics.</li>
                <li>Improving our APIs, SDK performance, and overall user experience.</li>
                <li>Communicating with you regarding system updates, security alerts, and administrative messages.</li>
                <li>Ensuring compliance with legal obligations and protecting against fraudulent activity.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-card-foreground font-heading">4. Data Sharing & Third-Party Services</h2>
              <p>
                We do not sell your personal data. We only share information with trusted third-party service providers 
                who perform functions on our behalf (such as cloud hosting, payment processing, or database management), 
                subject to strict confidentiality and data protection agreements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-card-foreground font-heading">5. GDPR Compliance & Data Security</h2>
              <p>
                Subkit is being designed to support GDPR-aligned operation and EU data-residency choices. Actual compliance depends on the deployed service, configuration, contracts, and the responsibilities of each controller and processor. If you are located within the European Economic Area (EEA),
                you possess specific data protection rights, including the right to access, rectify, or erase the personal data we hold about you.
              </p>
              <p>
                We implement industry-standard administrative, technical, and physical security measures to protect your information 
                from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-card-foreground font-heading">6. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="font-medium text-card-foreground">
                Email: <a href="mailto:privacy@subkit.io" className="text-brand-accent-foreground hover:underline">privacy@subkit.io</a>
              </p>
            </section>

          </div>
        </Container>
    </InteriorPageFrame>
  );
}
