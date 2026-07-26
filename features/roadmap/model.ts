export type RoadmapPhaseStatus = "in-progress" | "planned";

export interface RoadmapPhase {
  id: string;
  label: string;
  title: string;
  timeline: string;
  status: RoadmapPhaseStatus;
  description: string;
  capabilities: ReadonlyArray<string>;
}

export interface RoadmapSnapshot {
  source: "temporary-local";
  reviewedAt: string;
  phases: ReadonlyArray<RoadmapPhase>;
}

