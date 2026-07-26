export interface ContactInquiry {
  name: string;
  email: string;
  company: string | null;
  message: string;
}

export interface ContactDelivery {
  deliver(inquiry: ContactInquiry): Promise<void>;
}

export type ContactSubmissionResult =
  | { ok: true }
  | { ok: false; reason: "invalid"; message: string }
  | { ok: false; reason: "delivery-failed"; cause: unknown };

