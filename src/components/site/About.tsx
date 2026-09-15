import metal from "@/assets/scrap-metal.jpg";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="overflow-hidden rounded-sm border border-border">
          <img
            src={metal}
            alt="Sorted copper, aluminium, brass and steel scrap ready for weighment"
            loading="lazy"
            width={1024}
            height={768}
            className="size-full object-cover"
          />
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
            About ScrapXpert India
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Scrap Buyers Who Work Like Your Vendor</h2>
          <p className="mt-4 text-muted-foreground">
            ScrapXpert India is a B2B scrap procurement company buying ferrous and
            non-ferrous scrap, e-waste, electrical material and end-of-life vehicles
            directly from industry. We work with manufacturers, EPC contractors, builders,
            hospitals, IT companies and traders who need scrap lifted quickly, priced
            fairly and documented properly.
          </p>
          <p className="mt-4 text-muted-foreground">
            Every deal runs through the same discipline: inspection, written quote,
            scheduled pickup, certified weighment and same-day payment. That is why our
            clients hand us repeat lots instead of running a fresh tender each quarter.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {[
              "Annual rate contracts available",
              "Dedicated buyer for every account",
              "Site visit before quoting",
              "Delhi NCR & pan-India coverage",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 size-1.5 shrink-0 bg-primary" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
