import { GradientMesh } from "@/components/visuals/gradient-mesh";
import { GridOverlay } from "@/components/visuals/grid-overlay";
import { cn } from "@/lib/utils";

interface InteriorPageFrameProps {
  children: React.ReactNode;
  backdrop?: "default" | "tall";
}

export function InteriorPageFrame({
  children,
  backdrop = "default",
}: InteriorPageFrameProps) {
  return (
    <>
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 -z-10 overflow-hidden",
          backdrop === "tall" ? "h-[700px]" : "h-[600px]"
        )}
      >
        <GradientMesh />
        <GridOverlay />
      </div>
      <main className="relative flex-1 pt-32 pb-24 md:pt-40 md:pb-32">
        {children}
      </main>
    </>
  );
}

