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
    <section className="py-12 md:py-24 bg-card border-t border-border/40">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div ref={headRef} className="text-center mb-8 md:mb-16">
          <div className="inline-block font-heading text-[0.65rem] md:text-xs font-bold tracking-[0.15em] uppercase text-accent bg-accent/10 border border-accent/30 px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-3 md:mb-4">
            {t("mission.tag")}
          </div>
          <h2 className="font-heading font-extrabold text-[clamp(1.4rem,4vw,2.8rem)] leading-[1.2] text-foreground max-w-[12ch] md:max-w-none mx-auto">
            {t("mission.title")} <span className="text-accent">{t("mission.title_accent")}</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-[600px] mx-auto mt-3 md:mt-4">{t("mission.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {/* Mission */}
          <div ref={missionRef} className="relative bg-card rounded-xl p-5 md:p-8 border border-border shadow-navy-sm overflow-hidden transition-all duration-300 hover:shadow-navy-lg hover:-translate-y-1.5 hover:border-accent/30 group">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-dark via-accent to-gold-light scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#0B1F3A] dark:bg-accent/20 flex items-center justify-center mb-4 md:mb-6">
              <Rocket className="w-5 h-5 md:w-7 md:h-7 text-accent" />
            </div>
            <h3 className="font-heading font-extrabold text-base md:text-xl text-foreground mb-3 md:mb-4">{t("mission.mission_title")}</h3>
            <p className="text-muted-foreground text-[0.85rem] md:text-[0.95rem] leading-relaxed">{t("mission.mission_text")}</p>
          </div>

          {/* Vision */}
          <div ref={visionRef} className="relative bg-card rounded-xl p-5 md:p-8 border border-border shadow-navy-sm overflow-hidden transition-all duration-300 hover:shadow-navy-lg hover:-translate-y-1.5 hover:border-accent/30 group">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-dark via-accent to-gold-light scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-gold-dark to-accent flex items-center justify-center mb-4 md:mb-6">
              <Eye className="w-5 h-5 md:w-7 md:h-7 text-[#0B1F3A]" />
            </div>
            <h3 className="font-heading font-extrabold text-base md:text-xl text-foreground mb-3 md:mb-4">{t("mission.vision_title")}</h3>
            <p className="text-muted-foreground text-[0.85rem] md:text-[0.95rem] leading-relaxed">{t("mission.vision_text")}</p>
          </div>

          {/* Values */}
          <div ref={valuesRef} className="relative bg-card rounded-xl p-5 md:p-8 border border-border shadow-navy-sm overflow-hidden transition-all duration-300 hover:shadow-navy-lg hover:-translate-y-1.5 hover:border-accent/30 group">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-dark via-accent to-gold-light scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[#0B1F3A] dark:bg-accent/20 flex items-center justify-center mb-4 md:mb-6">
              <Gem className="w-5 h-5 md:w-7 md:h-7 text-accent" />
            </div>
            <h3 className="font-heading font-extrabold text-base md:text-xl text-foreground mb-3 md:mb-4">{t("mission.values_title")}</h3>
            <div className="flex flex-wrap gap-1.5 md:gap-2 mt-2">
              {valueKeys.map((key) => (
                <span
                  key={key}
                  className="inline-flex items-center gap-1 md:gap-1.5 font-heading text-[0.65rem] md:text-xs font-bold text-foreground bg-foreground/[0.06] border border-foreground/[0.12] px-2 md:px-3 py-1 md:py-1.5 rounded-full transition-all duration-200 hover:bg-accent hover:text-accent-foreground hover:border-accent cursor-default"
                >
                  <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-accent" />
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
