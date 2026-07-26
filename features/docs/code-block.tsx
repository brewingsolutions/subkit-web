"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  copyLabel?: string;
}

export function CodeBlock({ code, copyLabel = "Copy code" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="group relative overflow-hidden rounded-xl bg-slate-900 p-6 font-mono text-xs leading-relaxed text-slate-100 shadow-inner">
      <button
        type="button"
        onClick={handleCopy}
        className="absolute top-4 right-4 rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        aria-label={copied ? "Copied" : copyLabel}
      >
        {copied ? (
          <Check className="size-3.5 text-emerald-400" />
        ) : (
          <Copy className="size-3.5" />
        )}
      </button>
      <pre className="overflow-x-auto pr-10">
        <code>{code}</code>
      </pre>
    </div>
  );
}

