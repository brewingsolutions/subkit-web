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
          REST API Reference
        </h2>
        <p className="text-xs text-slate-500">
          This reference will be generated from the authoritative Internal
          Services OpenAPI contract.
        </p>
      </div>
      <CodeBlock code={API_CONTRACT_PREVIEW} copyLabel="Copy operation preview" />
      <p className="rounded-xl border bg-slate-50 p-5 text-sm text-slate-600">
        The operation list is a migration preview, not a published contract.
        Response schemas will appear here when the OpenAPI source is available.
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
