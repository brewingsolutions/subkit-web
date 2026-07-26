import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { InteriorPageFrame } from "@/components/layout/interior-page-frame";

export const metadata: Metadata = {
  title: "Website Terms - Subkit",
  description: "Terms for using the Subkit public website and pre-alpha project materials.",
};

export default function TermsPage() {
  return (
    <InteriorPageFrame>
      <Container className="max-w-4xl px-4">
        <header className="mb-14 space-y-4 text-center">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Pre-alpha project</span>
          <h1 className="font-heading text-card-foreground text-4xl font-extrabold tracking-tight sm:text-5xl">Website Terms</h1>
          <p className="text-foreground/80 mx-auto max-w-2xl text-sm sm:text-base">
            These terms cover the public website and project materials. They are not managed Cloud service terms or an uptime agreement.
          </p>
        </header>

        <div className="space-y-8 rounded-2xl border border-slate-200/70 bg-white/80 p-8 text-sm leading-7 text-slate-700 md:p-10">
          <section className="space-y-3">
            <h2 className="font-heading text-card-foreground text-2xl font-bold">Project status</h2>
            <p>
              Subkit is under active pre-alpha development. Documentation, interfaces, roadmap items, pricing previews, deployment behavior, and availability may change. Do not rely on the project for production subscription, entitlement, billing, or compliance decisions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-card-foreground text-2xl font-bold">Open-source software</h2>
            <p>
              Source-code use is governed by the license in each repository, including Apache-2.0 where stated. Website access does not override those licenses or grant rights to third-party names, logos, services, or content.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-card-foreground text-2xl font-bold">Roadmap and pricing</h2>
            <p>
              Roadmap dates, managed-service descriptions, and pricing are non-binding planning information. They are not offers, guarantees, service levels, or commitments to deliver a capability on a particular date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-card-foreground text-2xl font-bold">Responsible use</h2>
            <p>
              Do not attempt to disrupt the website, bypass access controls, submit unlawful content, probe systems without authorization, or send secrets or third-party personal data through the contact form.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-card-foreground text-2xl font-bold">Contact</h2>
            <p>Questions about these website terms can be sent to:</p>
            <a className="font-semibold text-primary hover:underline" href="mailto:legal@subkit.eu">legal@subkit.eu</a>
          </section>
        </div>
      </Container>
    </InteriorPageFrame>
  );
}
