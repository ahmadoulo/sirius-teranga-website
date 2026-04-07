import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-20">
      <SEOHead
        title={`${t("contact.title")} ${t("contact.title_accent")} | Sirius Teranga Consulting`}
        description={t("contact.subtitle")}
        path="/contact"
      />
      <Navbar />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Contact;
