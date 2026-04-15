import Navbar from "@/components/Navbar";
import PartnershipSection from "@/components/PartnershipSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from "react-i18next";

const Partnership = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Partenariat Stratégique — Octave Attune EAM | STC"
        description={t("partnership.intro")}
        path="/partenariat"
      />
      <Navbar />
      <main id="main-content">
        <div className="pt-20 md:pt-24" />
        <h1 className="sr-only">{t("partnership.tag")} - Sirius Teranga Consulting</h1>
        <PartnershipSection />
        <CtaSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Partnership;