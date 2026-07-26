import { Activity, AlertCircle, CircleX, TriangleAlert } from "lucide-react";
import type { SystemStatusSnapshot } from "@/features/status/model";
import { getStatusPresentation } from "@/features/status/presentation";
import { cn } from "@/lib/utils";

const TONE_STYLES = {
  success: "border-emerald-500/20 bg-emerald-500/10 text-emerald-700",
  warning: "border-amber-500/20 bg-amber-500/10 text-amber-700",
  error: "border-red-500/20 bg-red-500/10 text-red-700",
  unknown: "border-amber-500/20 bg-amber-500/10 text-amber-700",
} as const;

const MESSAGE_STYLES = {
  success: "border-emerald-500/20 bg-emerald-50 text-emerald-900",
  warning: "border-amber-500/20 bg-amber-50 text-amber-900",
  error: "border-red-500/20 bg-red-50 text-red-900",
  unknown: "border-amber-500/20 bg-amber-50 text-amber-900",
} as const;

const TONE_TEXT_STYLES = {
  success: "text-emerald-700",
  warning: "text-amber-700",
  error: "text-red-700",
  unknown: "text-amber-700",
} as const;

const TONE_ICONS = {
  success: Activity,
  warning: TriangleAlert,
  error: CircleX,
  unknown: AlertCircle,
} as const;

export function SystemStatusPanel({ status }: { status: SystemStatusSnapshot }) {
  const presentation = getStatusPresentation(status.condition);
  const StatusIcon = TONE_ICONS[presentation.tone];

  return (
    <section className="animate-fade-in space-y-8 p-6 md:p-10">
      <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-center">
        <div className="space-y-1">
          <h2 className="font-heading text-card-foreground text-lg font-bold">
            System Status
          </h2>
          <p className="text-xs text-slate-500">
            Reported availability from Subkit Internal Services.
          </p>
        </div>
        <div className={cn("flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold", TONE_STYLES[presentation.tone])}>
          <StatusIcon className="size-4" />
          {presentation.label}
        </div>
      </div>
      <div className={cn("rounded-xl border p-6 text-sm leading-relaxed", MESSAGE_STYLES[presentation.tone])}>
        {status.message}
      </div>
      <div className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
        {status.capabilities.map((capability) => {
          const capabilityPresentation = getStatusPresentation(
            capability.condition
          );
          const CapabilityIcon = TONE_ICONS[capabilityPresentation.tone];

          return (
            <div
              key={capability.id}
              className="flex items-center justify-between gap-4 px-5 py-4"
            >
              <div>
                <p className="text-card-foreground text-sm font-semibold">
                  {capability.name}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {capability.message}
                </p>
              </div>
              <div
                className={cn(
                  "flex shrink-0 items-center gap-2 text-xs font-semibold",
                  TONE_TEXT_STYLES[capabilityPresentation.tone]
                )}
              >
                <CapabilityIcon className="size-4" />
                {capabilityPresentation.label}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
