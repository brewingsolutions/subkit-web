import { Calendar, Check } from "lucide-react";
import type { RoadmapSnapshot } from "@/features/roadmap/model";

interface RoadmapViewProps {
  roadmap: RoadmapSnapshot;
}

export function RoadmapView({ roadmap }: RoadmapViewProps) {
  return (
    <section className="relative mx-auto max-w-4xl space-y-8 before:absolute before:top-3 before:bottom-3 before:left-4 before:w-px before:bg-slate-200 md:before:left-1/2">
      {roadmap.phases.map((phase, index) => (
        <article
          key={phase.id}
          className="relative grid gap-6 pl-12 md:grid-cols-2 md:pl-0"
        >
          <span className="bg-background border-brand-accent absolute top-1 left-1.5 z-10 size-5 rounded-full border-4 md:left-1/2 md:-translate-x-1/2" />
          <div className={index % 2 === 0 ? "md:pr-10" : "md:order-2 md:pl-10"}>
            <div className="rounded-2xl border border-slate-200/70 bg-white/85 p-7 shadow-lg shadow-slate-100/60 backdrop-blur-md">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <span className="text-brand-accent font-mono text-xs font-bold tracking-widest uppercase">
                  {phase.label}
                </span>
                <span className={phase.status === "in-progress" ? "rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold text-emerald-700" : "rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-[10px] font-bold text-blue-700"}>
                  {phase.status === "in-progress" ? "In Progress" : "Planned"}
                </span>
              </div>
              <h2 className="font-heading text-card-foreground text-xl font-bold">
                {phase.title}
              </h2>
              <p className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                <Calendar className="size-3.5" /> {phase.timeline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                {phase.description}
              </p>
              <ul className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-xs text-slate-600">
                {phase.capabilities.map((capability) => (
                  <li key={capability} className="flex gap-2">
                    <Check className="text-brand-accent mt-0.5 size-3.5 shrink-0" />
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={index % 2 === 0 ? "hidden md:block" : "hidden md:order-1 md:block"} />
        </article>
      ))}
    </section>
  );
}

