import { ImagePlus, MessageCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useWhatsApp } from "@/components/site/WhatsAppChooser";

const CATEGORY_OPTIONS = [
  "Metal Scrap",
  "AC & Cooling Scrap",
  "Batteries",
  "Electrical Scrap",
  "Electronic Scrap / E-Waste",
  "Motor & Machinery Scrap",
  "Vehicle Parts & Batteries",
  "Mixed / Full Factory Lot",
];

type Photo = { id: string; url: string; name: string };

export function EnquiryForm() {
  const { openWhatsApp } = useWhatsApp();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    category: CATEGORY_OPTIONS[0],
    item: "",
    city: "",
    quantity: "",
    details: "",
  });

  useEffect(() => {
    return () => photos.forEach((p) => URL.revokeObjectURL(p.url));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addFiles(files: FileList | null) {
    if (!files) return;
    const next = Array.from(files)
      .filter((f) => f.type.startsWith("image/"))
      .slice(0, 6)
      .map((f) => ({
        id: `${f.name}-${f.lastModified}-${Math.random().toString(36).slice(2)}`,
        url: URL.createObjectURL(f),
        name: f.name,
      }));
    setPhotos((prev) => [...prev, ...next].slice(0, 6));
  }

  function removePhoto(id: string) {
    setPhotos((prev) => {
      const target = prev.find((p) => p.id === id);
      if (target) URL.revokeObjectURL(target.url);
      return prev.filter((p) => p.id !== id);
    });
  }

  const message = [
    "Hello ScrapXpert India, I want to sell scrap. Please share your best price.",
    `Name: ${form.name || "-"}`,
    `Phone: ${form.phone || "-"}`,
    `Scrap Type: ${form.category}`,
    `Item: ${form.item || form.category}`,
    `Location: ${form.city || "______"}`,
    `Quantity: ${form.quantity || "______"}`,
    `Message: ${form.details || "-"}`,
    photos.length
      ? `Photos ready to share: ${photos.length} (I will attach them in this chat)`
      : "",
  ]
    .filter(Boolean)
    .join("\n");

  const field =
    "w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none";
  const label = "block text-xs font-semibold uppercase tracking-wider text-muted-foreground";

  return (
    <section id="enquiry" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <header>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
              Send Your Scrap Details
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Tell Us What You Have</h2>
            <p className="mt-4 text-muted-foreground">
              Fill in your material and location, add photos so our buyer can grade the lot,
              then send it straight to our WhatsApp desk. Quantity is optional — small &amp;
              large quantities are welcome and bulk quantities are also accepted.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Photos stay on your device — attach them in the WhatsApp chat that opens so our
              buyer sees exactly what you are selling.
            </p>
          </header>

          <form
            className="plate rounded-sm border border-border p-6"
            onSubmit={(e) => {
              e.preventDefault();
              openWhatsApp({ message });
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="name">
                  Your Name
                </label>
                <input
                  id="name"
                  required
                  className={`mt-1.5 ${field}`}
                  placeholder="Rohit Sharma"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className={label} htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  required
                  inputMode="tel"
                  className={`mt-1.5 ${field}`}
                  placeholder="10-digit number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div>
                <label className={label} htmlFor="category">
                  Scrap Type
                </label>
                <select
                  id="category"
                  className={`mt-1.5 ${field}`}
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                >
                  {CATEGORY_OPTIONS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={label} htmlFor="item">
                  Item Details
                </label>
                <input
                  id="item"
                  className={`mt-1.5 ${field}`}
                  placeholder="e.g. Split AC outdoor units, copper cable"
                  value={form.item}
                  onChange={(e) => setForm({ ...form, item: e.target.value })}
                />
              </div>
              <div>
                <label className={label} htmlFor="city">
                  Location
                </label>
                <input
                  id="city"
                  required
                  className={`mt-1.5 ${field}`}
                  placeholder="Noida, UP"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                />
              </div>
              <div>
                <label className={label} htmlFor="quantity">
                  Quantity <span className="normal-case tracking-normal">(optional)</span>
                </label>
                <input
                  id="quantity"
                  className={`mt-1.5 ${field}`}
                  placeholder="Optional — any quantity accepted"
                  value={form.quantity}
                  onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className={label} htmlFor="details">
                Message
              </label>
              <textarea
                id="details"
                rows={3}
                className={`mt-1.5 ${field}`}
                placeholder="Condition, whether dismantling is needed, pickup timeline…"
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
              />
            </div>

            <div className="mt-4">
              <span className={label}>Scrap Photos (up to 6)</span>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e) => addFiles(e.target.files)}
              />
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="mt-1.5 flex w-full items-center justify-center gap-2 rounded-sm border border-dashed border-border py-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <ImagePlus className="size-5" /> Upload Photos
              </button>

              {photos.length > 0 && (
                <ul className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
                  {photos.map((p) => (
                    <li
                      key={p.id}
                      className="relative overflow-hidden rounded-sm border border-border"
                    >
                      <img src={p.url} alt={p.name} className="aspect-square w-full object-cover" />
                      <button
                        type="button"
                        aria-label={`Remove ${p.name}`}
                        onClick={() => removePhoto(p.id)}
                        className="absolute right-1 top-1 grid size-5 place-items-center rounded-sm bg-background/80 text-foreground"
                      >
                        <X className="size-3" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-opacity hover:opacity-90"
              >
                Get Best Price
              </button>
              <button
                type="button"
                onClick={() => openWhatsApp({ message })}
                className="inline-flex items-center justify-center gap-2 rounded-sm bg-whatsapp px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-whatsapp-foreground transition-opacity hover:opacity-90"
              >
                <MessageCircle className="size-4" /> Send Photos on WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
