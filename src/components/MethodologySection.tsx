import { Search, LayoutList, Settings2, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stepKeys = [
  { icon: Search, num: "01", key: "analyze" },
  { icon: LayoutList, num: "02", key: "structure" },
  { icon: Settings2, num: "03", key: "optimize" },
  { icon: Rocket, num: "04", key: "transform" },
];

const StepCard = ({ icon: Icon, num, sKey, delay, isLast }: { icon: React.ElementType; num: string; sKey: string; delay: number; isLast: boolean }) => {
  const ref = useScrollAnimation<HTMLDivElement>('fade-in-up', delay);
  const { t } = useTranslation();
  return (
    <div ref={ref} className="text-center relative">
      {!isLast && (
        <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-primary-foreground/20" />
      )}
      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 relative z-10 bg-accent/20 dark:border dark:border-accent/40 dark:bg-transparent">
        <Icon className="w-7 h-7 text-accent" />
      </div>
      <span className="font-heading text-xs font-bold text-accent tracking-widest">{num}</span>
      <h3 className="font-heading font-bold text-xl mt-2 mb-3 text-foreground dark:text-accent">{t(`methodology.steps.${sKey}.title`)}</h3>
      <p className="font-body text-muted-foreground text-sm leading-relaxed">{t(`methodology.steps.${sKey}.desc`)}</p>
    </div>
  );
};

const MethodologySection = () => {
  const { t } = useTranslation();
  const headRef = useScrollAnimation('fade-in-up', 0);

  return (
    <section id="methodology" className="py-24 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={headRef} className="text-center mb-16">
          <span className="font-heading text-sm font-semibold text-accent uppercase tracking-widest">{t("methodology.tag")}</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mt-3 mb-4">{t("methodology.title")}</h2>
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl mx-auto">{t("methodology.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stepKeys.map((s, i) => (
            <StepCard key={s.num} icon={s.icon} num={s.num} sKey={s.key} delay={i * 150} isLast={i === stepKeys.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
