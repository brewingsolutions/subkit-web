export function InsightsGui() {
  return (
    <div className="shadow-technical hover:shadow-technical-hover group relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent -z-10" />

      {/* Real-time stats header */}
      <div className="grid grid-cols-3 gap-2 mb-6 text-left">
        <div className="p-3 rounded-xl border border-border bg-muted/30 font-sans">
          <span className="text-[9px] text-muted-foreground block uppercase font-bold">MRR</span>
          <span className="text-sm font-extrabold text-card-foreground mt-1 block">$14,250</span>
          <span className="text-[9px] text-emerald-600 font-bold">+12.4%</span>
        </div>
        <div className="p-3 rounded-xl border border-border bg-muted/30 font-sans">
          <span className="text-[9px] text-muted-foreground block uppercase font-bold">Churn</span>
          <span className="text-sm font-extrabold text-card-foreground mt-1 block">2.4%</span>
          <span className="text-[9px] text-emerald-600 font-bold">-0.8%</span>
        </div>
        <div className="p-3 rounded-xl border border-border bg-muted/30 font-sans">
          <span className="text-[9px] text-muted-foreground block uppercase font-bold">LTV</span>
          <span className="text-sm font-extrabold text-card-foreground mt-1 block">$84.20</span>
          <span className="text-[9px] text-emerald-600 font-bold">+4.2%</span>
        </div>
      </div>

      {/* Stylized Bar Chart */}
      <div className="space-y-3 pt-2 text-left">
        <span className="text-[10px] text-muted-foreground block uppercase tracking-wider font-bold font-sans">
          Monthly Revenue Distribution
        </span>
        <div className="flex items-end justify-between h-32 pt-4 px-2 bg-muted/20 rounded-xl border border-border">
          <div className="relative flex h-[40%] w-6 justify-center rounded-t bg-slate-200/50 transition-all duration-500 group-hover:h-[45%]">
            <div className="absolute bottom-0 w-full bg-primary/40 rounded-t h-[30%]" />
          </div>
          <div className="relative flex h-[60%] w-6 justify-center rounded-t bg-slate-200/50 transition-all duration-500 group-hover:h-[65%]">
            <div className="absolute bottom-0 w-full bg-primary/40 rounded-t h-[45%]" />
          </div>
          <div className="relative flex h-[50%] w-6 justify-center rounded-t bg-slate-200/50 transition-all duration-500 group-hover:h-[55%]">
            <div className="absolute bottom-0 w-full bg-primary/40 rounded-t h-[35%]" />
          </div>
          <div className="relative flex h-[80%] w-6 justify-center rounded-t bg-slate-200/50 transition-all duration-500 group-hover:h-[88%]">
            <div className="from-primary to-brand-highlight absolute bottom-0 h-[65%] w-full rounded-t bg-gradient-to-t" />
          </div>
        </div>
      </div>
    </div>
  );
}
