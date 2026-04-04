import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useTranslation();
  const titleRef = useScrollAnimation('fade-in-up', 0);
  const subtitleRef = useScrollAnimation('fade-in-up', 200);
  const ctaRef = useScrollAnimation('fade-in-up', 400);

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} loading="eager" />
        <div className="absolute inset-0 bg-[hsl(216,70%,14%)]/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center max-w-4xl py-32">
        <div className="inline-block bg-[hsl(43,56%,52%)]/20 border border-[hsl(43,56%,52%)]/30 rounded-full px-4 py-1.5 mb-8">
          <span className="font-body text-sm text-[hsl(43,56%,52%)]">{t("hero.badge")}</span>
        </div>

        <h1 ref={titleRef} className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
          {t("hero.title")}{" "}
          <span className="text-[hsl(43,56%,52%)]">{t("hero.highlight")}</span>
        </h1>

        <p ref={subtitleRef} className="font-body text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("hero.subtitle")}
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-[hsl(43,56%,52%)] text-[hsl(216,70%,14%)] font-heading font-semibold px-8 py-3.5 rounded-md text-base hover:bg-[hsl(43,56%,62%)] transition-colors"
          >
            {t("hero.cta1")}
          </Link>
          <Link
            to="/services"
            className="border border-white/30 text-white font-heading font-semibold px-8 py-3.5 rounded-md text-base hover:bg-white/10 transition-colors"
          >
            {t("hero.cta2")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;