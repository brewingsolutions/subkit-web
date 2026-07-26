import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const ROWS = [
  {
    capability: "Operating model",
    subkit: "Self-hosted Core foundation; managed Cloud planned",
    revenueCat: "Managed service",
    adapty: "Managed service",
    superwall: "Managed service",
  },
  {
    capability: "Self-hosted backend",
    subkit: "Apache-2.0 Core (pre-alpha)",
    revenueCat: "Not offered in public product documentation",
    adapty: "Not offered in public product documentation",
    superwall: "Not offered in public product documentation",
  },
  {
    capability: "Apple receipt validation",
    subkit: "Planned",
    revenueCat: "Available",
    adapty: "Available",
    superwall: "Available",
  },
  {
    capability: "Google Play validation",
    subkit: "Planned",
    revenueCat: "Available",
    adapty: "Available",
    superwall: "Available",
  },
  {
    capability: "Client SDKs",
    subkit: "Swift, Kotlin, Flutter, and React Native planned",
    revenueCat: "Available",
    adapty: "Available",
    superwall: "Available",
  },
  {
    capability: "Customer details / CRM view",
    subkit: "Planned dashboard with identity, entitlement, and event history",
    revenueCat: "Available",
    adapty: "Available",
    superwall: "Available",
  },
  {
    capability: "Subscription analytics",
    subkit: "Revenue, churn, retention, and cohort analytics planned",
    revenueCat: "Available",
    adapty: "Available",
    superwall: "Available",
  },
  {
    capability: "LTV tracking",
    subkit: "Realized LTV and cohort reporting planned",
    revenueCat: "Available",
    adapty: "Available",
    superwall: "Available",
  },
  {
    capability: "Paywalls and experiments",
    subkit: "Roadmap",
    revenueCat: "Available",
    adapty: "Available",
    superwall: "Core product focus",
  },
  {
    capability: "Events and outbound webhooks",
    subkit: "Durable Event Inbox foundation; outbound delivery planned",
    revenueCat: "Available",
    adapty: "Available",
    superwall: "Available",
  },
] as const;

export function Comparison() {
  return (
    <Section borderTop id="comparison" className="bg-slate-50/60">
      <Container>
        <div className="mx-auto mb-12 max-w-3xl px-4 text-center">
          <span className="block font-mono text-xs font-bold uppercase tracking-widest text-primary">
            Planned Positioning
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-card-foreground sm:text-5xl">
            Where Subkit Is Heading
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-foreground sm:text-base">
            Subkit is pursuing a portable, open-source subscription stack spanning Apple and Google validation, customer operations, analytics, LTV reporting, paywalls, and event delivery. The table separates today&apos;s pre-alpha foundation from planned capabilities and established managed products.
          </p>
        </div>

        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm">
              <caption className="sr-only">
                High-level positioning of Subkit, RevenueCat, Adapty, and Superwall.
              </caption>
              <thead className="bg-slate-100/80">
                <tr>
                  <th scope="col" className="w-48 px-6 py-5 font-heading font-bold text-card-foreground">Capability</th>
                  <th scope="col" className="w-64 border-l border-primary/15 bg-primary/5 px-6 py-5 font-heading font-bold text-card-foreground">
                    Subkit <span className="ml-1 rounded-full bg-amber-100 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-amber-800">Pre-alpha / planned</span>
                  </th>
                  <th scope="col" className="px-6 py-5 font-heading font-bold text-card-foreground">RevenueCat</th>
                  <th scope="col" className="px-6 py-5 font-heading font-bold text-card-foreground">Adapty</th>
                  <th scope="col" className="px-6 py-5 font-heading font-bold text-card-foreground">Superwall</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {ROWS.map((row) => (
                  <tr key={row.capability} className="align-top">
                    <th scope="row" className="px-6 py-5 font-semibold text-card-foreground">{row.capability}</th>
                    <td className="border-l border-primary/15 bg-primary/[0.025] px-6 py-5 font-medium text-card-foreground">{row.subkit}</td>
                    <td className="px-6 py-5 text-foreground">{row.revenueCat}</td>
                    <td className="px-6 py-5 text-foreground">{row.adapty}</td>
                    <td className="px-6 py-5 text-foreground">{row.superwall}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="border-t border-slate-200 px-6 py-4 text-xs leading-relaxed text-slate-500">
            Positioning snapshot reviewed July 2026 from public vendor documentation. Product capabilities change; verify vendor documentation before making a technical or purchasing decision. Planned Subkit work is not a delivery commitment.
          </p>
        </div>
      </Container>
    </Section>
  );
}
