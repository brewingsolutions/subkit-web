export function GradientMesh() {
  return (
    <div className="absolute inset-x-0 top-0 -z-10 h-[650px] md:h-[750px] overflow-hidden -skew-y-6 origin-top-left bg-background">
      {/* Glow meshes */}
      <div className="absolute -top-40 -left-20 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="bg-brand-highlight/8 absolute top-1/4 right-0 size-[400px] rounded-full blur-[100px]" />
      <div className="bg-chart-2/8 absolute -top-20 left-1/3 size-[600px] rounded-full blur-[140px]" />
    </div>
  );
}
