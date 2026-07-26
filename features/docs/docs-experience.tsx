import { API_CONTRACT_PREVIEW } from "@/features/docs/content";
import { CodeBlock } from "@/features/docs/code-block";
import { DocsTabs } from "@/features/docs/docs-tabs";
import { SdkGuide } from "@/features/docs/sdk-guide";
import { SystemStatusPanel } from "@/features/status/system-status-panel";
import { getSystemStatus } from "@/features/status/internal-services-status";

function ApiReferencePanel() {
  return (
    <section className="animate-fade-in space-y-6 p-6 md:p-10">
      <div className="space-y-1 border-b border-slate-100 pb-5">
        <h2 className="font-heading text-card-foreground text-lg font-bold">
          Public Contract Status
        </h2>
        <p className="text-xs text-slate-500">
          Stable SDK-facing operations will be generated from the Subkit Core
          public OpenAPI contract when implementations are ready.
        </p>
      </div>
      <CodeBlock code={API_CONTRACT_PREVIEW} copyLabel="Copy operation preview" />
      <p className="rounded-xl border bg-slate-50 p-5 text-sm text-slate-600">
        No stable public SDK operation is currently published. Internal Services
        routes are deliberately excluded from this public reference.
      </p>
    </section>
  );
}

export async function DocsExperience() {
  const status = await getSystemStatus();

  return (
    <DocsTabs
      sdk={<SdkGuide />}
      api={<ApiReferencePanel />}
      status={<SystemStatusPanel status={status} />}
    />
  );
}
