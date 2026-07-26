import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { InteriorPageFrame } from "@/components/layout/interior-page-frame";
import { DocsExperience } from "@/features/docs/docs-experience";

export const metadata: Metadata = {
  title: "Documentation & API - Subkit",
  description:
    "Integrate Subkit SDKs, explore the public REST contract, and review current system availability.",
};

export default function DocsPage() {
  return (
    <InteriorPageFrame>
      <Container className="px-4">
        <header className="mb-12 space-y-4 text-center">
          <span className="text-brand-accent font-mono text-[10px] font-bold tracking-widest uppercase">
            Developer Portal
          </span>
          <h1 className="font-heading text-card-foreground text-4xl font-extrabold tracking-tight sm:text-5xl">
            Documentation & API
          </h1>
          <p className="text-foreground/80 mx-auto max-w-xl text-sm sm:text-base">
            Integrate Subkit SDKs, follow the public REST contract, and check
            current system availability.
          </p>
          <div className="bg-brand-accent/60 mx-auto mt-4 h-0.5 w-16" />
        </header>
        <DocsExperience />
      </Container>
    </InteriorPageFrame>
  );
}
