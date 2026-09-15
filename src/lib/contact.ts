export const PHONE_PRIMARY = "+918750612022";
export const PHONE_SECONDARY = "+918285409949";
export const PHONE_PRIMARY_DISPLAY = "+91 87506 12022";
export const PHONE_SECONDARY_DISPLAY = "+91 82854 09949";
export const WHATSAPP_NUMBER = "918750612022";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const telPrimary = `tel:${PHONE_PRIMARY}`;
export const telSecondary = `tel:${PHONE_SECONDARY}`;
