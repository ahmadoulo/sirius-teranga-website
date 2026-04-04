import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import MethodologySection from "@/components/MethodologySection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-16">
      <SEOHead
        title={`${t("services.title")} | Sirius Teranga Consulting`}
        description={t("services.subtitle")}
        path="/services"
      />
      <Navbar />
      <ServicesSection />
      <MethodologySection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Services;
