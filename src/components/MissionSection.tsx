import { Compass, Eye, Award, Zap, Shield, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AnimatedCard = ({ icon: Icon, title, text, delay }: { icon: React.ElementType; title: string; text: string; delay: number }) => {
  const ref = useScrollAnimation<HTMLDivElement>('fade-in-up', delay);
  return (
    <div ref={ref} className="bg-surface rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h3 className="font-heading font-bold text-xl text-foreground mb-3">{title}</h3>
      <p className="font-body text-text-muted leading-relaxed">{text}</p>
    </div>
  );
};

const ValueCard = ({ icon: Icon, titleKey, descKey, delay }: { icon: React.ElementType; titleKey: string; descKey: string; delay: number }) => {
  const ref = useScrollAnimation<HTMLDivElement>('scale-in', delay);
  const { t } = useTranslation();
  return (
    <div ref={ref} className="bg-surface rounded-lg p-5 border border-border text-center hover:border-accent/30 transition-colors">
      <Icon className="w-6 h-6 text-accent mx-auto mb-3" />
      <h4 className="font-heading font-semibold text-sm text-foreground mb-1">{t(titleKey)}</h4>
      <p className="font-body text-text-muted text-xs leading-relaxed">{t(descKey)}</p>
    </div>
  );
};

const MissionSection = () => {
  const { t } = useTranslation();
  const headRef = useScrollAnimation('fade-in-up', 0);

  const cards = [
    { icon: Compass, title: t("mission.mission_title"), text: t("mission.mission_text") },
    { icon: Eye, title: t("mission.vision_title"), text: t("mission.vision_text") },
  ];

  const values = [
    { icon: Award, key: "quality" },
    { icon: Zap, key: "innovation" },
    { icon: Shield, key: "trust" },
    { icon: Zap, key: "performance" },
    { icon: Heart, key: "engagement" },
  ];

  return (
    <section className="py-24 bg-surface-alt">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={headRef} className="text-center mb-14">
          <span className="font-heading text-sm font-semibold text-accent uppercase tracking-widest">{t("mission.tag")}</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-3">{t("mission.title")}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {cards.map((c, i) => (
            <AnimatedCard key={c.title} icon={c.icon} title={c.title} text={c.text} delay={i * 150} />
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading font-bold text-xl text-foreground mb-6 text-center">{t("mission.values_title")}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((v, i) => (
              <ValueCard key={v.key} icon={v.icon} titleKey={`mission.values.${v.key}.title`} descKey={`mission.values.${v.key}.desc`} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
