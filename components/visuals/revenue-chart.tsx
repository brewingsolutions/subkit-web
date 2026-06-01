export function RevenueChart() {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="text-slate-400">Monthly Recurring Revenue (MRR)</span>
        <span className="font-bold text-white font-mono">$14,250.00</span>
      </div>
      
      {/* SVG Chart */}
      <div className="h-28 w-full bg-slate-950/50 rounded-xl border border-white/5 p-2 overflow-hidden relative">
        <svg className="size-full" viewBox="0 0 100 30" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Area Fill */}
          <path
            d="M 0 30 L 0 25 Q 20 20 40 15 T 80 5 L 100 2 L 100 30 Z"
            fill="url(#chartGradient)"
          />
          {/* Glow Line */}
          <path
            d="M 0 25 Q 20 20 40 15 T 80 5 L 100 2"
            fill="none"
            stroke="#00d4ff"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="animate-pulse"
          />
        </svg>
      </div>
    </div>
  );
}
