export type LogStatus = "success" | "pending" | "info";

export interface LogEvent {
  id: number;
  time: string;
  event: string;
  amount?: string;
  status: LogStatus;
}

export interface ClientLogo {
  name: string;
}
