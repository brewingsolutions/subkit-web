import type { StatusCondition } from "@/features/status/model";

export interface StatusPresentation {
  label: "Operational" | "Degraded" | "Outage" | "Unknown";
  tone: "success" | "warning" | "error" | "unknown";
}

const STATUS_PRESENTATION: Record<StatusCondition, StatusPresentation> = {
  operational: { label: "Operational", tone: "success" },
  degraded: { label: "Degraded", tone: "warning" },
  outage: { label: "Outage", tone: "error" },
  unknown: { label: "Unknown", tone: "unknown" },
};

export function getStatusPresentation(
  condition: StatusCondition
): StatusPresentation {
  return STATUS_PRESENTATION[condition];
}

