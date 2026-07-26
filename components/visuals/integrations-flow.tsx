export function IntegrationsFlow() {
  return (
    <div className="shadow-technical hover:shadow-technical-hover group relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/5 to-transparent -z-10" />

      {/* Central node and outgoing flow animations */}
      <div className="flex flex-col items-center justify-center min-h-[160px] relative">
        
        {/* Central Node */}
        <div className="from-blue-500 via-primary to-brand-highlight z-10 flex size-16 animate-pulse items-center justify-center rounded-2xl bg-gradient-to-br font-mono text-xs font-bold text-white shadow-lg shadow-primary/10">
          Core
        </div>

        {/* Floating integrations icons/badges */}
        <div className="shadow-chip absolute top-2 left-6 flex items-center gap-1.5 rounded-xl border border-border bg-card p-2 font-sans text-xs font-semibold text-card-foreground transition-transform hover:scale-105">
          <span className="size-2 rounded-full bg-emerald-400" />
          Stripe
        </div>
        
        <div className="shadow-chip absolute right-4 bottom-2 flex items-center gap-1.5 rounded-xl border border-border bg-card p-2 font-sans text-xs font-semibold text-card-foreground transition-transform hover:scale-105">
          <span className="bg-brand-highlight size-2 rounded-full" />
          Slack
        </div>

        <div className="shadow-chip absolute top-4 right-8 flex items-center gap-1.5 rounded-xl border border-border bg-card p-2 font-sans text-xs font-semibold text-card-foreground transition-transform hover:scale-105">
          <span className="size-2 rounded-full bg-amber-400" />
          Adjust
        </div>

        <div className="shadow-chip absolute bottom-4 left-4 flex items-center gap-1.5 rounded-xl border border-border bg-card p-2 font-sans text-xs font-semibold text-card-foreground transition-transform hover:scale-105">
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
