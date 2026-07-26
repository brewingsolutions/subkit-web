import type { Metadata } from "next";
import { ContactForm } from "@/features/contact/contact-form";
import { Container } from "@/components/layout/container";
import { InteriorPageFrame } from "@/components/layout/interior-page-frame";

export const metadata: Metadata = {
  title: "Contact Us - Subkit",
  description: "Get in touch with the Subkit team for open-source self-hosting support or managed cloud inquiries.",
};

export default function ContactPage() {
  return (
    <InteriorPageFrame>
        <Container className="px-4">
          
          {/* Header Text matching the requested mockup */}
          <div className="mx-auto max-w-2xl text-center mb-12 space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-card-foreground font-heading">
              Contact Us
            </h1>
            <p className="text-sm sm:text-base leading-relaxed text-foreground max-w-xl mx-auto">
              Fill out the form below and we&apos;ll put you in touch with the right team. For technical support head over to our{" "}
              <a 
                href="#help" 
                className="text-brand-accent-foreground font-semibold underline underline-offset-4 transition-colors hover:opacity-80"
              >
                Help Center
              </a>
              .
            </p>
            <div className="mx-auto mt-4 h-[2px] w-16 bg-primary/40" />
          </div>

          {/* Interactive Form Component */}
          <div className="animate-fade-in">
            <ContactForm />
          </div>

        </Container>
    </InteriorPageFrame>
  );
}
