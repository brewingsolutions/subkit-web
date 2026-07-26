import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { InteriorPageFrame } from "@/components/layout/interior-page-frame";
import { RoadmapView } from "@/features/roadmap/roadmap-view";
import { TEMPORARY_ROADMAP } from "@/features/roadmap/temporary-roadmap";

export const metadata: Metadata = {
  title: "Roadmap - Subkit",
  description:
    "Follow the published direction and current state of planned Subkit product capabilities.",
};

export default function RoadmapPage() {
  return (
    <InteriorPageFrame>
      <Container className="max-w-5xl px-4">
        <header className="mx-auto mb-16 max-w-3xl space-y-5 text-center">
          <span className="text-brand-accent font-mono text-[10px] font-bold tracking-widest uppercase">
            Product Direction
          </span>
          <h1 className="font-heading text-card-foreground text-4xl font-extrabold tracking-tight sm:text-5xl">
            Subkit <span className="text-brand-accent">Roadmap</span>
          </h1>
          <p className="text-foreground/80 mx-auto max-w-xl text-sm sm:text-base">
            Planned capabilities communicate direction, not guaranteed delivery
            dates. Published state will move to Internal Services.
          </p>
          <div className="bg-brand-accent/60 mx-auto h-0.5 w-24" />
          <p className="font-mono text-[10px] text-slate-400">
            Temporary roadmap · last reviewed {TEMPORARY_ROADMAP.reviewedAt}
          </p>
        </header>
        <RoadmapView roadmap={TEMPORARY_ROADMAP} />
      </Container>
    </InteriorPageFrame>
  );
}
