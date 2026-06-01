import { cn } from "@/lib/utils";

interface GridOverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "lines" | "dots";
}

export function GridOverlay({ className, variant = "lines" }: GridOverlayProps) {
  if (variant === "dots") {
    return (
      <div
        className={cn(
          "absolute inset-0 -z-10 bg-[radial-gradient(var(--color-border)_1.5px,transparent_1.5px)] bg-[size:32px_32px] opacity-70",
          className
        )}
      />
    );
  }

  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 bg-[linear-gradient(rgba(99,91,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(99,91,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] opacity-80",
        className
      )}
    />
  );
}
