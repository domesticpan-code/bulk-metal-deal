import { MessageCircle, Phone } from "lucide-react";

import { telPrimary, waLink } from "@/lib/contact";

export function FloatingCTAs() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-border md:hidden">
      <a
        href={telPrimary}
        className="flex items-center justify-center gap-2 bg-primary py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground"
      >
        <Phone className="size-4" /> Call Now
      </a>
      <a
        href={waLink("Hi ScrapXpert India, I have scrap to sell. Please contact me.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-whatsapp py-4 text-sm font-bold uppercase tracking-widest text-whatsapp-foreground"
      >
        <MessageCircle className="size-4" /> WhatsApp
      </a>
    </div>
  );
}
