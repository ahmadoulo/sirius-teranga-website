import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import WhyUsSection from "@/components/WhyUsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-16">
      <SEOHead
        title={`${t("about.title")} | Sirius Teranga Consulting`}
        description={t("about.p1")}
        path="/a-propos"
      />
      <Navbar />
      <AboutSection />
      <MissionSection />
      <WhyUsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default About;
