"use client";

import { useEffect, useState } from "react";
import { LogEvent } from "@/features/home/model";
import { INITIAL_LOGS, NEW_EVENTS_POOL } from "@/features/home/demo-data";

export function LiveLogger() {
  const [logs, setLogs] = useState<LogEvent[]>(INITIAL_LOGS);
  const [logCounter, setLogCounter] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomEvent =
        NEW_EVENTS_POOL[Math.floor(Math.random() * NEW_EVENTS_POOL.length)];
      const now = new Date();
      const timeString = now.toTimeString().split(" ")[0];

      const newLog: LogEvent = {
        id: logCounter,
        time: timeString,
        ...randomEvent,
      };

      setLogs((prev) => [newLog, ...prev.slice(0, 3)]);
      setLogCounter((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [logCounter]);

  return (
    <div className="space-y-2.5">
      <span className="text-[10px] text-slate-500 block uppercase tracking-wider font-semibold text-left">
        Real-time Event Logs
      </span>

      <div className="space-y-2 font-mono text-[11px] min-h-[140px] text-left">
        {logs.map((log) => (
          <div
            key={log.id}
            className="flex items-center justify-between p-2.5 rounded-lg border border-white/5 bg-slate-950/50 animate-in slide-in-from-top-3 fade-in duration-300"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-slate-500 text-[10px]">{log.time}</span>
              <span className="text-slate-300 font-semibold">{log.event}</span>
            </div>
            {log.amount && (
              <span className="text-chart-2 font-bold">{log.amount}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
