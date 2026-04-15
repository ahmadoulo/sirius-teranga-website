import Navbar from "@/components/Navbar";
import ExpertisesSection from "@/components/ExpertisesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from "react-i18next";

const Expertises = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Expertises — Transformation Opérationnelle | STC"
        description={t("expertises.intro")}
        path="/expertises"
      />
      <Navbar />
      <main id="main-content">
        <div className="pt-20 md:pt-24" />
        <h1 className="sr-only">{t("expertises.tag")} - Sirius Teranga Consulting</h1>
        <ExpertisesSection />
        <CtaSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Expertises;