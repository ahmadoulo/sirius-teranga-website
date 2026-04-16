import { Search, Compass, BarChart3, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stepKeys = [
  { icon: Search, num: "01", key: "analyze", gold: false },
  { icon: Compass, num: "02", key: "structure", gold: true },
  { icon: BarChart3, num: "03", key: "optimize", gold: false },
  { icon: Rocket, num: "04", key: "transform", gold: true },
];

const StepCard = ({ icon: Icon, num, sKey, delay, gold }: { icon: React.ElementType; num: string; sKey: string; delay: number; gold: boolean }) => {
  const ref = useScrollAnimation<HTMLDivElement>('fade-in-up', delay);
  const { t } = useTranslation();
  return (
    <div ref={ref} className="relative flex flex-col items-center text-center gap-3 md:gap-5 group">
      <span className="font-heading text-[0.6rem] md:text-[0.7rem] font-black tracking-[0.15em] text-accent bg-accent/10 border border-accent/30 px-2.5 md:px-3 py-0.5 md:py-1 rounded-full">
        {num}
      </span>
      <div className="flex flex-col items-center gap-3 md:gap-4">
        <div
          className={`w-14 h-14 md:w-[70px] md:h-[70px] rounded-full flex items-center justify-center shadow-navy-lg border-[3px] border-card relative z-[1] transition-all duration-300 group-hover:scale-110 group-hover:shadow-navy-xl ${
            gold
              ? "bg-gradient-to-br from-gold-dark to-accent text-accent-foreground"
              : "bg-primary text-white"
          }`}
        >
          <Icon className="w-5 h-5 md:w-7 md:h-7" />
        </div>
        <h3 className="font-heading font-extrabold text-[0.9rem] md:text-lg text-foreground">{t(`methodology.steps.${sKey}.title`)}</h3>
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{t(`methodology.steps.${sKey}.desc`)}</p>
      </div>
    </div>
  );
};

const MethodologySection = () => {
  const { t } = useTranslation();
  const headRef = useScrollAnimation('fade-in-up', 0);

  return (
    <section id="methodology" className="py-14 md:py-24 bg-card">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div ref={headRef} className="text-center mb-10 md:mb-16">
          <div className="inline-block font-heading text-[0.65rem] md:text-xs font-bold tracking-[0.15em] uppercase text-accent bg-accent/10 border border-accent/30 px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-3 md:mb-4">
            {t("methodology.tag")}
          </div>
          <h2 className="font-heading font-extrabold text-[clamp(1.4rem,4vw,2.8rem)] leading-[1.2] text-foreground">
            {t("methodology.title")} <span className="text-accent">{t("methodology.title_accent")}</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-[600px] mx-auto mt-3 md:mt-4">{t("methodology.subtitle")}</p>
        </div>

        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 max-w-5xl mx-auto">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[2.5rem] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-[2px] bg-gradient-to-r from-primary via-accent to-primary z-0" />

          {stepKeys.map((s, i) => (
            <StepCard key={s.num} icon={s.icon} num={s.num} sKey={s.key} delay={i * 150} gold={s.gold} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
