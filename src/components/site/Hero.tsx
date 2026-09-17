import { ArrowRight, BadgeIndianRupee, MessageCircle, Scale, Truck, Clock } from "lucide-react";

import heroYard from "@/assets/hero-yard.jpg";
import { WhatsAppButton } from "@/components/site/WhatsAppChooser";
import { telPrimary, PHONE_PRIMARY_DISPLAY } from "@/lib/contact";

const BADGES = [
  { icon: Scale, label: "Certified Weighment" },
  { icon: BadgeIndianRupee, label: "Instant Payment" },
  { icon: Truck, label: "Free Pickup & Loading" },
  { icon: Clock, label: "Same-Day Site Visit" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <img
        src={heroYard}
        alt="Scrap metal yard with baled metal and crane grabber at dusk"
        width={1920}
        height={1088}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <p className="inline-flex items-center gap-2 rounded-sm border border-primary/40 bg-primary/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
          Pan-India B2B Scrap Buyers
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
          We Buy Scrap.
          <span className="block text-primary">We Offer Competitive Prices.</span>
          We Deal in Bulk.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
          ScrapXpert India purchases industrial, factory and commercial scrap directly from
          plants, builders, workshops and corporates — metal, electrical, electronic, motor,
          vehicle parts and batteries lifted at transparent, market-linked rates.
        </p>
        <p className="mt-4 text-sm font-bold uppercase tracking-widest text-primary">
          Small &amp; large quantities welcome · Bulk quantities also accepted
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <WhatsAppButton className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90">
            Get Best Rate on WhatsApp <ArrowRight className="size-4" />
          </WhatsAppButton>
          <a
            href={telPrimary}
            className="inline-flex items-center gap-2 rounded-sm border border-border bg-card/70 px-6 py-3.5 text-sm font-bold uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
          >
            <MessageCircle className="size-4" /> Call {PHONE_PRIMARY_DISPLAY}
          </a>
        </div>

        <ul className="mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {BADGES.map((b) => (
            <li
              key={b.label}
              className="plate flex items-center gap-3 rounded-sm border border-border px-3 py-3"
            >
              <b.icon className="size-5 shrink-0 text-primary" />
              <span className="min-w-0 text-xs font-semibold uppercase leading-tight tracking-wide">
                {b.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
