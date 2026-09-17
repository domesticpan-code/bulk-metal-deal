import { ArrowRight, MessageCircle, Search, X } from "lucide-react";
import { useMemo, useState } from "react";

import acComplete from "@/assets/ac-complete.jpg";
import acCompressor from "@/assets/ac-compressor.jpg";
import acCondenser from "@/assets/ac-condenser.jpg";
import acCopper from "@/assets/ac-copper-pipe.jpg";
import acFanMotor from "@/assets/ac-fan-motor.jpg";
import acIndoor from "@/assets/ac-indoor.jpg";
import acOutdoor from "@/assets/ac-outdoor.jpg";
import acPcb from "@/assets/ac-pcb.jpg";
import acSplit from "@/assets/ac-split.jpg";
import acWindow from "@/assets/ac-window.jpg";
import electronicOverview from "@/assets/scrap-electronic.jpg";
import batteryOverview from "@/assets/scrap-battery.jpg";
import motorOverview from "@/assets/scrap-motor.jpg";
import breakerFamily from "@/assets/el-breaker-family.jpg";
import industrialBreakers from "@/assets/el-industrial-breakers.jpg";
import cable from "@/assets/el-cable.jpg";
import ceilingFan from "@/assets/el-ceiling-fan.jpg";
import contactor from "@/assets/el-contactor.jpg";
import dtSwitch from "@/assets/el-dt-switch.jpg";
import elcb from "@/assets/el-elcb.jpg";
import exhaustFan from "@/assets/el-exhaust-fan.jpg";
import mcb from "@/assets/el-mcb.jpg";
import mccb from "@/assets/el-mccb.jpg";
import mpcb from "@/assets/el-mpcb.jpg";
import multiHolder from "@/assets/el-multi-holder.jpg";
import panel from "@/assets/el-panel.jpg";
import rcbo from "@/assets/el-rcbo.jpg";
import rccb from "@/assets/el-rccb.jpg";
import socket from "@/assets/el-socket.jpg";
import switches from "@/assets/el-switches.jpg";
import ventilationFan from "@/assets/el-ventilation-fan.jpg";
import wallHolder from "@/assets/el-wall-holder.jpg";
import wire from "@/assets/el-wire.jpg";
import ic from "@/assets/e-ic.jpg";
import aluminium from "@/assets/m-aluminium.jpg";
import aluminiumWire from "@/assets/m-aluminium-wire.jpg";
import brass from "@/assets/m-brass.jpg";
import copper from "@/assets/m-copper.jpg";
import copperWire from "@/assets/m-copper-wire.jpg";
import iron from "@/assets/m-iron.jpg";
import mixed from "@/assets/m-mixed.jpg";
import silver from "@/assets/m-silver.jpg";
import stainless from "@/assets/m-stainless.jpg";
import { WhatsAppButton } from "@/components/site/WhatsAppChooser";

type Product = { name: string; image: string; alt: string };
type Group = { name: string; products: Product[] };

