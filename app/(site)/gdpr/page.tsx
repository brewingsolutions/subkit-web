import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { InteriorPageFrame } from "@/components/layout/interior-page-frame";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy & Data Control - Subkit",
  description: "Understand Subkit's privacy goals, self-hosting boundaries, and current pre-alpha limitations.",
};

export default function GDPRPage() {
  return (
    <InteriorPageFrame>
      <Container className="max-w-4xl px-4">
        <header className="mb-14 space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/50 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
            <ShieldCheck className="size-3.5" aria-hidden="true" />
            Privacy goals and operator responsibilities
          </div>
          <h1 className="font-heading text-card-foreground text-4xl font-extrabold tracking-tight sm:text-5xl">
            Privacy & Data Control
          </h1>
          <p className="text-foreground/80 mx-auto max-w-2xl text-sm sm:text-base">
            Subkit is being designed to support portable deployment and data minimization. It is pre-alpha software, not a compliance certification or legal service.
          </p>
        </header>

        <div className="space-y-8 rounded-2xl border border-slate-200/70 bg-white/80 p-8 text-sm leading-7 text-slate-700 shadow-xl shadow-slate-100/40 md:p-10">
          <section className="space-y-3">
            <h2 className="font-heading text-card-foreground text-2xl font-bold">What self-hosting can change</h2>
            <p>
              A self-hosted deployment can give an operator more control over infrastructure, data location, retention, access, and subprocessors. It can reduce reliance on a managed subscription platform, but it does not automatically establish GDPR compliance or remove every third party from an application&apos;s data flow.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-card-foreground text-2xl font-bold">Operator responsibilities</h2>
            <p>
              Operators remain responsible for determining controller and processor roles, lawful bases, security measures, retention periods, data-subject rights, incident handling, and required contracts. App stores, hosting providers, email services, analytics tools, and other integrations may still process personal data independently.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-card-foreground text-2xl font-bold">Managed Cloud status</h2>
            <p>
              Subkit Cloud is planned and is not currently offered as a production subscription-processing service. Hosting regions, subprocessors, retention rules, security commitments, and contractual documents will be published before customer data is accepted.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-card-foreground text-2xl font-bold">No legal guarantee</h2>
            <p>
              This page describes product direction for general information and is not legal advice. Organizations should assess their own deployment and obligations with qualified privacy or legal counsel.
            </p>
            <a className="font-semibold text-primary hover:underline" href="mailto:privacy@subkit.eu">
              privacy@subkit.eu
            </a>
          </section>
        </div>
      </Container>
    </InteriorPageFrame>
  );
}
