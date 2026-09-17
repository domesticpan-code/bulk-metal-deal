import {
  BadgeIndianRupee,
  ShieldCheck,
  Scale,
  Truck,
  FileCheck2,
  Camera,
  Boxes,
  Wallet,
} from "lucide-react";

const PILLARS = [
  {
    icon: Boxes,
    title: "Small & Large Quantities Welcome",
    text: "A couple of batteries or a full plant lot — small, large and bulk quantities get a proper rate.",
  },
  {
    icon: Truck,
    title: "Bulk Handling End to End",
    text: "Dismantling, cutting, loading and closed-body transport all handled by our own crew.",
  },
  {
    icon: Camera,
    title: "Photo Quotation",
    text: "Send photos on WhatsApp and get a price without waiting for a site visit.",
  },
  {
    icon: Wallet,
    title: "Prompt Payouts",
    text: "Settlement on the spot by cash, UPI or RTGS as soon as weighment is agreed.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Competitive, Market-Linked Rates",
    text: "Pricing benchmarked to live metal rates — no hidden deductions after loading.",
  },
  {
    icon: Scale,
    title: "Transparent Weighment",
    text: "Certified weighbridge slips and open counting in front of you or your supervisor.",
  },
  {
    icon: FileCheck2,
    title: "Complete Documentation",
    text: "GST invoicing, purchase orders and disposal records for your audit trail.",
  },
  {
    icon: ShieldCheck,
    title: "Safe, Insured Handling",
    text: "Trained teams with PPE and safety protocols for live plant and site environments.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <header className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Why Customers Choose ScrapXpert India
          </h2>
        </header>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <div key={p.title} className="plate flex gap-4 rounded-sm border border-border p-5">
              <p.icon className="size-6 shrink-0 text-primary" />
              <div className="min-w-0">
                <h3 className="text-base">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
