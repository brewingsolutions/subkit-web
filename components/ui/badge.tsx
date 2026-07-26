import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-sm transition-all duration-200 select-none cursor-default",
  {
    variants: {
      variant: {
        default: "border-border bg-background text-foreground",
        primary: "border-primary/20 bg-primary/5 text-primary shadow-brand",
        success: "border-emerald-500/20 bg-emerald-500/10 text-emerald-600",
        blue: "border-blue-500/20 bg-blue-500/5 text-blue-600",
        purple: "border-purple-500/20 bg-purple-500/5 text-purple-600",
        indigo: "border-indigo-500/20 bg-indigo-500/5 text-indigo-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, className }))} {...props}>
      {children}
    </div>
  );
}
