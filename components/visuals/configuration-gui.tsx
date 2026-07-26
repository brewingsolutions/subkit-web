import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export function ConfigurationGui() {
  const [price, setPrice] = useState(9.99);

  return (
    <div className="shadow-technical hover:shadow-technical-hover group relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent -z-10" />
      
      <div className="flex items-center justify-between pb-4 border-b border-border mb-6">
        <span className="text-xs font-bold text-card-foreground font-sans">Product Configuration</span>
        <Badge variant="success">Active</Badge>
      </div>

      {/* Form Fields */}
      <div className="space-y-4 text-left font-sans">
        <div>
          <label className="text-[9px] text-muted-foreground block mb-1.5 uppercase tracking-wider font-bold">
            Product Identifier (App Store)
          </label>
          <div className="px-3.5 py-2.5 rounded-lg border border-border bg-muted/30 font-mono text-xs text-card-foreground">
            com.subkit.pro.monthly
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[9px] text-muted-foreground block mb-1.5 uppercase tracking-wider font-bold">
              Subscription Type
            </label>
            <div className="px-3 py-2.5 rounded-lg border border-border bg-muted/30 text-xs text-card-foreground font-semibold">
              Monthly Recurring
            </div>
          </div>
          <div>
            <label className="text-[9px] text-muted-foreground block mb-1.5 uppercase tracking-wider font-bold">
              Trial Period
            </label>
            <div className="px-3 py-2.5 rounded-lg border border-border bg-muted/30 text-xs text-card-foreground font-semibold">
              7 Days Free
            </div>
          </div>
        </div>

        {/* Interactive slider mockup to wow user */}
        <div className="pt-2">
          <div className="flex justify-between text-xs text-foreground mb-2 font-medium">
            <span>Pricing ($)</span>
            <span className="font-bold text-card-foreground">${price.toFixed(2)} / mo</span>
          </div>
          <div className="relative group/slider flex items-center h-6">
            <input
              type="range"
              min="0.99"
              max="99.99"
              step="1"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
              className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-slate-100 accent-primary focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
