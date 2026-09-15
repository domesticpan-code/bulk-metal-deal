import { MessageCircle, ArrowRight } from "lucide-react";

import metal from "@/assets/scrap-metal.jpg";
import electrical from "@/assets/scrap-electrical.jpg";
import electronic from "@/assets/scrap-electronic.jpg";
import motor from "@/assets/scrap-motor.jpg";
import automobile from "@/assets/scrap-automobile.jpg";
import { waLink } from "@/lib/contact";

const CATEGORIES = [
  {
    name: "Metal Scrap",
    image: metal,
    alt: "Copper pipes, aluminium sheets, brass fittings and steel offcuts",
    items: ["Copper & Brass", "Aluminium & Zinc", "MS / GI / SS Steel", "Sheet Cuttings & Turnings"],
  },
  {
    name: "Electrical Scrap",
    image: electrical,
    alt: "Copper cable coils, switchgear panels and a transformer in a warehouse",
    items: ["Copper Wire & Cables", "Transformers", "Panels & Switchgear", "Armature & Windings"],
  },
  {
    name: "Electronic Scrap",
    image: electronic,
    alt: "Stacked motherboards, servers, hard drives and monitors",
    items: ["Servers & IT Assets", "PCB & Motherboards", "UPS & Batteries", "Bulk E-Waste Lots"],
  },
  {
    name: "Motor & Industrial Scrap",
    image: motor,
    alt: "Old industrial electric motors, gearboxes and pumps",
    items: ["Electric Motors", "Pumps & Gearboxes", "Plant Machinery", "Complete Factory Lots"],
  },
  {
    name: "Automobile Scrap",
    image: automobile,
    alt: "Stacked end-of-life car bodies, engines and tyres in a scrapyard",
    items: ["End-of-Life Vehicles", "Engines & Gearboxes", "Radiators & Rims", "Fleet Disposal"],
  },
];

export function Categories() {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <header className="max-w-2xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
          Scrap Categories
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Every Grade of Scrap We Purchase</h2>
        <p className="mt-4 text-muted-foreground">
          Sorted or mixed, loose or baled — we lift single truckloads to full plant
          clearances with certified weighment and instant settlement.
        </p>
      </header>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((cat) => (
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
                <a
                  href={waLink(
                    `Hi ScrapXpert India, I want to sell ${cat.name}. Please share your buying rate.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-sm border border-whatsapp px-3 py-2.5 text-xs font-bold uppercase tracking-wider text-whatsapp transition-colors hover:bg-whatsapp hover:text-whatsapp-foreground"
                >
                  <MessageCircle className="size-3.5" /> Enquire
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
