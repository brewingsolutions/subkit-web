"use client";

import { useState } from "react";
import { Info } from "lucide-react";
import { calculatePricingQuote } from "@/features/pricing/policy";

export function PricingCalculator() {
  const [revenue, setRevenue] = useState(30_000);
  const quote = calculatePricingQuote(revenue);

  return (
    <section className="relative mx-auto mb-20 max-w-4xl overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 p-8 shadow-xl shadow-slate-100/50 backdrop-blur-md md:p-12">
      <div className="from-primary/[0.01] absolute inset-0 -z-10 bg-gradient-to-tr to-transparent" />
      <header className="mx-auto mb-10 max-w-xl space-y-3 text-center">
        <h2 className="font-heading text-card-foreground text-2xl font-bold">
          Compare Estimated Costs
        </h2>
        <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
          This Pricing Quote is an estimate based on the temporary catalog and
          is not a final invoice or guaranteed charge.
        </p>
      </header>
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-7">
          <div className="flex items-center justify-between text-xs text-slate-700 sm:text-sm">
            <label htmlFor="monthly-revenue" className="font-mono font-semibold tracking-wider text-slate-400 uppercase">
              Monthly Revenue
            </label>
            <output htmlFor="monthly-revenue" className="font-heading text-card-foreground text-xl font-bold">
              ${quote.monthlyRevenue.toLocaleString("en-US")}
            </output>
          </div>
          <input
            id="monthly-revenue"
            type="range"
            min="5000"
            max="200000"
            step="5000"
            value={revenue}
            onChange={(event) => setRevenue(Number(event.target.value))}
            className="accent-brand-accent h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200"
          />
          <div className="flex gap-2 rounded-xl border bg-slate-50 p-4 text-[11px] text-slate-500 sm:text-xs">
            <Info className="text-brand-accent mt-0.5 size-4 shrink-0" />
            <p>Estimates use the local migration policy until Internal Services publishes the authoritative Pricing Catalog.</p>
          </div>
        </div>
        <dl className="space-y-4 lg:col-span-5">
          <CostRow label="Competitor estimate" value={quote.competitorEstimate} />
          <CostRow label="Subkit estimate" value={quote.subkitEstimate} positive />
          <CostRow label="Estimated monthly savings" value={quote.estimatedSavings} inverse />
        </dl>
      </div>
    </section>
  );
}

function CostRow({ label, value, positive = false, inverse = false }: { label: string; value: number; positive?: boolean; inverse?: boolean }) {
  return (
    <div className={inverse ? "bg-surface-inverse text-surface-inverse-foreground flex items-center justify-between rounded-xl border border-slate-800 p-4" : positive ? "flex items-center justify-between rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-emerald-800" : "flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-700"}>
      <dt className="text-xs font-semibold">{label}</dt>
      <dd className={inverse ? "text-brand-accent font-mono text-sm font-bold" : "font-mono text-sm font-bold"}>
        ${value.toLocaleString("en-US")} / mo
      </dd>
    </div>
  );
}

