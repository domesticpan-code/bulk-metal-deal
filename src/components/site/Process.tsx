const STEPS = [
  {
    n: "01",
    title: "Share Scrap Details",
    text: "Send material type, approximate quantity and photos on WhatsApp or through the enquiry form.",
  },
  {
    n: "02",
    title: "Get a Competitive Quote",
    text: "Our buyer prices your lot against live market rates and confirms a per-kg or lot-wise offer.",
  },
  {
    n: "03",
    title: "Free Pickup & Weighment",
    text: "Our team arrives with labour, cutting tools and transport. Material is weighed in front of you.",
  },
  {
    n: "04",
    title: "Instant Payment",
    text: "Settlement on the spot by cash, UPI or RTGS, with a GST invoice and disposal paperwork.",
  },
];

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <header className="max-w-2xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
          How It Works
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Four Steps From Enquiry to Payment</h2>
      </header>

      <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s) => (
          <li key={s.n} className="plate relative rounded-sm border border-border p-6">
            <span className="hazard absolute inset-x-0 top-0 h-0.5 opacity-70" />
            <span className="font-display text-4xl text-primary/70">{s.n}</span>
            <h3 className="mt-3 text-lg">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
