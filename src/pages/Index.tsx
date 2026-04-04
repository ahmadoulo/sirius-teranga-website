import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sirius Teranga Consulting",
    description: t("hero.subtitle"),
    url: "https://siriusteranga.com",
    address: { "@type": "PostalAddress", addressLocality: "Dakar", addressCountry: "SN" },
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Sirius Teranga Consulting | Conseil & Transformation"
        description={t("hero.subtitle")}
        path="/"
        jsonLd={jsonLd}
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
