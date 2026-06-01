"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { Menu, X, ChevronDown, BookOpen, Terminal, Activity } from "lucide-react";
import { NAV_LINKS, NAV_DEV_DROPDOWN, NAV_RIGHT_LINKS, NAV_MORE_DROPDOWN } from "@/lib/constants/navigation";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Terminal,
  Activity,
};

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [devDropdownOpen, setDevDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const showAuthButtons = false;

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200/50 bg-background/85 backdrop-blur-xl transition-all">
      <Container className="flex items-center justify-between py-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold tracking-tight text-card-foreground hover:opacity-90 transition-all font-heading">
              Subkit
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-card-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Developers Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDevDropdownOpen(!devDropdownOpen)}
              onMouseEnter={() => setDevDropdownOpen(true)}
              className="flex items-center gap-1 hover:text-card-foreground transition-colors focus:outline-none cursor-pointer"
            >
              Developers
              <ChevronDown
                className={`size-3 transition-transform duration-200 ${
                  devDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {devDropdownOpen && (
              <div
                onMouseLeave={() => setDevDropdownOpen(false)}
                className="absolute top-full -left-4 mt-2 w-56 rounded-xl border border-slate-200/50 bg-card p-2"
              >
                {NAV_DEV_DROPDOWN.map((item) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 rounded-lg p-2 hover:bg-slate-50 text-foreground hover:text-card-foreground transition-all"
                    >
                      {Icon && <Icon className={`size-4 ${item.iconColor}`} />}
                      <div className="text-xs">
                        <p className="font-semibold text-card-foreground">
                          {item.name}
                        </p>
                        <p className="text-[10px] text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Pricing Link */}
          <a
            href="/pricing"
            className="hover:text-card-foreground transition-colors"
          >
            Pricing
          </a>

          {/* More Dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
              onMouseEnter={() => setMoreDropdownOpen(true)}
              className="flex items-center gap-1 hover:text-card-foreground transition-colors focus:outline-none cursor-pointer"
            >
              More
              <ChevronDown
                className={`size-3 transition-transform duration-200 ${
                  moreDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {moreDropdownOpen && (
              <div
                onMouseLeave={() => setMoreDropdownOpen(false)}
                className="absolute top-full -left-4 mt-2 w-48 rounded-xl border border-slate-200/50 bg-card p-2"
              >
                {NAV_MORE_DROPDOWN.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMoreDropdownOpen(false)}
                    className="flex items-center rounded-lg p-2.5 hover:bg-slate-50 text-foreground hover:text-card-foreground transition-all text-xs font-semibold"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {NAV_RIGHT_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-card-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        {showAuthButtons && (
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-foreground hover:text-card-foreground hover:bg-slate-100 px-4 rounded-full text-xs font-semibold"
            >
              Log In
            </Button>
            <Button className="rounded-full bg-primary hover:bg-primary/95 px-5 py-2 text-xs font-semibold text-white shadow-[0_4px_12px_rgba(99,91,255,0.25)] hover:shadow-[0_4px_20px_rgba(99,91,255,0.4)] active:scale-95 transition-all">
              Sign Up
            </Button>
          </div>
        )}

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-foreground hover:bg-slate-100 hover:text-card-foreground focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40 w-full bg-background/98 backdrop-blur-3xl px-6 py-8 flex flex-col justify-between border-t border-slate-200/50">
          <div className="flex flex-col gap-6 text-lg font-medium text-foreground">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-slate-200/50 hover:text-card-foreground"
              >
                {link.name}
              </a>
            ))}

            <div className="py-2 border-b border-slate-200/50 flex flex-col gap-2">
              <span className="text-slate-400 text-xs uppercase tracking-wider font-semibold">
                Developers
              </span>
              {NAV_DEV_DROPDOWN.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="pl-4 py-1 text-sm flex items-center gap-2 hover:text-card-foreground"
                  >
                    {Icon && <Icon className={`size-4 ${item.iconColor}`} />}
                    {item.name}
                  </a>
                );
              })}
            </div>

            <div className="py-2 border-b border-slate-200/50 flex flex-col gap-2">
              <span className="text-slate-400 text-xs uppercase tracking-wider font-semibold">
                More
              </span>
              {NAV_MORE_DROPDOWN.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="pl-4 py-1 text-sm flex items-center gap-2 hover:text-card-foreground"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {NAV_RIGHT_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-slate-200/50 hover:text-card-foreground"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Auth Buttons */}
          {showAuthButtons && (
            <div className="flex flex-col gap-3">
              <Button
                variant="outline"
                className="w-full rounded-full border-slate-250 bg-card text-foreground py-6 hover:bg-slate-50"
              >
                Log In
              </Button>
              <Button className="w-full rounded-full bg-primary hover:bg-primary/95 text-white py-6 shadow-lg shadow-indigo-500/20">
                Sign Up
              </Button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
