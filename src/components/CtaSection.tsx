import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CtaSection = () => {
  const { t } = useTranslation();
  const ref = useScrollAnimation('fade-in-up', 0);

  return (
    <section className="py-20 bg-[hsl(216,70%,14%)]">
      <div ref={ref} className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-5">{t("cta.title")}</h2>
        <p className="font-body text-white/70 text-lg mb-8">{t("cta.subtitle")}</p>
        <Link
          to="/contact"
          className="inline-block bg-[hsl(43,56%,52%)] text-[hsl(216,70%,14%)] font-heading font-semibold px-10 py-4 rounded-md text-base hover:bg-[hsl(43,56%,62%)] transition-colors"
        >
          {t("cta.button")}
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;