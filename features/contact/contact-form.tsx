"use client";

import { useState } from "react";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

interface ContactResponse {
  error?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    name: "",
    message: "",
    website: "",
  });
  
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name || !formData.message) return;

    setStatus("submitting");
    setErrorMessage("");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json().catch(() => ({}))) as ContactResponse;

      if (!response.ok) {
        setErrorMessage(
          result.error ?? "An error occurred. Please try again later."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch (error) {
      console.error("Form submission failed:", error);
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="w-full max-w-xl mx-auto rounded-3xl border border-emerald-500/20 bg-card p-10 text-center space-y-6 animate-fade-in">
        <div className="mx-auto flex items-center justify-center size-16 rounded-full bg-emerald-500/10 text-emerald-500">
          <CheckCircle2 className="size-10 stroke-[1.8]" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-card-foreground font-heading">
            Message Sent!
          </h3>
          <p className="text-sm text-foreground leading-relaxed max-w-md mx-auto">
            Thank you, <strong className="text-card-foreground">{formData.name}</strong>. We&apos;ve received your inquiry and will be in touch with you shortly.
          </p>
        </div>
        <div className="pt-4">
          <Button
            onClick={() => {
              setFormData({ email: "", company: "", name: "", message: "", website: "" });
              setStatus("idle");
            }}
            variant="outline"
            className="rounded-full px-6 py-2 text-xs font-semibold"
          >
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto rounded-3xl border border-slate-200/80 bg-card p-8 md:p-10 relative overflow-hidden">
      
      {/* Visual background gradient mesh inside card */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/[0.01] to-transparent -z-10" />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="absolute -left-[10000px] top-auto size-px overflow-hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          />
        </div>
        {status === "error" ? (
          <p
            role="alert"
            className="rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive"
          >
            {errorMessage}
          </p>
        ) : null}

        {/* Email & Company - 2 Column grid on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wide">
              Work Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              maxLength={320}
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@company.com"
              className="w-full rounded-xl border border-slate-200 bg-background px-4 py-3 text-sm text-card-foreground placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-sans"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="company" className="text-xs font-bold text-slate-400 uppercase tracking-wide">
              Company name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              autoComplete="organization"
              maxLength={160}
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. Acme Corp"
              className="w-full rounded-xl border border-slate-200 bg-background px-4 py-3 text-sm text-card-foreground placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-sans"
            />
          </div>
        </div>

        {/* Your Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wide">
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            maxLength={120}
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Alex Carter"
            className="w-full rounded-xl border border-slate-200 bg-background px-4 py-3 text-sm text-card-foreground placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-sans"
          />
        </div>

        {/* Message / How can we help */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wide">
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            maxLength={5000}
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your project, platform, and in-app purchase requirements..."
            className="w-full rounded-xl border border-slate-200 bg-background px-4 py-3 text-sm text-card-foreground placeholder-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-y font-sans"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            disabled={status === "submitting"}
            className="w-full sm:w-auto rounded-full bg-primary hover:bg-primary/95 px-8 py-5 text-xs font-semibold text-white active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer font-sans"
          >
            {status === "submitting" ? (
              <>
                <span className="size-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Get in touch
                <ChevronRight className="size-3.5" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
