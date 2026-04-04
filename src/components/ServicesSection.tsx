import { BarChart3, Cog, GraduationCap, LayoutGrid, MonitorSmartphone, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const serviceKeys = [
  { icon: LayoutGrid, key: "org" },
  { icon: MonitorSmartphone, key: "digital" },
  { icon: Cog, key: "process" },
  { icon: BarChart3, key: "si" },
  { icon: Shield, key: "iso" },
  { icon: GraduationCap, key: "training" },
];

const ServiceCard = ({ icon: Icon, sKey, delay }: { icon: React.ElementType; sKey: string; delay: number }) => {
  const ref = useScrollAnimation<HTMLDivElement>('fade-in-up', delay);
  const { t } = useTranslation();
  return (
    <div ref={ref} className="group bg-surface-alt rounded-lg p-8 border border-border hover:border-accent/30 hover:shadow-lg transition-all">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
        <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
      </div>
      <h3 className="font-heading font-bold text-lg text-foreground mb-3">{t(`services.items.${sKey}.title`)}</h3>
      <p className="font-body text-text-muted leading-relaxed text-sm">{t(`services.items.${sKey}.desc`)}</p>
    </div>
  );
};

const ServicesSection = () => {
  const { t } = useTranslation();
  const headRef = useScrollAnimation('fade-in-up', 0);

  return (
    <section id="services" className="py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={headRef} className="text-center mb-14">
          <span className="font-heading text-sm font-semibold text-accent uppercase tracking-widest">{t("services.tag")}</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-3 mb-4">{t("services.title")}</h2>
          <p className="font-body text-text-muted text-lg max-w-2xl mx-auto">{t("services.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {serviceKeys.map((s, i) => (
            <ServiceCard key={s.key} icon={s.icon} sKey={s.key} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
