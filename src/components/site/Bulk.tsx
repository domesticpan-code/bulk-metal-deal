import { Factory, Warehouse, Building2, Truck, MessageCircle, Phone } from "lucide-react";

import { telSecondary, PHONE_SECONDARY_DISPLAY, waLink } from "@/lib/contact";

const SEGMENTS = [
  {
    icon: Factory,
    title: "Factories & Plants",
    text: "Production waste, turnings, rejected batches and complete shutdown lots on annual contract.",
  },
  {
    icon: Warehouse,
    title: "Warehouses & Godowns",
    text: "Racking, packaging metal, damaged stock and obsolete inventory cleared in one lift.",
  },
  {
    icon: Building2,
    title: "Corporates & Builders",
    text: "IT asset disposal, site demolition steel, cable offcuts with documented paperwork.",
  },
  {
    icon: Truck,
    title: "Traders & Fleets",
    text: "Regular truckload offtake for dealers, transporters and vehicle scrapping units.",
  },
];

export function Bulk() {
  return (
    <section id="bulk" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
              Bulk Scrap Purchasing
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Minimum 500 Kg. No Upper Limit.</h2>
            <p className="mt-4 text-muted-foreground">
              Bulk is our core business. We quote lot-wise against live LME and local mandi
              rates, arrange our own labour, cutting and closed-body transport, and settle
              by RTGS or cash on weighment — GST invoicing included.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-4">
              {[
                ["500 Kg+", "Minimum bulk lot"],
                ["24 Hrs", "Quote turnaround"],
                ["Pan-India", "Pickup coverage"],
                ["100%", "Weighment transparency"],
              ].map(([value, label]) => (
                <div key={label} className="plate rounded-sm border border-border p-4">
                  <dt className="font-display text-2xl text-primary">{value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink(
                  "Hi ScrapXpert India, I have a bulk scrap lot to sell. Quantity: , Material: , Location: ",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-whatsapp px-5 py-3 text-sm font-bold uppercase tracking-widest text-whatsapp-foreground transition-opacity hover:opacity-90"
              >
                <MessageCircle className="size-4" /> Send Bulk Details
              </a>
              <a
                href={telSecondary}
                className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-bold uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
              >
                <Phone className="size-4" /> {PHONE_SECONDARY_DISPLAY}
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {SEGMENTS.map((s) => (
              <div key={s.title} className="plate rounded-sm border border-border p-6">
                <s.icon className="size-7 text-primary" />
                <h3 className="mt-4 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
