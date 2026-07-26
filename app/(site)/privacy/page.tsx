import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { InteriorPageFrame } from "@/components/layout/interior-page-frame";

export const metadata: Metadata = {
  title: "Privacy Notice - Subkit",
  description: "Privacy information for the Subkit public website and contact form.",
};

export default function PrivacyPage() {
  return (
    <InteriorPageFrame>
      <Container className="max-w-4xl px-4">
        <header className="mb-14 space-y-4 text-center">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">Website notice</span>
          <h1 className="font-heading text-card-foreground text-4xl font-extrabold tracking-tight sm:text-5xl">Privacy Notice</h1>
          <p className="text-foreground/80 mx-auto max-w-2xl text-sm sm:text-base">
            This notice covers the current public website and contact form. It does not describe a future managed Subkit Cloud service.
          </p>
        </header>

        <div className="space-y-8 rounded-2xl border border-slate-200/70 bg-white/80 p-8 text-sm leading-7 text-slate-700 md:p-10">
          <section className="space-y-3">
            <h2 className="font-heading text-card-foreground text-2xl font-bold">Information you submit</h2>
            <p>
              If you use the contact form, Subkit receives the name, email address, optional organization name, and message you provide. Use the form only for project enquiries and do not submit store credentials, customer records, payment information, or other sensitive data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-card-foreground text-2xl font-bold">Technical processing</h2>
            <p>
              Hosting and delivery providers may process ordinary request metadata such as IP address, user agent, requested URL, timestamps, and security events to deliver and protect the website. This notice will be updated before additional analytics or tracking tools are introduced.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-card-foreground text-2xl font-bold">How information is used</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>to respond to enquiries and collaboration requests;</li>
              <li>to operate, secure, and diagnose the public website;</li>
              <li>to prevent spam, abuse, and unauthorized access;</li>
              <li>to meet applicable legal obligations.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-card-foreground text-2xl font-bold">Retention and rights</h2>
            <p>
              Contact information should be retained only as long as reasonably needed to handle the enquiry, maintain necessary records, or meet legal obligations. Applicable access, correction, deletion, restriction, objection, and complaint rights depend on the processing context and governing law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-card-foreground text-2xl font-bold">Contact</h2>
            <p>This early notice will evolve with the product and legal operating structure. Privacy questions can be sent to:</p>
            <a className="font-semibold text-primary hover:underline" href="mailto:privacy@subkit.eu">privacy@subkit.eu</a>
          </section>
        </div>
      </Container>
    </InteriorPageFrame>
  );
}
