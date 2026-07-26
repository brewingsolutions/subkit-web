"use client";

import { useState } from "react";
import { CodeBlock } from "@/features/docs/code-block";
import { SDK_GUIDES, type SdkLanguage } from "@/features/docs/content";

const SDK_LANGUAGES = Object.keys(SDK_GUIDES) as SdkLanguage[];

export function SdkGuide() {
  const [language, setLanguage] = useState<SdkLanguage>("swift");
  const guide = SDK_GUIDES[language];

  return (
    <section className="animate-fade-in space-y-6 p-6 md:p-10">
      <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-5 md:flex-row md:items-center">
        <div className="space-y-1">
          <h2 className="font-heading text-card-foreground text-lg font-bold">
            Client SDK Design Preview
          </h2>
          <p className="text-xs text-slate-500">
            Illustrative API shape only. These packages and methods are not currently published.
          </p>
        </div>
        <div className="flex rounded-lg border border-slate-200/30 bg-slate-100 p-1">
          {SDK_LANGUAGES.map((sdkLanguage) => (
            <button
              key={sdkLanguage}
              type="button"
              onClick={() => setLanguage(sdkLanguage)}
              className={
                language === sdkLanguage
                  ? "text-card-foreground rounded bg-white px-3 py-1.5 text-xs font-semibold shadow-sm"
                  : "rounded px-3 py-1.5 text-xs font-semibold text-slate-400 hover:text-slate-700"
              }
              aria-pressed={language === sdkLanguage}
            >
              {SDK_GUIDES[sdkLanguage].label}
            </button>
          ))}
        </div>
      </div>
      <CodeBlock code={guide.code} />
      <p className="rounded-xl border bg-slate-50 p-5 text-xs leading-relaxed text-slate-600 sm:text-sm">
        These snippets communicate design direction and are not installable SDK documentation.
        Stable public operations will be generated from the Subkit Core public contract.
      </p>
    </section>
  );
}

