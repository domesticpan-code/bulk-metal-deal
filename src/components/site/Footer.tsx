import { Recycle, Phone, MessageCircle } from "lucide-react";

import {
  PHONE_PRIMARY_DISPLAY,
  PHONE_SECONDARY_DISPLAY,
  telPrimary,
  telSecondary,
  waLink,
} from "@/lib/contact";

const KEYWORDS = [
  "Scrap buyers in Delhi NCR",
  "Industrial scrap dealers Noida",
  "Bulk metal scrap buyers Ghaziabad",
  "Copper & brass scrap dealer Gurugram",
  "E-waste buyers Faridabad",
  "Electric motor scrap buyer UP",
  "Factory scrap disposal Haryana",
  "Old car scrap buyers Delhi",
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/60 pb-24 md:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-sm bg-primary text-primary-foreground">
                <Recycle className="size-5" />
              </span>
              <span className="font-display text-lg">ScrapXpert India</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              B2B scrap procurement — we buy scrap, offer competitive prices and deal in
              bulk across metal, electrical, electronic, industrial and automobile scrap.
            </p>
          </div>

          <nav aria-label="Sections">
            <h3 className="text-sm">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {[
                ["Scrap We Buy", "#categories"],
                ["Bulk Purchasing", "#bulk"],
                ["How It Works", "#process"],
                ["Send Scrap Details", "#enquiry"],
                ["Why Choose Us", "#why"],
                ["About Us", "#about"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-primary">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm">Get in Touch</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={telPrimary} className="inline-flex items-center gap-2 hover:text-primary">
                  <Phone className="size-4 text-primary" /> {PHONE_PRIMARY_DISPLAY}
                </a>
              </li>
              <li>
                <a href={telSecondary} className="inline-flex items-center gap-2 hover:text-primary">
                  <Phone className="size-4 text-primary" /> {PHONE_SECONDARY_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={waLink("Hi ScrapXpert India, I want to sell scrap.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-whatsapp"
                >
                  <MessageCircle className="size-4 text-whatsapp" /> WhatsApp Enquiry
                </a>
              </li>
              <li className="text-muted-foreground">Mon–Sat, 9:00 AM – 8:00 PM</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm">Areas & Services</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {KEYWORDS.map((k) => (
                <li
                  key={k}
                  className="rounded-sm border border-border px-2.5 py-1 text-[11px] uppercase tracking-wide text-muted-foreground"
                >
                  {k}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ScrapXpert India. All rights reserved.</p>
          <p>We Buy Scrap. We Offer Competitive Prices. We Deal in Bulk.</p>
        </div>
      </div>
    </footer>
  );
}
