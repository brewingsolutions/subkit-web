"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { GradientMesh } from "@/components/visuals/gradient-mesh";
import { GridOverlay } from "@/components/visuals/grid-overlay";
import { Terminal, BookOpen, Activity, ChevronRight, Check, Copy } from "lucide-react";

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState<"sdk" | "api" | "status">("sdk");
  const [sdkLang, setSdkLang] = useState<"swift" | "kotlin" | "flutter">("swift");
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const swiftCode = `
import Subkit

// 1. Initialize Subkit SDK inside AppDelegate
Subkit.configure(
    apiKey: "sb_live_eu_77e09e9373ea",
    userId: "user_90412"
)

// 2. Fetch Active Offerings remotely
Subkit.shared.getOfferings { offerings, error in
    guard let offerings = offerings, error == nil else { return }
    if let premiumPackage = offerings.current?.monthly {
        print("Product Price: \\(premiumPackage.storeProduct.localizedPriceString)")
    }
}

// 3. Purchase a Package and get Entitlements
Subkit.shared.purchase(package: premiumPackage) { transaction, customerInfo, error in
    if customerInfo?.entitlements["premium"]?.isActive == true {
        print("Success! User is now Premium.")
    }
}
`.trim();

  const kotlinCode = `
import io.subkit.sdk.Subkit

// 1. Initialize Subkit SDK
Subkit.configure(
    context = this,
    apiKey = "sb_live_eu_77e09e9373ea",
    userId = "user_90412"
)

// 2. Query Offerings configured remotely
Subkit.shared.getOfferings { offerings, error ->
    val monthlyPackage = offerings.current?.monthly
    if (monthlyPackage != null) {
        println("Price: \${monthlyPackage.product.price}")
    }
}

// 3. Complete Purchase and unlock Premium
Subkit.shared.purchase(activity, monthlyPackage) { customerInfo, error ->
    if (customerInfo.entitlements["premium"]?.isActive == true) {
        println("Success! User is Premium.")
    }
}
`.trim();

  const flutterCode = `
import 'package:subkit_flutter/subkit_flutter.dart';

// 1. Setup Subkit
await Subkit.configure(
  apiKey: "sb_live_eu_77e09e9373ea",
  userId: "user_90412"
);

// 2. Fetch remote configs
Offerings offerings = await Subkit.getOfferings();
Package? monthly = offerings.current?.monthly;

// 3. Trigger purchase
CustomerInfo customerInfo = await Subkit.purchasePackage(monthly!);
if (customerInfo.entitlements["premium"]?.isActive == true) {
  print("Success! Access unlocked.");
}
`.trim();

  const apiRequest = `
curl -X POST "https://api.subkit.io/v1/receipts/verify" \\
  -H "Authorization: Bearer sb_live_eu_77e09e9373ea" \\
  -H "Content-Type: application/json" \\
  -d '{
    "user_id": "user_90412",
    "receipt": "MIIS/gYJKoZIhvcNAQcCoIIS7zCCEusCAQExC...",
    "platform": "ios"
  }'
`.trim();

  const apiResponse = `
{
  "ok": true,
  "user_id": "user_90412",
  "entitlements": {
    "premium": {
      "is_active": true,
      "expires_date": "2026-06-30T23:59:59Z",
      "purchase_date": "2026-05-31T23:00:00Z",
      "product_identifier": "subkit_premium_monthly",
      "store": "app_store"
    }
  }
}
`.trim();

  const currentCode = sdkLang === "swift" ? swiftCode : sdkLang === "kotlin" ? kotlinCode : flutterCode;

  return (
    <div className="flex min-h-screen flex-col bg-[#f6f9fc] relative">
      <Navbar />

      {/* Mesh and Grid overlays in the background */}
      <div className="absolute inset-x-0 top-0 h-[600px] overflow-hidden -z-10 pointer-events-none">
        <GradientMesh />
        <GridOverlay />
      </div>

      <main className="flex-1 pt-32 pb-24 md:pt-40 md:pb-32 relative">
        <Container className="px-4">

          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <span className="text-[10px] font-mono tracking-widest text-[#00c9db] uppercase font-bold">
              Developer Portal
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-card-foreground font-heading">
              Documentation & API
            </h1>
            <p className="text-sm sm:text-base text-foreground/80 max-w-xl mx-auto">
              Welcome to the Subkit developer hub. Query real-time subscription statuses, integrate native SDKs, or check system uptimes.
            </p>
            <div className="mx-auto mt-4 h-[2px] w-16 bg-[#00c9db]/60" />
          </div>

          {/* Navigation Tabs */}
          <div className="max-w-5xl mx-auto mb-10">
            <div className="flex rounded-xl bg-slate-200/50 p-1 border border-slate-200/30">
              <button
                onClick={() => setActiveTab("sdk")}
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-xs sm:text-sm font-semibold rounded-lg transition-all focus:outline-none cursor-pointer ${activeTab === "sdk"
                    ? "bg-white text-card-foreground shadow"
                    : "text-slate-500 hover:text-card-foreground"
                  }`}
              >
                <BookOpen className="size-4" />
                <span>SDK Quickstart</span>
              </button>
              <button
                onClick={() => setActiveTab("api")}
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-xs sm:text-sm font-semibold rounded-lg transition-all focus:outline-none cursor-pointer ${activeTab === "api"
                    ? "bg-white text-card-foreground shadow"
                    : "text-slate-500 hover:text-card-foreground"
                  }`}
              >
                <Terminal className="size-4" />
                <span>API Reference</span>
              </button>
              <button
                onClick={() => setActiveTab("status")}
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-xs sm:text-sm font-semibold rounded-lg transition-all focus:outline-none cursor-pointer ${activeTab === "status"
                    ? "bg-white text-card-foreground shadow"
                    : "text-slate-500 hover:text-card-foreground"
                  }`}
              >
                <Activity className="size-4" />
                <span>System Status</span>
              </button>
            </div>
          </div>

          {/* Docs Frame */}
          <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 shadow-xl overflow-hidden min-h-[500px]">

            {/* Tab 1: SDK Quickstart */}
            {activeTab === "sdk" && (
              <div className="p-6 md:p-10 space-y-6 animate-fade-in">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-card-foreground font-heading">Sovereign Client SDKs</h3>
                    <p className="text-xs text-slate-500">Integrate receipt validation and entitlement management natively.</p>
                  </div>

                  {/* Language Selector */}
                  <div className="flex rounded-lg bg-slate-100 p-1 border border-slate-200/30">
                    <button
                      onClick={() => setSdkLang("swift")}
                      className={`px-3 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer ${sdkLang === "swift" ? "bg-white text-card-foreground shadow-sm" : "text-slate-400"
                        }`}
                    >
                      iOS (Swift)
                    </button>
                    <button
                      onClick={() => setSdkLang("kotlin")}
                      className={`px-3 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer ${sdkLang === "kotlin" ? "bg-white text-card-foreground shadow-sm" : "text-slate-400"
                        }`}
                    >
                      Android (Kotlin)
                    </button>
                    <button
                      onClick={() => setSdkLang("flutter")}
                      className={`px-3 py-1.5 text-xs font-semibold rounded transition-all cursor-pointer ${sdkLang === "flutter" ? "bg-white text-card-foreground shadow-sm" : "text-slate-400"
                        }`}
                    >
                      Flutter
                    </button>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden bg-slate-900 text-slate-100 p-6 shadow-inner font-mono text-xs leading-relaxed group">
                  <button
                    onClick={() => handleCopy(currentCode)}
                    className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-slate-450 hover:text-white transition-all cursor-pointer opacity-0 group-hover:opacity-100"
                    title="Copy Code"
                  >
                    {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
                  </button>
                  <pre className="overflow-x-auto"><code className="block">{currentCode}</code></pre>
                </div>

                <div className="bg-slate-50 rounded-xl p-5 border border-slate-150 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>💡 Pro-Tip:</strong> Subkit is fully open source. You can host this validation layer on your own servers or connect to our hosted servers inside the EU, complying completely with European GDPR policies natively.
                </div>
              </div>
            )}

            {/* Tab 2: API Reference */}
            {activeTab === "api" && (
              <div className="p-6 md:p-10 space-y-8 animate-fade-in">
                <div className="border-b border-slate-100 pb-5 space-y-1">
                  <h3 className="text-lg font-bold text-card-foreground font-heading">REST API Reference</h3>
                  <p className="text-xs text-slate-500">Programmatic access to Subkit subscription validation engine.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

                  {/* Left Column: API Detail */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 uppercase">
                        POST
                      </span>
                      <span className="font-mono text-xs font-semibold text-slate-700 ml-2">
                        /v1/receipts/verify
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Sends purchase receipt payload generated from the App Store, Google Play Store, or Stripe billing sessions for real-time cryptographic validation.
                    </p>

                    <div className="space-y-4 text-xs">
                      <h4 className="font-mono font-bold text-slate-450 uppercase tracking-widest">Headers</h4>
                      <div className="space-y-2 font-mono">
                        <div className="flex justify-between py-1.5 border-b border-slate-100">
                          <span className="font-bold text-slate-700">Authorization</span>
                          <span className="text-slate-400">Bearer &lt;API_KEY&gt;</span>
                        </div>
                        <div className="flex justify-between py-1.5 border-b border-slate-100">
                          <span className="font-bold text-slate-700">Content-Type</span>
                          <span className="text-slate-400">application/json</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Code Request / Response */}
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold text-slate-450 uppercase tracking-wider block">Request Sample</span>
                      <div className="rounded-xl overflow-hidden bg-slate-900 text-slate-100 p-5 font-mono text-[10px] sm:text-xs leading-relaxed overflow-x-auto">
                        <pre><code>{apiRequest}</code></pre>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold text-slate-450 uppercase tracking-wider block">Response Payload</span>
                      <div className="rounded-xl overflow-hidden bg-slate-900 text-slate-100 p-5 font-mono text-[10px] sm:text-xs leading-relaxed overflow-x-auto">
                        <pre><code>{apiResponse}</code></pre>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* Tab 3: System Status */}
            {activeTab === "status" && (
              <div className="p-6 md:p-10 space-y-8 animate-fade-in">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-card-foreground font-heading">Sovereign System Status</h3>
                    <p className="text-xs text-slate-500">Live heartbeat monitoring of our independent EU infrastructure.</p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>All Systems Operational (99.99%)</span>
                  </div>
                </div>

                {/* Status Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                  {/* Service 1 */}
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-150 flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-700 font-heading">App Store Receipt Validator</h4>
                      <p className="text-[10px] text-slate-400">Region: EU-Central (Frankfurt)</p>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                      Operational
                    </span>
                  </div>

                  {/* Service 2 */}
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-150 flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-700 font-heading">Google Play Receipt Sync</h4>
                      <p className="text-[10px] text-slate-400">Region: EU-Central (Frankfurt)</p>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                      Operational
                    </span>
                  </div>

                  {/* Service 3 */}
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-150 flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-700 font-heading">Sovereign PostgreSQL DB</h4>
                      <p className="text-[10px] text-slate-400">Encrypted data-at-rest replication</p>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                      Operational
                    </span>
                  </div>

                  {/* Service 4 */}
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-150 flex items-center justify-between">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-700 font-heading">Billing Webhook Engine</h4>
                      <p className="text-[10px] text-slate-400">Slack, Discord & Custom endpoints</p>
                    </div>
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                      Operational
                    </span>
                  </div>

                </div>

                {/* Performance Uptime Chart mockup */}
                <div className="space-y-2 pt-4">
                  <div className="flex justify-between items-center text-xs text-slate-550">
                    <span className="font-semibold">30-Day Response Latency</span>
                    <span className="font-mono font-semibold">12ms (Avg)</span>
                  </div>
                  <div className="h-6 flex items-center gap-1">
                    {Array.from({ length: 40 }).map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-full flex-1 rounded ${idx === 34 ? "bg-amber-400" : "bg-emerald-400"
                          }`}
                        title={idx === 34 ? "98.8% (Minor latency)" : "100% Uptime"}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 font-semibold font-mono">
                    <span>30 days ago</span>
                    <span>Today</span>
                  </div>
                </div>
              </div>
            )}

          </div>

        </Container>
      </main>

      <Footer />
    </div>
  );
}
