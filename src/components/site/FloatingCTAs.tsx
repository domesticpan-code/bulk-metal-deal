import { MessageCircle, Phone } from "lucide-react";

import { WhatsAppButton } from "@/components/site/WhatsAppChooser";
import { telPrimary } from "@/lib/contact";

export function FloatingCTAs() {
  return (
    <>
      {/* Mobile action bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-border md:hidden">
        <a
          href={telPrimary}
          className="flex items-center justify-center gap-2 bg-primary py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground"
        >
          <Phone className="size-4" /> Call Now
        </a>
        <WhatsAppButton className="flex items-center justify-center gap-2 bg-whatsapp py-4 text-sm font-bold uppercase tracking-widest text-whatsapp-foreground">
          <MessageCircle className="size-4" /> WhatsApp
        </WhatsAppButton>
      </div>

      {/* Desktop floating WhatsApp button */}
      <WhatsAppButton
        className="fixed bottom-6 right-6 z-50 hidden items-center gap-2 rounded-sm bg-whatsapp px-5 py-4 text-sm font-bold uppercase tracking-widest text-whatsapp-foreground shadow-2xl transition-opacity hover:opacity-90 md:inline-flex"
      >
        <MessageCircle className="size-5" /> WhatsApp Us
      </WhatsAppButton>
    </>
  );
}
