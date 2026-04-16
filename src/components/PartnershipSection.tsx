import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { Check, X, ArrowRight, Shield, Globe, Award } from "lucide-react";

const PartnershipSection = () => {
  const { t } = useTranslation();
  const introRef = useScrollAnimation('fade-in-up', 0);
  const chainRef = useScrollAnimation('fade-in-up', 200);
  const compareRef = useScrollAnimation('fade-in-up', 300);

  const compare = t("partnership.compare", { returnObjects: true }) as Array<{ sans: string; avec: string }>;

  return (
    <section className="py-14 md:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div ref={introRef} className="max-w-[800px] mx-auto text-center mb-12 md:mb-20">
          <div className="inline-block font-heading text-[0.65rem] md:text-xs font-bold tracking-[0.15em] uppercase text-accent bg-accent/10 border border-accent/30 px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-3 md:mb-4">
            {t("partnership.tag")}
          </div>
          <h2 className="font-heading font-extrabold text-[clamp(1.4rem,4vw,2.8rem)] leading-[1.2] text-foreground mb-4 md:mb-6">
            {t("partnership.title")}<br />
            <span className="text-accent">{t("partnership.title_accent")}</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-4">{t("partnership.intro")}</p>
          <p className="text-foreground font-heading font-bold text-base md:text-xl">{t("partnership.intro2")}</p>
        </div>

        {/* Chain of Excellence */}
        <div ref={chainRef} className="mb-12 md:mb-20">
          <h3 className="font-heading font-extrabold text-xl md:text-2xl text-foreground text-center mb-8 md:mb-12">
            {t("partnership.chain_title")}
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            <ChainCard icon={Globe} name={t("partnership.chain_hexagon")} desc={t("partnership.chain_hexagon_desc")} accent={false} />
            <ArrowRight className="w-6 h-6 text-accent rotate-90 md:rotate-0 flex-shrink-0" />
            <ChainCard icon={Award} name={t("partnership.chain_talan")} desc={t("partnership.chain_talan_desc")} accent={false} />
            <ArrowRight className="w-6 h-6 text-accent rotate-90 md:rotate-0 flex-shrink-0" />
            <ChainCard icon={Shield} name={t("partnership.chain_stc")} desc={t("partnership.chain_stc_desc")} accent />
          </div>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-[800px] mx-auto text-center mt-8">
            {t("partnership.chain_guarantee")}
          </p>
        </div>

        {/* Comparison Table */}
        <div ref={compareRef}>
          <h3 className="font-heading font-extrabold text-xl md:text-2xl text-foreground text-center mb-8 md:mb-12">
            {t("partnership.compare_title")}
          </h3>
          <div className="max-w-[900px] mx-auto">
            {/* Header */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
              <div className="bg-destructive/10 text-destructive font-heading font-bold text-xs md:text-sm uppercase tracking-wider text-center py-3 rounded-lg">
                {t("partnership.sans_stc")}
              </div>
              <div className="bg-green-500/10 text-green-600 dark:text-green-400 font-heading font-bold text-xs md:text-sm uppercase tracking-wider text-center py-3 rounded-lg">
                {t("partnership.avec_stc")}
              </div>
            </div>
            {/* Rows */}
            <div className="flex flex-col gap-2 md:gap-3">
              {compare.map((row, i) => (
                <div key={i} className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="flex items-start gap-2 md:gap-3 bg-card border border-border rounded-lg p-3 md:p-4">
                    <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-muted-foreground">{row.sans}</span>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3 bg-card border border-accent/20 rounded-lg p-3 md:p-4">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-foreground font-medium">{row.avec}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10 md:mt-16">
            <Link
              to="/diagnostic"
              className="inline-flex items-center justify-center gap-2 font-heading text-sm font-bold tracking-[0.05em] uppercase bg-accent text-accent-foreground px-7 md:px-8 py-3 md:py-3.5 rounded-full shadow-gold hover:bg-gold-light hover:-translate-y-0.5 transition-all duration-300"
            >
              {t("partnership.cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChainCard = ({ icon: Icon, name, desc, accent }: { icon: React.ElementType; name: string; desc: string; accent: boolean }) => (
  <div className={`flex flex-col items-center text-center px-6 md:px-8 py-5 md:py-6 rounded-xl border ${
    accent ? "bg-accent/10 border-accent/30 shadow-gold" : "bg-card border-border"
  } min-w-[200px] md:min-w-[240px]`}>
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
      accent ? "bg-accent/20 text-gold-dark" : "bg-primary/10 text-primary"
    }`}>
      <Icon className="w-6 h-6" />
    </div>
    <strong className="font-heading font-bold text-sm md:text-base text-foreground mb-1">{name}</strong>
    <span className="text-xs md:text-sm text-muted-foreground">{desc}</span>
  </div>
);

export default PartnershipSection;