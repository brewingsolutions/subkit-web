import { Badge } from "@/components/ui/badge";

export function IntegrationsFlow() {
  return (
    <div className="relative w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-[0_15px_35px_rgba(50,50,93,0.03),0_5px_15px_rgba(0,0,0,0.02)] overflow-hidden group transition-all duration-300 hover:shadow-[0_20px_40px_rgba(99,91,255,0.06)] dark:hover:border-primary/20">
      <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/5 to-transparent -z-10" />

      {/* Central node and outgoing flow animations */}
      <div className="flex flex-col items-center justify-center min-h-[160px] relative">
        
        {/* Central Node */}
        <div className="size-16 rounded-2xl bg-gradient-to-br from-blue-500 via-primary to-[#ec72e2] flex items-center justify-center shadow-lg shadow-primary/10 text-white font-bold text-xs z-10 animate-pulse font-mono">
          Core
        </div>

        {/* Floating integrations icons/badges */}
        <div className="absolute top-2 left-6 p-2 rounded-xl bg-card border border-border text-xs text-card-foreground font-semibold flex items-center gap-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:scale-105 transition-transform font-sans">
          <span className="size-2 rounded-full bg-emerald-400" />
          Stripe
        </div>
        
        <div className="absolute bottom-2 right-4 p-2 rounded-xl bg-card border border-border text-xs text-card-foreground font-semibold flex items-center gap-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:scale-105 transition-transform font-sans">
          <span className="size-2 rounded-full bg-[#ec72e2]" />
          Slack
        </div>

        <div className="absolute top-4 right-8 p-2 rounded-xl bg-card border border-border text-xs text-card-foreground font-semibold flex items-center gap-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:scale-105 transition-transform font-sans">
          <span className="size-2 rounded-full bg-amber-400" />
          Adjust
        </div>

        <div className="absolute bottom-4 left-4 p-2 rounded-xl bg-card border border-border text-xs text-card-foreground font-semibold flex items-center gap-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:scale-105 transition-transform font-sans">
          <span className="size-2 rounded-full bg-blue-400" />
          Webhooks
        </div>

        {/* Decorative connection lines */}
        <svg className="absolute inset-0 size-full -z-10" fill="none">
          <path d="M 50 50 L 150 150" stroke="var(--color-border)" strokeWidth="2" className="opacity-50" />
          <path d="M 250 50 L 150 150" stroke="var(--color-border)" strokeWidth="2" className="opacity-50" />
          <path d="M 50 250 L 150 150" stroke="var(--color-border)" strokeWidth="2" className="opacity-50" />
          <path d="M 250 250 L 150 150" stroke="var(--color-border)" strokeWidth="2" className="opacity-50" />
        </svg>

      </div>
    </div>
  );
}
