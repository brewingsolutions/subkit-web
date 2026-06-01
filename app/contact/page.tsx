import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/marketing/contact-form";
import { Container } from "@/components/layout/container";
import { GradientMesh } from "@/components/visuals/gradient-mesh";
import { GridOverlay } from "@/components/visuals/grid-overlay";

export const metadata: Metadata = {
  title: "Contact Us - Subkit",
  description: "Get in touch with the Subkit team for open-source self-hosting support or managed cloud inquiries.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f6f9fc] relative">
      <Navbar />
      
      {/* Mesh and Grid overlays in the background */}
      <div className="absolute inset-x-0 top-0 h-[600px] overflow-hidden -z-10 pointer-events-none">
        <GradientMesh />
        <GridOverlay />
      </div>

      <main className="flex-1 pt-32 pb-24 md:pt-40 md:pb-32 relative">
        <Container className="px-4">
          
          {/* Header Text matching the requested mockup */}
          <div className="mx-auto max-w-2xl text-center mb-12 space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-card-foreground font-heading">
              Contact Us
            </h1>
            <p className="text-sm sm:text-base leading-relaxed text-foreground max-w-xl mx-auto">
              Fill out the form below and we'll put you in touch with the right team. For technical support head over to our{" "}
              <a 
                href="#help" 
                className="text-[#00c9db] hover:text-[#00c9db]/90 font-semibold underline underline-offset-4 transition-colors"
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
      </main>

      <Footer />
    </div>
  );
}