const GROUPS: Group[] = [
  {
    name: "Metal Scrap",
    products: [
      { name: "Copper Scrap", image: copper, alt: "Sorted copper scrap pieces ready for recycling" },
      { name: "Copper Wire & Cable", image: copperWire, alt: "Coiled copper wire and stripped copper cable scrap" },
      { name: "Aluminium Scrap", image: aluminium, alt: "Clean aluminium sheet and profile scrap" },
      { name: "Aluminium Wire & Cable", image: aluminiumWire, alt: "Aluminium wire and cable scrap" },
      { name: "Brass Scrap", image: brass, alt: "Brass fittings and components sorted as scrap" },
      { name: "Silver Scrap", image: silver, alt: "Silver-coloured electrical contacts and metal scrap" },
      { name: "Stainless Steel Scrap", image: stainless, alt: "Stainless steel industrial offcuts" },
      { name: "Iron Scrap", image: iron, alt: "Heavy iron scrap pieces in a workshop" },
      { name: "Mixed Metals", image: mixed, alt: "Professionally sorted mixed metal scrap" },
    ],
  },
  {
    name: "AC & Cooling",
    products: [
      { name: "Window AC", image: acWindow, alt: "Used window air conditioner unit" },
      { name: "Split AC", image: acSplit, alt: "Used split air conditioner set" },
      { name: "AC Outdoor Unit", image: acOutdoor, alt: "Split AC outdoor condenser unit" },
      { name: "AC Indoor Unit", image: acIndoor, alt: "Split AC indoor wall unit" },
      { name: "AC Compressor", image: acCompressor, alt: "Air conditioner compressor removed for scrap" },
      { name: "AC Copper Pipe", image: acCopper, alt: "Copper pipe coils recovered from air conditioners" },
      { name: "AC Condenser", image: acCondenser, alt: "Air conditioner condenser coil" },
      { name: "AC PCB", image: acPcb, alt: "Electronic PCB control board from an air conditioner" },
      { name: "AC Fan Motor", image: acFanMotor, alt: "Fan motor removed from an air conditioner" },
      { name: "Complete AC Scrap", image: acComplete, alt: "Complete collection of used AC units and components" },
    ],
  },
  {
    name: "Electrical Scrap & Components",
    products: [
      { name: "MCB", image: mcb, alt: "Miniature circuit breaker electrical component" },
      { name: "MCCB", image: mccb, alt: "Moulded case industrial circuit breaker" },
      { name: "RCCB", image: rccb, alt: "Residual current circuit breaker" },
      { name: "RCBO", image: rcbo, alt: "RCBO electrical protection device" },
      { name: "MPCB", image: mpcb, alt: "Motor protection circuit breaker" },
      { name: "Old ELCB", image: elcb, alt: "Old earth leakage circuit breaker" },
      { name: "Contactor", image: contactor, alt: "Industrial electrical contactor" },
      { name: "DT Switch", image: dtSwitch, alt: "Heavy duty double throw electrical switch" },
      { name: "Electrical Socket", image: socket, alt: "Electrical socket component" },
      { name: "Multi Holder", image: multiHolder, alt: "Multiple electrical lamp holders" },
      { name: "Wall Holder", image: wallHolder, alt: "Wall-mounted electrical lamp holder" },
      { name: "Ceiling Fan", image: ceilingFan, alt: "Used ceiling fan for recycling" },
      { name: "Exhaust Fan", image: exhaustFan, alt: "Used exhaust fan unit" },
      { name: "Ventilation Fan", image: ventilationFan, alt: "Industrial ventilation fan" },
      { name: "Electrical Switches", image: switches, alt: "Assorted electrical switches" },
      { name: "Electrical Panel", image: panel, alt: "Industrial electrical control panel" },
      { name: "Electrical Cable", image: cable, alt: "Heavy electrical cable coils" },
      { name: "Electrical Wire", image: wire, alt: "Assorted electrical wire scrap" },
    ],
  },
  {
    name: "Electronic Scrap",
    products: [
      { name: "IC & Electronic Components", image: ic, alt: "Integrated circuits and electronic components" },
      { name: "PCB, MOSFET & Relay", image: electronicOverview, alt: "PCBs, relays and assorted electronic components" },
      { name: "Hard Disk & Computer Parts", image: electronicOverview, alt: "Hard disks and used computer parts" },
      { name: "Power Supply & LED TV Boards", image: electronicOverview, alt: "Power supplies and electronic circuit boards" },
    ],
  },
  {
    name: "Motor & Industrial",
    products: [
      { name: "Electric & Industrial Motors", image: motorOverview, alt: "Used industrial electric motors" },
      { name: "Motor Parts & Pump Motors", image: motorOverview, alt: "Pump motors and dismantled motor parts" },
      { name: "Transformer & Machinery Parts", image: motorOverview, alt: "Transformer and heavy machinery parts" },
      { name: "Industrial Electrical Equipment", image: industrialBreakers, alt: "Industrial circuit breakers and electrical equipment" },
    ],
  },
  {
    name: "Vehicle Parts & Batteries",
    products: [
      { name: "Car Spare Parts", image: batteryOverview, alt: "Used car spare parts and battery material" },
      { name: "Bike Spare Parts", image: batteryOverview, alt: "Used motorcycle parts and battery material" },
      { name: "Car & Bike Electrical Parts", image: batteryOverview, alt: "Used vehicle electrical parts" },
      { name: "Car Battery", image: batteryOverview, alt: "Used car lead-acid battery" },
      { name: "Bike Battery", image: batteryOverview, alt: "Used motorcycle battery" },
      { name: "Inverter Battery & Used Inverter", image: batteryOverview, alt: "Used inverter and inverter battery" },
    ],
  },
];

