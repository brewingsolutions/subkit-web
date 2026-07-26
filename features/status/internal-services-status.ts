import {
  UNKNOWN_SYSTEM_STATUS,
  type StatusCondition,
  type SystemStatusSnapshot,
} from "@/features/status/model";

interface InternalStatusResponse {
  condition: string;
  message: string;
  checkedAt: string;
  capabilities: ReadonlyArray<{
    id: "api" | "dashboard" | "events";
    name: string;
    condition: string;
    message: string;
  }>;
}

const CONDITION_MAP: Record<string, StatusCondition> = {
  Operational: "operational",
  Degraded: "degraded",
  Outage: "outage",
  Unknown: "unknown",
};

export function mapInternalStatus(
  response: InternalStatusResponse
): SystemStatusSnapshot {
  return {
    condition: CONDITION_MAP[response.condition] ?? "unknown",
    checkedAt: response.checkedAt,
    message: response.message,
    capabilities: response.capabilities.map((capability) => ({
      id: capability.id,
      name: capability.name,
      condition: CONDITION_MAP[capability.condition] ?? "unknown",
      message: capability.message,
    })),
  };
}

export async function getSystemStatus(): Promise<SystemStatusSnapshot> {
  const baseUrl = process.env.INTERNAL_SERVICES_URL;

  if (!baseUrl) {
    return UNKNOWN_SYSTEM_STATUS;
  }

  try {
    const response = await fetch(`${baseUrl.replace(/\/$/, "")}/v1/status`, {
      cache: "no-store",
      signal: AbortSignal.timeout(3_000),
    });

    if (!response.ok) {
      return UNKNOWN_SYSTEM_STATUS;
    }

    return mapInternalStatus((await response.json()) as InternalStatusResponse);
  } catch {
    return UNKNOWN_SYSTEM_STATUS;
  }
}
