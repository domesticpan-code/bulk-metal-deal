import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { Bulk } from "@/components/site/Bulk";
import { Categories } from "@/components/site/Categories";
import { Contact } from "@/components/site/Contact";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { FinalCTA } from "@/components/site/FinalCTA";
import { FloatingCTAs } from "@/components/site/FloatingCTAs";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { WhatsAppProvider } from "@/components/site/WhatsAppChooser";
import { WhyUs } from "@/components/site/WhyUs";
import { PHONE_PRIMARY, PHONE_SECONDARY } from "@/lib/contact";

const TITLE = "ScrapXpert India — Scrap Buyers at Competitive Prices";
const DESCRIPTION =
  "ScrapXpert India buys metal, AC, battery, electrical, electronic, motor and automobile scrap across Delhi NCR and pan-India. Small & large quantities welcome, free pickup, instant payment.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "ScrapXpert India",
          description: DESCRIPTION,
          slogan: "We Buy Scrap. We Offer Competitive Prices. We Deal in Bulk.",
          telephone: [PHONE_PRIMARY, PHONE_SECONDARY],
          areaServed: ["Delhi NCR", "Noida", "Ghaziabad", "Gurugram", "Faridabad", "India"],
          openingHours: "Mo-Sa 09:00-20:00",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <WhatsAppProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Categories />
          <Bulk />
          <Process />
          <EnquiryForm />
          <WhyUs />
          <Testimonials />
          <About />
          <Contact />
          <FinalCTA />
        </main>
        <Footer />
        <FloatingCTAs />
      </div>
    </WhatsAppProvider>
  );
}
