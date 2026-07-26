import { Check, Code, Shield, Zap } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PRICING_CATALOG } from "@/features/pricing/temporary-catalog";

const ACTION_ICONS = {
  "self-hosted": Code,
  managed: Zap,
  enterprise: Shield,
} as const;

export function PricingPlans() {
  return (
    <section className="mx-auto mb-24 grid max-w-6xl grid-cols-1 items-stretch gap-8 md:grid-cols-3">
      {PRICING_CATALOG.plans.map((plan) => {
        const ActionIcon = ACTION_ICONS[plan.id];

        return (
          <article
            key={plan.id}
            className={cn(
              "flex flex-col justify-between rounded-2xl border p-8 transition-colors",
              plan.featured
                ? "bg-surface-inverse text-surface-inverse-foreground border-slate-800 shadow-2xl"
                : "border-slate-200/60 bg-white/85 shadow-xl shadow-slate-100/50 backdrop-blur-md hover:border-slate-300"
            )}
          >
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="font-heading text-lg font-bold">{plan.name}</h2>
                  {plan.featured ? (
                    <span className="bg-brand-accent/10 text-brand-accent border-brand-accent/20 rounded-full border px-2.5 py-1 font-mono text-[9px] font-bold uppercase">
                      Planned
                    </span>
                  ) : null}
                </div>
                <p className={cn("text-xs", plan.featured ? "text-slate-400" : "text-slate-500")}>
                  {plan.audience}
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className={cn("font-heading text-4xl font-extrabold", plan.featured && "text-brand-accent")}>
                  {plan.price}
                </span>
                <span className="font-mono text-[10px] font-semibold uppercase opacity-60">
                  {plan.cadence}
                </span>
              </div>
              <p className={cn("text-xs leading-relaxed", plan.featured ? "text-slate-300" : "text-slate-500")}>
                {plan.description}
              </p>
              <ul className={cn("space-y-3 border-t pt-4 text-xs", plan.featured ? "border-slate-800 text-slate-300" : "border-slate-100 text-slate-600")}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className={cn("size-4 stroke-[3]", plan.featured ? "text-brand-accent" : "text-emerald-500")} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={plan.action.href}
              target={plan.action.href.startsWith("http") ? "_blank" : undefined}
              rel={plan.action.href.startsWith("http") ? "noreferrer" : undefined}
              className={cn(
                buttonVariants({ variant: plan.featured ? "default" : "outline" }),
                "mt-8 flex w-full items-center justify-center gap-1 rounded-full py-5 text-xs font-bold",
                plan.featured && "bg-brand-accent hover:bg-brand-accent/90 text-slate-900"
              )}
            >
              <ActionIcon className="size-3.5" />
              {plan.action.label}
            </a>
          </article>
        );
      })}
    </section>
  );
}
