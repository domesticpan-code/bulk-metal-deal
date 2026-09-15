import { MessageCircle, X } from "lucide-react";
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

import { WHATSAPP_NUMBERS, enquiryMessage, waLink } from "@/lib/contact";

type OpenOptions = { item?: string | undefined; message?: string | undefined };

type Ctx = {
  /** Open the number chooser. Pass an item name or a full custom message. */
  openWhatsApp: (options?: OpenOptions) => void;
};

const WhatsAppContext = createContext<Ctx>({ openWhatsApp: () => {} });

export function useWhatsApp() {
  return useContext(WhatsAppContext);
}

export function WhatsAppProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);

  const openWhatsApp = useCallback((options?: OpenOptions) => {
    setMessage(options?.message ?? enquiryMessage(options?.item));
  }, []);

  const value = useMemo(() => ({ openWhatsApp }), [openWhatsApp]);

  return (
    <WhatsAppContext.Provider value={value}>
      {children}
      {message !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Choose WhatsApp number"
          className="fixed inset-0 z-[100] grid place-items-center bg-background/80 p-4 backdrop-blur-sm"
          onClick={() => setMessage(null)}
        >
          <div
            className="plate relative w-full max-w-md rounded-sm border border-border p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setMessage(null)}
              className="absolute right-3 top-3 grid size-8 place-items-center rounded-sm border border-border text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="size-4" />
            </button>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
              WhatsApp Desk
            </p>
            <h3 className="mt-2 text-2xl">Choose WhatsApp Number</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Your message is pre-filled — just add quantity, location and photos.
            </p>
            <div className="mt-6 grid gap-3">
              {WHATSAPP_NUMBERS.map((n) => (
                <a
                  key={n.wa}
                  href={waLink(message, n.wa)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMessage(null)}
                  className="flex items-center justify-between gap-3 rounded-sm bg-whatsapp px-5 py-4 text-sm font-bold uppercase tracking-widest text-whatsapp-foreground transition-opacity hover:opacity-90"
                >
                  <span className="inline-flex items-center gap-2">
                    <MessageCircle className="size-4" /> WhatsApp {n.label}
                  </span>
                  <span className="text-[10px] font-semibold normal-case tracking-normal opacity-80">
                    {n.note}
                  </span>
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Small &amp; large quantities welcome. Bulk quantities also accepted.
            </p>
          </div>
        </div>
      )}
    </WhatsAppContext.Provider>
  );
}

/** Shared button that opens the number chooser. */
export function WhatsAppButton({
  item,
  message,
  className,
  children,
}: {
  item?: string | undefined;
  message?: string | undefined;
  className?: string | undefined;
  children: ReactNode;
}) {
  const { openWhatsApp } = useWhatsApp();
  return (
    <button type="button" onClick={() => openWhatsApp({ item, message })} className={className}>
      {children}
    </button>
  );
}
