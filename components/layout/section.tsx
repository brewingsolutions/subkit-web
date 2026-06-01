import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  gridOverlay?: boolean;
  borderTop?: boolean;
}

export function Section({
  className,
  as: Component = "section",
  gridOverlay = false,
  borderTop = false,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        "relative overflow-hidden py-20 lg:py-32 bg-background text-foreground",
        borderTop && "border-t border-slate-200/60 dark:border-border",
        className
      )}
      {...props}
    >
      {gridOverlay && (
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(var(--color-border)_1.5px,transparent_1.5px)] bg-[size:32px_32px] opacity-70" />
      )}
      {children}
    </Component>
  );
}
