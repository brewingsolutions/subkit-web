"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  NAV_DEV_DROPDOWN,
  NAV_LINKS,
  NAV_MORE_DROPDOWN,
} from "@/features/navigation/content";
import { NAVIGATION_ICONS } from "@/features/navigation/navigation-icons";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="text-foreground cursor-pointer rounded-lg p-2 hover:bg-slate-100 hover:text-card-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-expanded={open}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
      >
        {open ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      {open ? (
        <div className="bg-background/98 fixed inset-x-0 top-16 bottom-0 z-40 w-full border-t border-slate-200/50 px-6 py-8 backdrop-blur-3xl">
          <div className="text-foreground flex flex-col gap-6 text-lg font-medium">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={close}
                className="flex items-center justify-between border-b border-slate-200/50 py-2 hover:text-card-foreground"
              >
                {link.name}
              </a>
            ))}

            <div className="flex flex-col gap-2 border-b border-slate-200/50 py-2">
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Developers
              </span>
              {NAV_DEV_DROPDOWN.map((item) => {
                const Icon = NAVIGATION_ICONS[item.icon];
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={close}
                    className="flex items-center gap-2 py-1 pl-4 text-sm hover:text-card-foreground"
                  >
                    <Icon className={`size-4 ${item.iconColor}`} />
                    {item.name}
                  </a>
                );
              })}
            </div>

            <div className="flex flex-col gap-2 border-b border-slate-200/50 py-2">
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                More
              </span>
              {NAV_MORE_DROPDOWN.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={close}
                  className="py-1 pl-4 text-sm hover:text-card-foreground"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

