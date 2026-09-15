import { Phone, MessageCircle, Menu, X, Recycle } from "lucide-react";
import { useState } from "react";

import { PHONE_PRIMARY_DISPLAY, telPrimary, waLink } from "@/lib/contact";

const NAV = [
  { label: "Scrap We Buy", href: "#categories" },
  { label: "Bulk Deals", href: "#bulk" },
  { label: "How It Works", href: "#process" },
  { label: "Enquiry", href: "#enquiry" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="hazard h-1 w-full opacity-80" />
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-sm bg-primary text-primary-foreground">
            <Recycle className="size-5" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-none tracking-wide">
              ScrapXpert India
            </span>
            <span className="block truncate text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              We buy scrap in bulk
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2">
          <nav className="mr-2 hidden items-center gap-6 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={telPrimary}
            className="hidden shrink-0 items-center gap-2 rounded-sm border border-border px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary sm:inline-flex"
          >
            <Phone className="size-4" />
            {PHONE_PRIMARY_DISPLAY}
          </a>
          <a
            href={waLink(
              "Hi ScrapXpert India, I want to sell my scrap. Please share your best rates.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-whatsapp px-3 py-2 text-sm font-bold uppercase tracking-wide text-whatsapp-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 shrink-0 place-items-center rounded-sm border border-border lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-card px-4 py-3 lg:hidden">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground last:border-0"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
