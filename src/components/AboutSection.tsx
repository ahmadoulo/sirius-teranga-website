import { Building2, Target, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { t } = useTranslation();
  const headRef = useScrollAnimation('fade-in-up', 0);
  const textRef = useScrollAnimation('fade-in-up', 150);
  const statsRef = useScrollAnimation('fade-in-up', 300);

  const stats = [
    { icon: Building2, value: t("about.stat1_value"), label: t("about.stat1_label") },
    { icon: Target, value: t("about.stat2_value"), label: t("about.stat2_label") },
    { icon: Users, value: t("about.stat3_value"), label: t("about.stat3_label") },
  ];

  return (
    <section id="about" className="py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={headRef} className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-heading text-sm font-semibold text-accent uppercase tracking-widest">{t("about.tag")}</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-3 mb-6">{t("about.title")}</h2>
        </div>
        <div ref={textRef} className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-body text-text-muted text-lg leading-relaxed">{t("about.p1")}</p>
          <p className="font-body text-text-muted text-lg leading-relaxed mt-4">{t("about.p2")}</p>
        </div>

        <div ref={statsRef} className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 hover-scale">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="font-heading font-bold text-lg text-foreground">{s.value}</p>
              <p className="font-body text-text-muted text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
