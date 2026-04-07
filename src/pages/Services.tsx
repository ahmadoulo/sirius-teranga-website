import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import MethodologySection from "@/components/MethodologySection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title={`${t("services.title")} ${t("services.title_accent")} | Sirius Teranga Consulting`}
        description={t("services.subtitle")}
        path="/services"
      />
      <Navbar />
      <main id="main-content">
        <h1 className="sr-only">{t("services.title")} {t("services.title_accent")} - Sirius Teranga Consulting</h1>
        <ServicesSection />
        <MethodologySection />
        <CtaSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Services;
