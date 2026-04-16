import { Check, TrendingUp, Users, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pointKeys = ["expertise", "results", "solutions", "method"];

const WhyUsSection = () => {
  const { t } = useTranslation();
  const leftRef = useScrollAnimation('fade-in-left', 0);
  const rightRef = useScrollAnimation('fade-in-right', 200);

  return (
    <section className="py-14 md:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <div ref={leftRef}>
            <div className="inline-block font-heading text-[0.65rem] md:text-xs font-bold tracking-[0.15em] uppercase text-accent bg-accent/10 border border-accent/30 px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-3 md:mb-4">
              {t("whyus.tag")}
            </div>
            <h2 className="font-heading font-extrabold text-[clamp(1.4rem,4vw,2.8rem)] leading-[1.2] text-foreground mb-3 md:mb-4">
              {t("whyus.title")}<br />
              <span className="text-accent">{t("whyus.title_accent")}</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">{t("whyus.desc")}</p>

            <div className="flex flex-col gap-4 md:gap-6">
              {pointKeys.map((key, i) => (
                <WhyItem key={key} pKey={key} delay={i * 100} />
              ))}
            </div>
          </div>

          {/* Right: Metric Cards */}
          <div ref={rightRef} className="flex flex-col gap-3 md:gap-5">
            <MetricCard icon={TrendingUp} numKey="whyus.metric1_number" labelKey="whyus.metric1_label" gold={false} offset={false} />
            <MetricCard icon={Users} numKey="whyus.metric2_number" labelKey="whyus.metric2_label" gold offset />
            <MetricCard icon={Globe} numKey="whyus.metric3_number" labelKey="whyus.metric3_label" gold={false} offset={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyItem = ({ pKey, delay }: { pKey: string; delay: number }) => {
  const ref = useScrollAnimation<HTMLDivElement>('fade-in-left', delay);
  const { t } = useTranslation();
  return (
    <div ref={ref} className="flex gap-3 items-start">
      <div className="w-8 h-8 md:w-9 md:h-9 bg-gradient-to-br from-gold-dark to-accent text-accent-foreground rounded-full flex items-center justify-center flex-shrink-0 shadow-gold">
        <Check className="w-3.5 h-3.5 md:w-4 md:h-4 font-bold" />
      </div>
      <div>
        <strong className="block font-heading font-bold text-[0.85rem] md:text-[0.95rem] text-foreground mb-0.5">{t(`whyus.points.${pKey}.title`)}</strong>
        <p className="text-xs md:text-sm text-muted-foreground">{t(`whyus.points.${pKey}.desc`)}</p>
      </div>
    </div>
  );
};

const MetricCard = ({ icon: Icon, numKey, labelKey, gold, offset }: { icon: React.ElementType; numKey: string; labelKey: string; gold: boolean; offset: boolean }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`bg-card rounded-xl px-5 md:px-8 py-4 md:py-6 border border-border shadow-navy-sm flex items-center gap-4 md:gap-5 transition-all duration-300 hover:shadow-navy-lg hover:translate-x-2 hover:border-accent/30 ${
        offset ? "lg:translate-x-5 hover:lg:translate-x-7" : ""
      }`}
    >
      <div className={`w-10 h-10 md:w-[52px] md:h-[52px] rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 ${
        gold ? "bg-accent/[0.12] text-gold-dark" : "bg-primary/[0.08] text-primary"
      }`}>
        <Icon className="w-5 h-5 md:w-6 md:h-6" />
      </div>
      <div className="flex flex-col">
        <span className="font-heading text-2xl md:text-3xl font-black text-foreground leading-none">{t(numKey)}</span>
        <span className="text-xs md:text-sm text-muted-foreground mt-0.5">{t(labelKey)}</span>
      </div>
    </div>
  );
};

export default WhyUsSection;
