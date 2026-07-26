import { Hero } from "@/features/home/hero";
import { Benefits } from "@/features/home/benefits";
import { Features } from "@/features/home/features";
import { Comparison } from "@/features/home/comparison";
import { RoadmapBanner } from "@/features/home/roadmap-banner";
import { Faq } from "@/features/home/faq";
// import { Testimonials } from "@/features/home/testimonials";

export default function Home() {
  return (
    <main className="flex-1 pt-16">
      <Hero />
      <Benefits />
      <Features />
      <Comparison />
      <RoadmapBanner />
      <Faq />
      {/* <Testimonials /> */}
    </main>
  );
}
