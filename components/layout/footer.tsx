import { Container } from "@/components/layout/container";
import { FOOTER_LINKS } from "@/lib/constants/navigation";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-background text-foreground relative">
      <Container className="py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          
          {/* Logo & Description */}
          <div>
            <span className="text-2xl font-extrabold text-card-foreground font-heading">
              Subkit
            </span>
            <p className="mt-4 text-sm leading-6 text-foreground max-w-xs">
              The developer-friendly platform for building and managing in-app subscriptions. Simple integration, powerful insights.
            </p>
          </div>

          {/* Links Grid */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-xs font-bold leading-6 text-card-foreground uppercase tracking-wider font-mono">
                  {category}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm leading-6 text-foreground hover:text-card-foreground transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-slate-200/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs leading-5 text-slate-400">
            &copy; {new Date().getFullYear()} Subkit. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-slate-400">
            <span>EU-based & GDPR compliant infrastructure.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
