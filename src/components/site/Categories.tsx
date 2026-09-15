import { MessageCircle, ArrowRight, Search, X } from "lucide-react";
import { useMemo, useState } from "react";

import ac from "@/assets/scrap-ac.jpg";
import automobile from "@/assets/scrap-automobile.jpg";
import battery from "@/assets/scrap-battery.jpg";
import electrical from "@/assets/scrap-electrical.jpg";
import electronic from "@/assets/scrap-electronic.jpg";
import metal from "@/assets/scrap-metal.jpg";
import motor from "@/assets/scrap-motor.jpg";
import { WhatsAppButton } from "@/components/site/WhatsAppChooser";

const CATEGORIES = [
  {
    name: "Metal Scrap",
    image: metal,
    alt: "Copper cable, aluminium sheets, brass fittings and steel offcuts sorted in a scrapyard",
    items: [
      "Copper Scrap & Copper Cable",
      "Aluminium & Zinc",
      "Brass & Silver Contacts",
      "SS / MS / GI Iron",
      "Sheet Cuttings & Turnings",
    ],
  },
  {
    name: "AC & Cooling Scrap",
    image: ac,
    alt: "Stacked window AC units and split AC outdoor units with compressor, copper pipe and condenser coil",
    items: [
      "Window AC & Split AC",
      "Outdoor & Indoor Units",
      "Compressor & Condenser",
      "Copper Pipe & Coils",
      "Fan Motor & PCB",
    ],
  },
  {
    name: "Batteries",
    image: battery,
    alt: "Used car, bike and inverter lead acid batteries stacked on pallets",
    items: [
      "Car Battery",
      "Bike Battery",
      "Inverter Battery",
      "Lead Acid & Used Battery",
      "Industrial Battery",
    ],
  },
  {
    name: "Electrical Scrap",
    image: electrical,
    alt: "Copper cable coils, MCB switchgear panels and contactors in a warehouse",
    items: [
      "MCB, ELCB & Contactor",
      "DT Switch & Panels",
      "Sockets, Holders & Switches",
      "Ceiling, Exhaust & Ventilation Fans",
      "Armature & Windings",
    ],
  },
  {
    name: "Electronic Scrap",
    image: electronic,
    alt: "Stacked motherboards, PCBs, hard drives, servers and LED TV panels",
    items: [
      "IC, MOSFET & Relay",
      "PCB & Motherboards",
      "Hard Disk & Computer Parts",
      "LED TV & Monitors",
      "UPS, Servers & IT Assets",
    ],
  },
  {
    name: "Motor & Machinery Scrap",
    image: motor,
    alt: "Old industrial electric motors, pump motors, transformers and gearboxes",
    items: [
      "Electric Motors",
      "Pump Motor",
      "Transformer",
      "Machinery Parts & Gearboxes",
      "Complete Plant Lots",
    ],
  },
  {
    name: "Automobile Scrap",
    image: automobile,
    alt: "Stacked end-of-life car bodies, engines, tyres and rims in a scrapyard",
    items: [
      "Car & Bike Parts",
      "Engine Components",
      "Automobile Metal",
      "Radiators, Rims & Gearboxes",
      "End-of-Life Vehicles & Fleets",
    ],
  },
];

const CHIPS = [
  "Copper",
  "Aluminium",
  "Brass",
  "AC Scrap",
  "Battery",
  "Motor",
  "Transformer",
  "PCB",
  "MCB",
  "Fan",
  "Hard Disk",
  "Car",
];

export function Categories() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CATEGORIES;
    return CATEGORIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.items.some((i) => i.toLowerCase().includes(q)) ||
        c.alt.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <header className="max-w-2xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
          Scrap Categories
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Every Grade of Scrap We Purchase</h2>
        <p className="mt-4 text-muted-foreground">
          Sorted or mixed, loose or baled — small &amp; large quantities welcome, bulk
          quantities also accepted, with certified weighment and instant settlement.
        </p>
      </header>

      <div className="mt-8">
        <label className="relative block max-w-xl">
          <span className="sr-only">What scrap do you want to sell?</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What scrap do you want to sell?"
            className="w-full rounded-sm border border-input bg-background py-3 pl-10 pr-10 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
          {query && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="size-4" />
            </button>
          )}
        </label>

        <ul className="mt-3 flex flex-wrap gap-2">
          {CHIPS.map((chip) => {
            const active = query.toLowerCase() === chip.toLowerCase();
            return (
              <li key={chip}>
                <button
                  type="button"
                  onClick={() => setQuery(active ? "" : chip)}
                  className={`rounded-sm border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-colors ${
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {chip}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {results.length === 0 ? (
        <div className="plate mt-10 rounded-sm border border-border p-8 text-center">
          <p className="text-sm text-muted-foreground">
            No category matched “{query}”. We still buy it — send us the details and we will
            quote.
          </p>
          <WhatsAppButton
            item={query}
            className="mt-4 inline-flex items-center gap-2 rounded-sm bg-whatsapp px-5 py-3 text-sm font-bold uppercase tracking-widest text-whatsapp-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-4" /> Ask on WhatsApp
          </WhatsAppButton>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((cat) => (
            <article
              key={cat.name}
              className="plate group flex flex-col overflow-hidden rounded-sm border border-border transition-colors hover:border-primary/60"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl">{cat.name}</h3>
                <ul className="mt-3 flex-1 space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  <a
                    href="#enquiry"
                    className="inline-flex items-center justify-center gap-1.5 rounded-sm bg-primary px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Sell This Scrap <ArrowRight className="size-3.5" />
                  </a>
                  <WhatsAppButton
                    item={cat.name}
                    className="inline-flex items-center justify-center gap-1.5 rounded-sm border border-whatsapp px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-whatsapp transition-colors hover:bg-whatsapp hover:text-whatsapp-foreground"
                  >
                    <MessageCircle className="size-3.5" /> Enquire
                  </WhatsAppButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
