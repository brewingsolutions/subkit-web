export type StatusCondition =
  | "operational"
  | "degraded"
  | "outage"
  | "unknown";

export interface SystemStatusSnapshot {
  condition: StatusCondition;
  checkedAt: string | null;
  message: string;
  capabilities: ReadonlyArray<{
    id: "api" | "dashboard" | "events";
    name: string;
    condition: StatusCondition;
    message: string;
  }>;
}

export const UNKNOWN_SYSTEM_STATUS: SystemStatusSnapshot = {
  condition: "unknown",
  checkedAt: null,
  message:
    "Current system availability cannot be verified until the authoritative status source is connected.",
  capabilities: [
    { id: "api", name: "API", condition: "unknown", message: "Availability could not be verified." },
    { id: "dashboard", name: "Dashboard", condition: "unknown", message: "Availability could not be verified." },
    { id: "events", name: "Events", condition: "unknown", message: "Availability could not be verified." },
  ],
};
