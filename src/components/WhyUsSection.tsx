import { Check, TrendingUp, Users, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pointKeys = ["expertise", "results", "solutions", "method"];

const WhyUsSection = () => {
  const { t } = useTranslation();
  const leftRef = useScrollAnimation('fade-in-left', 0);
  const rightRef = useScrollAnimation('fade-in-right', 200);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div ref={leftRef}>
            <div className="inline-block font-heading text-xs font-bold tracking-[0.15em] uppercase text-accent bg-accent/10 border border-accent/30 px-4 py-1.5 rounded-full mb-4">
              {t("whyus.tag")}
            </div>
            <h2 className="font-heading font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.2] text-foreground mb-4">
              {t("whyus.title")}<br />
              <span className="text-accent">{t("whyus.title_accent")}</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{t("whyus.desc")}</p>

            <div className="flex flex-col gap-6">
              {pointKeys.map((key, i) => (
                <WhyItem key={key} pKey={key} delay={i * 100} />
              ))}
            </div>
          </div>

          {/* Right: Metric Cards */}
          <div ref={rightRef} className="flex flex-col gap-5">
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
    <div ref={ref} className="flex gap-4 items-start">
      <div className="w-9 h-9 bg-gradient-to-br from-gold-dark to-accent text-accent-foreground rounded-full flex items-center justify-center flex-shrink-0 shadow-gold">
        <Check className="w-4 h-4 font-bold" />
      </div>
      <div>
        <strong className="block font-heading font-bold text-[0.95rem] text-foreground mb-1">{t(`whyus.points.${pKey}.title`)}</strong>
        <p className="text-sm text-muted-foreground">{t(`whyus.points.${pKey}.desc`)}</p>
      </div>
    </div>
  );
};

const MetricCard = ({ icon: Icon, numKey, labelKey, gold, offset }: { icon: React.ElementType; numKey: string; labelKey: string; gold: boolean; offset: boolean }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`bg-card rounded-xl px-8 py-6 border border-border shadow-navy-sm flex items-center gap-5 transition-all duration-300 hover:shadow-navy-lg hover:translate-x-2 hover:border-accent/30 ${
        offset ? "lg:translate-x-5 hover:lg:translate-x-7" : ""
      }`}
    >
      <div className={`w-[52px] h-[52px] rounded-2xl flex items-center justify-center flex-shrink-0 ${
        gold ? "bg-accent/[0.12] text-gold-dark" : "bg-primary/[0.08] text-primary"
      }`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex flex-col">
        <span className="font-heading text-3xl font-black text-foreground leading-none">{t(numKey)}</span>
        <span className="text-sm text-muted-foreground mt-0.5">{t(labelKey)}</span>
      </div>
    </div>
  );
};

export default WhyUsSection;
