import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/marketing/hero";
import { Benefits } from "@/components/marketing/benefits";
import { Features } from "@/components/marketing/features";
import { Comparison } from "@/components/marketing/comparison";
import { RoadmapBanner } from "@/components/marketing/roadmap-banner";
import { Faq } from "@/components/marketing/faq";
// import { Testimonials } from "@/components/marketing/testimonials";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f6f9fc]">
      <Navbar />
      <main className="flex-1 pt-16">
        <Hero />
        <Benefits />
        <Features />
        <Comparison />
        <RoadmapBanner />
        <Faq />
        {/* <Testimonials /> */}
      </main>
      <Footer />
    </div>
  );
}
