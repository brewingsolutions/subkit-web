"use client";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { TestimonialCard } from "./testimonial-card";
import { TESTIMONIALS_DATA, CLIENT_LOGOS } from "@/features/home/demo-data";

export function Testimonials() {
  return (
    <Section borderTop id="testimonials" className="relative">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[500px] w-[500px] rounded-full bg-primary/[0.02] blur-3xl" />

      <Container>
        
        {/* Social Proof Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary block font-mono">
            You&apos;re in good company
          </span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-4xl text-card-foreground font-heading">
            Join thousands of apps using Subkit
          </h2>
          <div className="mx-auto mt-4 h-[1px] w-16 bg-slate-200" />
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center mb-24 max-w-5xl mx-auto">
          {CLIENT_LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center h-12 w-28 rounded-xl border border-slate-200 bg-card hover:bg-slate-50 hover:border-slate-350 transition-all duration-300 group cursor-default shadow-sm"
            >
              <span className="text-xs font-bold text-slate-400 group-hover:text-card-foreground transition-colors uppercase tracking-wider">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {TESTIMONIALS_DATA.map((t) => (
            <TestimonialCard
              key={t.author}
              testimonial={t}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}
