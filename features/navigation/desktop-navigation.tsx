"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  NAV_DEV_DROPDOWN,
  NAV_LINKS,
  NAV_MORE_DROPDOWN,
} from "@/features/navigation/content";
import { NAVIGATION_ICONS } from "@/features/navigation/navigation-icons";

type OpenMenu = "developers" | "more" | null;

export function DesktopNavigation() {
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);

  return (
    <div className="text-foreground hidden items-center gap-8 text-sm font-medium md:flex">
      {NAV_LINKS.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="transition-colors hover:text-card-foreground"
        >
          {link.name}
        </a>
      ))}

      <div
        className="relative"
        onMouseLeave={() => setOpenMenu(null)}
      >
        <MenuButton
          label="Developers"
          open={openMenu === "developers"}
          onToggle={() =>
            setOpenMenu((current) =>
              current === "developers" ? null : "developers"
            )
          }
          onOpen={() => setOpenMenu("developers")}
        />
        {openMenu === "developers" ? (
          <div className="absolute top-full -left-4 w-56 pt-2">
            <div className="rounded-xl border border-slate-200/50 bg-card p-2 shadow-float">
              {NAV_DEV_DROPDOWN.map((item) => {
                const Icon = NAVIGATION_ICONS[item.icon];
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpenMenu(null)}
                    className="text-foreground flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-slate-50 hover:text-card-foreground"
                  >
                    <Icon className={`size-4 ${item.iconColor}`} />
                    <span className="text-xs">
                      <strong className="text-card-foreground block font-semibold">
                        {item.name}
                      </strong>
                      <span className="text-[10px] text-slate-400">
                        {item.description}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>

      <div className="relative" onMouseLeave={() => setOpenMenu(null)}>
        <MenuButton
          label="More"
          open={openMenu === "more"}
          onToggle={() =>
            setOpenMenu((current) => (current === "more" ? null : "more"))
          }
          onOpen={() => setOpenMenu("more")}
        />
        {openMenu === "more" ? (
          <div className="absolute top-full -left-4 w-48 pt-2">
            <div className="rounded-xl border border-slate-200/50 bg-card p-2 shadow-float">
              {NAV_MORE_DROPDOWN.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpenMenu(null)}
                  className="text-foreground flex items-center rounded-lg p-2.5 text-xs font-semibold transition-colors hover:bg-slate-50 hover:text-card-foreground"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function MenuButton({
  label,
  open,
  onToggle,
  onOpen,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      onMouseEnter={onOpen}
      className="flex cursor-pointer items-center gap-1 transition-colors hover:text-card-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-expanded={open}
    >
      {label}
      <ChevronDown
        className={`size-3 transition-transform ${open ? "rotate-180" : ""}`}
      />
    </button>
  );
}
