import Link from "next/link";
import { Container } from "@/components/layout/container";
import { DesktopNavigation } from "@/features/navigation/desktop-navigation";
import { MobileNavigation } from "@/features/navigation/mobile-navigation";

export function Navbar() {
  return (
    <nav
      aria-label="Primary navigation"
      className="bg-background/85 fixed top-0 z-50 w-full border-b border-slate-200/50 backdrop-blur-xl"
    >
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-heading text-card-foreground text-xl font-bold tracking-tight transition-opacity group-hover:opacity-90">
            Subkit
          </span>
        </Link>
        <DesktopNavigation />
        <MobileNavigation />
      </Container>
    </nav>
  );
}
