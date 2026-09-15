import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";

import {
  PHONE_PRIMARY_DISPLAY,
  PHONE_SECONDARY_DISPLAY,
  telPrimary,
  telSecondary,
  waLink,
} from "@/lib/contact";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <header className="max-w-2xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">Contact</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Talk to a Scrap Buyer Now</h2>
      </header>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <a
          href={telPrimary}
          className="plate rounded-sm border border-border p-6 transition-colors hover:border-primary"
        >
          <Phone className="size-6 text-primary" />
          <h3 className="mt-4 text-base">Primary Line</h3>
          <p className="mt-1 font-display text-xl">{PHONE_PRIMARY_DISPLAY}</p>
          <p className="mt-1 text-sm text-muted-foreground">Rates, pickups & bulk lots</p>
        </a>
        <a
          href={telSecondary}
          className="plate rounded-sm border border-border p-6 transition-colors hover:border-primary"
        >
          <Phone className="size-6 text-primary" />
          <h3 className="mt-4 text-base">Alternate Line</h3>
          <p className="mt-1 font-display text-xl">{PHONE_SECONDARY_DISPLAY}</p>
          <p className="mt-1 text-sm text-muted-foreground">Logistics & site coordination</p>
        </a>
        <a
          href={waLink("Hi ScrapXpert India, please share your scrap buying rates.")}
          target="_blank"
          rel="noopener noreferrer"
          className="plate rounded-sm border border-border p-6 transition-colors hover:border-whatsapp"
        >
          <MessageCircle className="size-6 text-whatsapp" />
          <h3 className="mt-4 text-base">WhatsApp Desk</h3>
          <p className="mt-1 font-display text-xl">{PHONE_PRIMARY_DISPLAY}</p>
          <p className="mt-1 text-sm text-muted-foreground">Send photos for a fast quote</p>
        </a>
        <div className="plate rounded-sm border border-border p-6">
          <Clock className="size-6 text-primary" />
          <h3 className="mt-4 text-base">Working Hours</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Monday to Saturday, 9:00 AM – 8:00 PM. Sunday pickups on prior confirmation.
          </p>
        </div>
      </div>

      <div className="plate mt-6 flex items-start gap-4 rounded-sm border border-border p-6">
        <MapPin className="size-6 shrink-0 text-primary" />
        <div>
          <h3 className="text-base">Service Area</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Delhi NCR — Delhi, Noida, Greater Noida, Ghaziabad, Faridabad, Gurugram — plus
            bulk lots across Uttar Pradesh, Haryana, Rajasthan, Punjab and pan-India for
            large industrial clearances.
          </p>
        </div>
      </div>
    </section>
  );
}
