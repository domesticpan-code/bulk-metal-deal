export const PHONE_PRIMARY = "+918750612022";
export const PHONE_SECONDARY = "+918285409949";
export const PHONE_PRIMARY_DISPLAY = "+91 87506 12022";
export const PHONE_SECONDARY_DISPLAY = "+91 82854 09949";
export const PHONE_PRIMARY_SHORT = "8750612022";
export const PHONE_SECONDARY_SHORT = "8285409949";
export const WHATSAPP_PRIMARY = "918750612022";
export const WHATSAPP_SECONDARY = "918285409949";

export const WHATSAPP_NUMBERS = [
  { label: PHONE_PRIMARY_SHORT, wa: WHATSAPP_PRIMARY, tel: PHONE_PRIMARY, note: "Primary line" },
  {
    label: PHONE_SECONDARY_SHORT,
    wa: WHATSAPP_SECONDARY,
    tel: PHONE_SECONDARY,
    note: "Alternate line",
  },
] as const;

export function waLink(message: string, number: string = WHATSAPP_PRIMARY) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function enquiryMessage(item?: string) {
  return [
    "Hello ScrapXpert India, I want to sell scrap. Please share your best price.",
    `Item: ${item ?? "______"}`,
    "Quantity: ______",
    "Location: ______",
  ].join("\n");
}

export const telPrimary = `tel:${PHONE_PRIMARY}`;
export const telSecondary = `tel:${PHONE_SECONDARY}`;
