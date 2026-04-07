import { Rocket, Eye, Gem, Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const valueKeys = ["quality", "innovation", "trust", "performance", "engagement"];

const MissionSection = () => {
  const { t } = useTranslation();
  const headRef = useScrollAnimation('fade-in-up', 0);
  const missionRef = useScrollAnimation('fade-in-up', 0);
  const visionRef = useScrollAnimation('fade-in-up', 150);
  const valuesRef = useScrollAnimation('fade-in-up', 300);

  return (
    <section className="py-24 bg-card">
      <div className="max-w-[1200px] mx-auto px-8">
        <div ref={headRef} className="text-center mb-16">
          <div className="inline-block font-heading text-xs font-bold tracking-[0.15em] uppercase text-accent bg-accent/10 border border-accent/30 px-4 py-1.5 rounded-full mb-4">
            {t("mission.tag")}
          </div>
          <h2 className="font-heading font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.2] text-foreground">
            {t("mission.title")} <span className="text-accent">{t("mission.title_accent")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[600px] mx-auto mt-4">{t("mission.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Mission */}
          <div ref={missionRef} className="relative bg-card rounded-xl p-8 border border-border shadow-navy-sm overflow-hidden transition-all duration-300 hover:shadow-navy-lg hover:-translate-y-1.5 hover:border-accent/30 group">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-dark via-accent to-gold-light scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            <div className="w-16 h-16 rounded-2xl bg-[#0B1F3A] dark:bg-accent/20 flex items-center justify-center text-2xl mb-6">
              <Rocket className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-foreground mb-4">{t("mission.mission_title")}</h3>
            <p className="text-muted-foreground text-[0.95rem] leading-relaxed">{t("mission.mission_text")}</p>
          </div>

          {/* Vision */}
          <div ref={visionRef} className="relative bg-card rounded-xl p-8 border border-border shadow-navy-sm overflow-hidden transition-all duration-300 hover:shadow-navy-lg hover:-translate-y-1.5 hover:border-accent/30 group">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-dark via-accent to-gold-light scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-dark to-accent flex items-center justify-center text-2xl mb-6">
              <Eye className="w-7 h-7 text-[#0B1F3A]" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-foreground mb-4">{t("mission.vision_title")}</h3>
            <p className="text-muted-foreground text-[0.95rem] leading-relaxed">{t("mission.vision_text")}</p>
          </div>

          {/* Values */}
          <div ref={valuesRef} className="relative bg-card rounded-xl p-8 border border-border shadow-navy-sm overflow-hidden transition-all duration-300 hover:shadow-navy-lg hover:-translate-y-1.5 hover:border-accent/30 group">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-dark via-accent to-gold-light scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            <div className="w-16 h-16 rounded-2xl bg-[#0B1F3A] dark:bg-accent/20 flex items-center justify-center text-2xl mb-6">
              <Gem className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-foreground mb-4">{t("mission.values_title")}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {valueKeys.map((key) => (
                <span
                  key={key}
                  className="inline-flex items-center gap-1.5 font-heading text-xs font-bold text-foreground bg-foreground/[0.06] border border-foreground/[0.12] px-3 py-1.5 rounded-full transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:border-accent cursor-default"
                >
                  <Check className="w-3 h-3 text-accent" />
                  {t(`mission.values.${key}.title`)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
