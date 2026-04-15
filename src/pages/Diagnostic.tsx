import Navbar from "@/components/Navbar";
import DiagnosticSection from "@/components/DiagnosticSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from "react-i18next";

const Diagnostic = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Diagnostic de Maturité Digitale — Gratuit | STC"
        description={t("diagnostic.intro")}
        path="/diagnostic"
      />
      <Navbar />
      <main id="main-content">
        <div className="pt-20 md:pt-24" />
        <h1 className="sr-only">{t("diagnostic.tag")} - Sirius Teranga Consulting</h1>
        <DiagnosticSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Diagnostic;