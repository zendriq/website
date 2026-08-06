import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Tracks from "@/components/Tracks";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Coverage from "@/components/Coverage";
import Principles from "@/components/Principles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  areaServed: "Worldwide",
  serviceType: [
    "Technology consulting",
    "Infrastructure assessment",
    "Infrastructure remediation",
    "Technical discovery and architecture",
    "Fractional CTO",
    "Software development",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Tracks />
        <Services />
        <Process />
        <Coverage />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
