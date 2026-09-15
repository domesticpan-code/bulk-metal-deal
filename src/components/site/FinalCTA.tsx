import { MessageCircle, Phone } from "lucide-react";

import { WhatsAppButton } from "@/components/site/WhatsAppChooser";
import {
  PHONE_PRIMARY,
  PHONE_PRIMARY_SHORT,
  PHONE_SECONDARY,
  PHONE_SECONDARY_SHORT,
  WHATSAPP_PRIMARY,
  WHATSAPP_SECONDARY,
  enquiryMessage,
  waLink,
} from "@/lib/contact";

const callBtn =
  "inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-background/60 px-5 py-3.5 text-sm font-bold uppercase tracking-widest transition-colors hover:border-primary hover:text-primary";
const waBtn =
  "inline-flex items-center justify-center gap-2 rounded-sm bg-whatsapp px-5 py-3.5 text-sm font-bold uppercase tracking-widest text-whatsapp-foreground transition-opacity hover:opacity-90";

export function FinalCTA() {
  return (
    <section className="border-t border-border bg-card/60">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <h2 className="text-3xl sm:text-4xl">Ready to Sell Your Scrap?</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Send us photos and details. We&apos;ll get back to you with a competitive price.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <a href={`tel:${PHONE_PRIMARY}`} className={callBtn}>
            <Phone className="size-4" /> Call {PHONE_PRIMARY_SHORT}
          </a>
          <a
            href={waLink(enquiryMessage(), WHATSAPP_PRIMARY)}
            target="_blank"
            rel="noopener noreferrer"
            className={waBtn}
          >
            <MessageCircle className="size-4" /> WhatsApp {PHONE_PRIMARY_SHORT}
          </a>
          <a href={`tel:${PHONE_SECONDARY}`} className={callBtn}>
            <Phone className="size-4" /> Call {PHONE_SECONDARY_SHORT}
          </a>
          <a
            href={waLink(enquiryMessage(), WHATSAPP_SECONDARY)}
            target="_blank"
            rel="noopener noreferrer"
            className={waBtn}
          >
            <MessageCircle className="size-4" /> WhatsApp {PHONE_SECONDARY_SHORT}
          </a>
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-primary">
          Small &amp; large quantities welcome.
        </p>
        <WhatsAppButton className="mt-4 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground">
          Not sure which number? Choose here
        </WhatsAppButton>
      </div>
    </section>
  );
}
