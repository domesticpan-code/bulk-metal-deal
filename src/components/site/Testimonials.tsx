import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Rajeev Malhotra",
    location: "Noida, UP",
    stars: 5,
    text: "Sent photos of our old panel boards on WhatsApp in the morning and had a clear rate by afternoon. Pickup happened the next day without any follow-up from my side.",
  },
  {
    name: "Sunita Aggarwal",
    location: "Rohini, Delhi",
    stars: 5,
    text: "I only had two old inverter batteries and a ceiling fan. They still came, weighed everything in front of me and paid immediately. No minimum quantity fuss.",
  },
  {
    name: "Mohammed Irfan",
    location: "Ghaziabad, UP",
    stars: 5,
    text: "We cleared six split AC units and scrap copper piping from a hotel renovation. Rate was better than our regular kabadi and the team handled the dismantling.",
  },
  {
    name: "Praveen Kumar",
    location: "Gurugram, Haryana",
    stars: 4,
    text: "Fair pricing on aluminium and brass turnings. Weighment was open and the slip matched. Only had to remind them once about the invoice copy.",
  },
  {
    name: "Deepak Yadav",
    location: "Faridabad, Haryana",
    stars: 5,
    text: "Sold two scrap car engines and assorted automobile metal. Loading labour came with them, so our workshop was cleared in a single visit.",
  },
  {
    name: "Anita Verma",
    location: "Greater Noida, UP",
    stars: 5,
    text: "Quotation came from just the photos I sent, and the final amount was the same after weighing. That honesty is why I called them again.",
  },
  {
    name: "Harpreet Singh",
    location: "Sonipat, Haryana",
    stars: 5,
    text: "We had a mixed lot of electric motors, pump motors and a transformer. They priced each item separately instead of one low mixed rate.",
  },
  {
    name: "Vikas Chauhan",
    location: "Dwarka, Delhi",
    stars: 4,
    text: "Good experience with our office e-waste — hard disks, computer parts and UPS units. Response on WhatsApp was quick and payment was on the spot.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export function Testimonials() {
  return (
    <section id="feedback" className="border-y border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <header className="max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
            Customer Feedback
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl">What Our Customers Say</h2>
          <p className="mt-4 text-muted-foreground">
            Trusted by customers for professional scrap buying and smooth dealing.
          </p>
        </header>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r) => (
            <li key={r.name} className="plate flex flex-col rounded-sm border border-border p-5">
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-sm bg-primary/15 font-display text-sm text-primary">
                  {initials(r.name)}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">{r.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{r.location}</p>
                </div>
              </div>
              <div
                className="mt-3 flex gap-0.5"
                aria-label={`${r.stars} out of 5 stars`}
                role="img"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={
                      i < r.stars ? "size-3.5 fill-primary text-primary" : "size-3.5 text-border"
                    }
                  />
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
