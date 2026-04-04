import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pointKeys = ["context", "field", "results", "transfer", "multi", "commitment"];

const WhyUsSection = () => {
  const { t } = useTranslation();
  const headRef = useScrollAnimation('fade-in-up', 0);

  return (
    <section className="py-24 bg-surface-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={headRef} className="text-center mb-14">
          <span className="font-heading text-sm font-semibold text-accent uppercase tracking-widest">{t("whyus.tag")}</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-3 mb-4">{t("whyus.title")}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pointKeys.map((key, i) => {
            const ref = useScrollAnimation<HTMLDivElement>('fade-in-up', i * 100);
            return (
              <div ref={ref} key={key} className="flex gap-4 p-5">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">{t(`whyus.points.${key}.title`)}</h3>
                  <p className="font-body text-text-muted text-sm leading-relaxed">{t(`whyus.points.${key}.desc`)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
