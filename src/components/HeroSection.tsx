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
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center max-w-4xl py-32">
        <div className="inline-block bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 mb-8">
          <span className="font-body text-sm text-primary-foreground">{t("hero.badge")}</span>
        </div>

        <h1 ref={titleRef} className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
          {t("hero.title")}{" "}
          <span className="text-accent">{t("hero.highlight")}</span>
        </h1>

        <p ref={subtitleRef} className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("hero.subtitle")}
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-accent text-accent-foreground font-heading font-semibold px-8 py-3.5 rounded-md text-base hover:bg-gold-light transition-colors"
          >
            {t("hero.cta1")}
          </Link>
          <Link
            to="/services"
            className="border border-primary-foreground/30 text-primary-foreground font-heading font-semibold px-8 py-3.5 rounded-md text-base hover:bg-primary-foreground/10 transition-colors"
          >
            {t("hero.cta2")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
