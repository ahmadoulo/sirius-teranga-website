import Navbar from "@/components/Navbar";
import ReferencesSection from "@/components/ReferencesSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from "react-i18next";

const References = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Références & Expériences | STC"
        description={t("references.intro")}
        path="/references"
      />
      <Navbar />
      <main id="main-content">
        <div className="pt-20 md:pt-24" />
        <h1 className="sr-only">{t("references.tag")} - Sirius Teranga Consulting</h1>
        <ReferencesSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default References;