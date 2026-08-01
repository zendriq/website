import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Gap from "@/components/Gap";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Engagements from "@/components/Engagements";
import Focus from "@/components/Focus";
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
    "Technical discovery and architecture",
    "MVP development",
    "Fractional CTO",
    "Managed cloud platform",
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
        <Gap />
        <Services />
        <Process />
        <Engagements />
        <Focus />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
