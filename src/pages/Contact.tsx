import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-16">
      <SEOHead
        title={`${t("contact.title")} | Sirius Teranga Consulting`}
        description={t("contact.subtitle")}
        path="/contact"
      />
      <Navbar />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;