const BREAKERS = GROUPS[2]?.products.slice(0, 6) ?? [];
const CHIPS = ["Copper", "Aluminium", "AC Scrap", "Battery", "MCB", "MCCB", "RCCB", "Motor", "PCB", "Fan"];

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="plate group flex min-w-0 flex-col overflow-hidden rounded-sm border border-border transition-colors hover:border-primary/60">
      <div className="aspect-[5/4] overflow-hidden bg-muted">
        <img src={product.image} alt={product.alt} loading="lazy" width={640} height={512} className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base leading-snug">{product.name}</h3>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <a href="#enquiry" className="inline-flex min-h-10 items-center justify-center gap-1 rounded-sm bg-primary px-2 py-2 text-center text-[10px] font-bold uppercase tracking-wide text-primary-foreground">
            Sell This <ArrowRight className="size-3" />
          </a>
          <WhatsAppButton item={product.name} className="inline-flex min-h-10 items-center justify-center gap-1 rounded-sm border border-whatsapp px-2 py-2 text-[10px] font-bold uppercase tracking-wide text-whatsapp hover:bg-whatsapp hover:text-whatsapp-foreground">
            <MessageCircle className="size-3" /> WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}

export function Categories() {
  const [query, setQuery] = useState("");
  const filteredGroups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return GROUPS;
    return GROUPS.map((group) => ({
      ...group,
      products: group.products.filter((product) => `${group.name} ${product.name} ${product.alt}`.toLowerCase().includes(q)),
    })).filter((group) => group.products.length > 0);
  }, [query]);

  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <header className="max-w-3xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">Scrap Categories</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Products & Scrap We Purchase</h2>
        <p className="mt-4 text-muted-foreground">Clear product photographs help you identify your material quickly. Small &amp; large quantities welcome; bulk quantities also accepted.</p>
      </header>

      <div className="mt-8">
        <label className="relative block max-w-xl">
          <span className="sr-only">What scrap do you want to sell?</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="What scrap do you want to sell?" className="w-full rounded-sm border border-input bg-background py-3 pl-10 pr-10 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
          {query && <button type="button" aria-label="Clear search" onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"><X className="size-4" /></button>}
        </label>
        <ul className="mt-3 flex flex-wrap gap-2">
          {CHIPS.map((chip) => <li key={chip}><button type="button" onClick={() => setQuery(query.toLowerCase() === chip.toLowerCase() ? "" : chip)} className={`rounded-sm border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider ${query.toLowerCase() === chip.toLowerCase() ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary hover:text-primary"}`}>{chip}</button></li>)}
        </ul>
      </div>

      {!query && (
        <div className="mt-14 border-y border-border py-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-sm border border-border"><img src={breakerFamily} alt="MCB MCCB RCCB RCBO MPCB and ELCB breaker family" width={1280} height={720} className="aspect-video size-full object-cover" /></div>
            <div className="flex flex-col justify-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">Breaker Comparison</p>
              <h2 className="mt-3 text-3xl">We Buy Different Types of Electrical Breakers</h2>
              <p className="mt-4 text-muted-foreground">MCB, MCCB, RCCB, RCBO, MPCB and old ELCB units purchased as used, surplus or scrap electrical material.</p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">{BREAKERS.map((product) => <ProductCard key={product.name} product={product} />)}</div>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <img src={industrialBreakers} alt="Industrial circuit breakers and electrical protection equipment" width={1280} height={720} className="aspect-video w-full rounded-sm border border-border object-cover" />
            <div><p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">Used · Surplus · Scrap</p><h2 className="mt-3 text-3xl">Industrial Circuit Breakers &amp; Electrical Equipment</h2><p className="mt-4 text-muted-foreground">We purchase used, surplus &amp; scrap electrical components from factories, contractors, panel builders and commercial sites.</p></div>
          </div>
        </div>
      )}

      {filteredGroups.length ? filteredGroups.map((group) => (
        <div key={group.name} className="mt-14">
          <div className="flex items-end justify-between gap-4 border-b border-border pb-4"><div><p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">Material Group</p><h2 className="mt-2 text-2xl sm:text-3xl">{group.name}</h2></div><span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{group.products.length} items</span></div>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">{group.products.map((product) => <ProductCard key={`${group.name}-${product.name}`} product={product} />)}</div>
        </div>
      )) : (
        <div className="plate mt-10 rounded-sm border border-border p-8 text-center"><p className="text-sm text-muted-foreground">No exact match found. Send the item photo and we will quote it.</p><WhatsAppButton item={query} className="mt-4 inline-flex items-center gap-2 rounded-sm bg-whatsapp px-5 py-3 text-sm font-bold uppercase tracking-widest text-whatsapp-foreground"><MessageCircle className="size-4" /> Ask on WhatsApp</WhatsAppButton></div>
      )}
    </section>
  );
}