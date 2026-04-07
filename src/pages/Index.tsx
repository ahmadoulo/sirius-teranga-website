import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import ServicesSection from "@/components/ServicesSection";
import MethodologySection from "@/components/MethodologySection";
import WhyUsSection from "@/components/WhyUsSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
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
      <MissionSection />
      <ServicesSection />
      <MethodologySection />
      <WhyUsSection />
      <CtaSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
