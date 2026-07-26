import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  color: string;
  textGlow: string;
  bgAccent: string;
}

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial, className, ...props }: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "shadow-float group relative flex flex-col justify-between rounded-2xl border bg-card p-8 transition-all duration-500 hover:-translate-y-1",
        testimonial.color,
        className
      )}
      {...props}
    >
      {/* Dynamic Background Glow Layer */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br to-transparent -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          testimonial.bgAccent
        )}
      />

      {/* Quote Icon & Body Content */}
      <div>
        <Quote className={cn("size-8 mb-6 opacity-20 transition-all duration-300 group-hover:opacity-30", testimonial.textGlow)} />
        <p className="text-sm leading-relaxed text-foreground font-medium">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      {/* Profile & Action Indicator Footer */}
      <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-bold text-card-foreground">
            {testimonial.author}
          </h4>
          <p className="text-[11px] text-slate-400 font-semibold">
            {testimonial.company}
          </p>
        </div>
        <span
          className={cn(
            "text-[10px] font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300",
            testimonial.textGlow
          )}
        >
          Read Story &rarr;
        </span>
      </div>
    </div>
  );
}
