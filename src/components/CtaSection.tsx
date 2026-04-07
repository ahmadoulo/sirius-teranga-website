import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const CtaSection = () => {
  const { t } = useTranslation();
  const ref = useScrollAnimation('fade-in-up', 0);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#071528] via-[#0B1F3A] to-[#102848]">
      {/* Overlays */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.1) 0%, transparent 60%),
          radial-gradient(ellipse at 70% 50%, rgba(212,175,55,0.06) 0%, transparent 60%)`
      }} />

      <div className="max-w-[1200px] mx-auto px-8 text-center relative z-[1]">
        <div ref={ref}>
          <div className="inline-flex items-center justify-center w-[52px] h-[52px] bg-accent text-accent-foreground rounded-full text-xl mx-auto mb-8 shadow-gold animate-pulse-badge">
            <Star className="w-6 h-6" />
          </div>
          <h2 className="font-heading font-black text-[clamp(1.8rem,4vw,3rem)] leading-[1.2] text-white mb-6">
            {t("cta.title")}<br />
            <span className="text-accent">{t("cta.title_accent")}</span>
          </h2>
          <p className="text-white/70 text-lg max-w-[540px] mx-auto mb-10">{t("cta.subtitle")}</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-heading text-base font-bold tracking-[0.05em] uppercase bg-accent text-accent-foreground px-10 py-4 rounded-full shadow-gold hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(212,175,55,0.45)] transition-all duration-300"
          >
            {t("cta.button")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
