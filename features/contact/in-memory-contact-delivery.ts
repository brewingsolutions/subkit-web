import type { ContactDelivery, ContactInquiry } from "@/features/contact/model";

export interface InMemoryContactDelivery extends ContactDelivery {
  readonly inquiries: ReadonlyArray<ContactInquiry>;
}

export function createInMemoryContactDelivery(): InMemoryContactDelivery {
  const inquiries: ContactInquiry[] = [];

  return {
    inquiries,
    async deliver(inquiry) {
      inquiries.push(inquiry);
    },
  };
}

