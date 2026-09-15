import { BadgeIndianRupee, ShieldCheck, Scale, Truck, FileCheck2, Leaf } from "lucide-react";

const PILLARS = [
  {
    icon: BadgeIndianRupee,
    title: "Competitive, Market-Linked Rates",
    text: "Pricing benchmarked to live metal rates — no hidden deductions after loading.",
  },
  {
    icon: Scale,
    title: "Transparent Weighment",
    text: "Certified weighbridge slips and open counting in the presence of your supervisor.",
  },
  {
    icon: Truck,
    title: "Own Labour & Logistics",
    text: "Dismantling, cutting, loading and closed-body transport all handled by our crew.",
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
  {
    icon: Leaf,
    title: "Responsible Recycling",
    text: "Material routed to authorised recyclers so your waste re-enters the supply chain.",
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
          <h2 className="mt-3 text-3xl sm:text-4xl">Built for Industrial Buyers & Sellers</h2>
        </header>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.title} className="flex gap-4 rounded-sm border border-border p-5">
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
