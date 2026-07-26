"use client";

import { useState, type ReactNode } from "react";
import { Activity, BookOpen, Terminal } from "lucide-react";

type DocsTab = "sdk" | "api" | "status";

interface DocsTabsProps {
  sdk: ReactNode;
  api: ReactNode;
  status: ReactNode;
}

const TABS: ReadonlyArray<{
  id: DocsTab;
  label: string;
  icon: typeof BookOpen;
}> = [
  { id: "sdk", label: "SDK Quickstart", icon: BookOpen },
  { id: "api", label: "API Reference", icon: Terminal },
  { id: "status", label: "System Status", icon: Activity },
];

export function DocsTabs({ sdk, api, status }: DocsTabsProps) {
  const [activeTab, setActiveTab] = useState<DocsTab>("sdk");
  const panels = { sdk, api, status };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-10 flex rounded-xl border border-slate-200/30 bg-slate-200/50 p-1">
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setActiveTab(id)}
            className={
              activeTab === id
                ? "text-card-foreground flex flex-1 items-center justify-center gap-2 rounded-lg bg-white py-3.5 text-xs font-semibold shadow sm:text-sm"
                : "flex flex-1 items-center justify-center gap-2 rounded-lg py-3.5 text-xs font-semibold text-slate-500 hover:text-slate-800 sm:text-sm"
            }
            aria-pressed={activeTab === id}
          >
            <Icon className="size-4" />
            <span>{label}</span>
          </button>
        ))}
      </div>
      <div className="min-h-[500px] overflow-hidden rounded-2xl border border-slate-200/60 bg-white/80 shadow-xl backdrop-blur-md">
        {panels[activeTab]}
      </div>
    </div>
  );
}

