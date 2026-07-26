import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { InteriorPageFrame } from "@/components/layout/interior-page-frame";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "DPA Status - Subkit",
  description: "Current status of Subkit's future managed-service data processing terms.",
};

export default function DPAPage() {
  return (
    <InteriorPageFrame>
      <Container className="max-w-4xl px-4">
        <header className="mb-14 space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
            <FileText className="size-3.5" aria-hidden="true" />
            Drafting status · not an executed agreement
          </div>
          <h1 className="font-heading text-card-foreground text-4xl font-extrabold tracking-tight sm:text-5xl">
            Data Processing Terms
          </h1>
          <p className="text-foreground/80 mx-auto max-w-2xl text-sm sm:text-base">
            Subkit does not currently offer a production managed Cloud service or an executable Data Processing Addendum.
          </p>
        </header>

        <div className="space-y-8 rounded-2xl border border-slate-200/70 bg-white/80 p-8 text-sm leading-7 text-slate-700 shadow-xl shadow-slate-100/40 md:p-10">
          <section className="space-y-3">
            <h2 className="font-heading text-card-foreground text-2xl font-bold">Current position</h2>
            <p>
              This page is a transparency notice, not a contract. No statement here creates controller, processor, subprocessor, service-level, security, residency, or data-transfer obligations between Subkit and a visitor.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-card-foreground text-2xl font-bold">Before managed Cloud launches</h2>
            <p>Any future managed offering that processes customer personal data will require reviewed terms covering at least:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>the subject matter, duration, nature, and purpose of processing;</li>
              <li>documented controller instructions and processor obligations;</li>
              <li>security measures, incident notification, deletion, and return of data;</li>
              <li>subprocessors, hosting locations, and international transfer mechanisms;</li>
              <li>audit, assistance, and data-subject request procedures.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-card-foreground text-2xl font-bold">Self-hosted deployments</h2>
            <p>
              Self-hosting changes the technical and contractual relationship, but it does not by itself determine whether a DPA is required. Operators must evaluate all parties that process personal data in their complete deployment.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-card-foreground text-2xl font-bold">Contact</h2>
            <p>Questions about the planned contractual model can be sent to:</p>
            <a className="font-semibold text-primary hover:underline" href="mailto:compliance@subkit.eu">
              compliance@subkit.eu
            </a>
          </section>
        </div>
      </Container>
    </InteriorPageFrame>
  );
}
