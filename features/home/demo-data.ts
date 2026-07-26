import { LogEvent } from "@/features/home/model";

export const INITIAL_LOGS: LogEvent[] = [
  { id: 1, time: "12:04:15", event: "Event accepted", status: "success" },
  { id: 2, time: "12:04:12", event: "Delivery queued", status: "info" },
  { id: 3, time: "12:03:55", event: "State updated", status: "success" },
  { id: 4, time: "12:03:10", event: "Customer record linked", status: "success" },
];

export const NEW_EVENTS_POOL = [
  { event: "Event accepted", status: "success" as const },
  { event: "State transition recorded", status: "success" as const },
  { event: "Customer created", status: "info" as const },
  { event: "Delivery attempt queued", status: "info" as const },
  { event: "Duplicate event ignored", status: "info" as const },
  { event: "Projection refreshed", status: "success" as const },
];
