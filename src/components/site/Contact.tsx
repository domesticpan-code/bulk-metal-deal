import { Phone, MessageCircle, Clock, MapPin, Info } from "lucide-react";

import {
  PHONE_PRIMARY,
  PHONE_PRIMARY_DISPLAY,
  PHONE_PRIMARY_SHORT,
  PHONE_SECONDARY,
  PHONE_SECONDARY_DISPLAY,
  PHONE_SECONDARY_SHORT,
  WHATSAPP_PRIMARY,
  WHATSAPP_SECONDARY,
  enquiryMessage,
  waLink,
} from "@/lib/contact";

const LINES = [
  {
    display: PHONE_PRIMARY_DISPLAY,
    short: PHONE_PRIMARY_SHORT,
    tel: PHONE_PRIMARY,
    wa: WHATSAPP_PRIMARY,
    title: "Primary Line",
    note: "Rates, pickups & bulk lots",
  },
  {
    display: PHONE_SECONDARY_DISPLAY,
    short: PHONE_SECONDARY_SHORT,
    tel: PHONE_SECONDARY,
    wa: WHATSAPP_SECONDARY,
    title: "Alternate Line",
    note: "Logistics & site coordination",
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <header className="max-w-2xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">Contact</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Talk to a Scrap Buyer Now</h2>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {LINES.map((l) => (
          <div key={l.short} className="plate rounded-sm border border-border p-6">
            <Phone className="size-6 text-primary" />
            <h3 className="mt-4 text-base">{l.title}</h3>
            <p className="mt-1 font-display text-2xl">{l.display}</p>
            <p className="mt-1 text-sm text-muted-foreground">{l.note}</p>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              <a
                href={`tel:${l.tel}`}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Phone className="size-3.5" /> Call {l.short}
              </a>
              <a
                href={waLink(enquiryMessage(), l.wa)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-whatsapp px-4 py-3 text-xs font-bold uppercase tracking-wider text-whatsapp-foreground transition-opacity hover:opacity-90"
              >
                <MessageCircle className="size-3.5" /> WhatsApp {l.short}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="plate mt-6 flex items-start gap-4 rounded-sm border border-primary/40 p-6">
        <Info className="size-6 shrink-0 text-primary" />
        <p className="text-sm text-muted-foreground">
          Unable to reach us by call? Send us a WhatsApp message and share photos of your
          scrap.
        </p>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="plate rounded-sm border border-border p-6">
          <Clock className="size-6 text-primary" />
          <h3 className="mt-4 text-base">Working Hours</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Monday to Saturday, 9:00 AM – 8:00 PM. Sunday pickups on prior confirmation.
          </p>
        </div>
        <div className="plate flex items-start gap-4 rounded-sm border border-border p-6">
          <MapPin className="size-6 shrink-0 text-primary" />
          <div>
            <h3 className="text-base">Service Area</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Delhi NCR — Delhi, Noida, Greater Noida, Ghaziabad, Faridabad, Gurugram — plus
              lots across Uttar Pradesh, Haryana, Rajasthan, Punjab and pan-India for large
              industrial clearances.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
