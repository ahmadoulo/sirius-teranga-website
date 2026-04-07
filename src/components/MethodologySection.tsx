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
    <div ref={ref} className="relative flex flex-col items-center text-center gap-5 group">
      <span className="font-heading text-[0.7rem] font-black tracking-[0.15em] text-accent bg-accent/10 border border-accent/30 px-3 py-1 rounded-full">
        {num}
      </span>
      <div className="flex flex-col items-center gap-4">
        <div
          className={`w-[70px] h-[70px] rounded-full flex items-center justify-center text-2xl shadow-navy-lg border-[3px] border-card relative z-[1] transition-all duration-300 group-hover:scale-110 group-hover:shadow-navy-xl ${
            gold
              ? "bg-gradient-to-br from-gold-dark to-accent text-accent-foreground"
              : "bg-primary text-white"
          }`}
        >
          <Icon className="w-7 h-7" />
        </div>
        <h3 className="font-heading font-extrabold text-lg text-foreground">{t(`methodology.steps.${sKey}.title`)}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{t(`methodology.steps.${sKey}.desc`)}</p>
      </div>
    </div>
  );
};

const MethodologySection = () => {
  const { t } = useTranslation();
  const headRef = useScrollAnimation('fade-in-up', 0);

  return (
    <section id="methodology" className="py-24 bg-card">
      <div className="max-w-[1200px] mx-auto px-8">
        <div ref={headRef} className="text-center mb-16">
          <div className="inline-block font-heading text-xs font-bold tracking-[0.15em] uppercase text-accent bg-accent/10 border border-accent/30 px-4 py-1.5 rounded-full mb-4">
            {t("methodology.tag")}
          </div>
          <h2 className="font-heading font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.2] text-foreground">
            {t("methodology.title")} <span className="text-accent">{t("methodology.title_accent")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[600px] mx-auto mt-4">{t("methodology.subtitle")}</p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
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
