import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { Check, AlertTriangle, Wrench, ChevronDown, ChevronUp, Building2, Settings, Database } from "lucide-react";
import { useState } from "react";

interface Domain {
  title: string;
  objective: string;
  problems: string[];
  interventions: string[];
  results: string[];
}

const ExpertisesSection = () => {
  const { t } = useTranslation();
  const introRef = useScrollAnimation('fade-in-up', 0);
  const domainsRef = useScrollAnimation('fade-in-up', 200);
  const integratedRef = useScrollAnimation('fade-in-up', 300);

  const domains = t("expertises.domains", { returnObjects: true }) as Domain[];

  return (
    <section className="py-14 md:py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div ref={introRef} className="max-w-[800px] mx-auto text-center mb-12 md:mb-20">
          <div className="inline-block font-heading text-[0.65rem] md:text-xs font-bold tracking-[0.15em] uppercase text-accent bg-accent/10 border border-accent/30 px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-3 md:mb-4">
            {t("expertises.tag")}
          </div>
          <h2 className="font-heading font-extrabold text-[clamp(1.4rem,4vw,2.8rem)] leading-[1.2] text-foreground mb-4 md:mb-6">
            {t("expertises.title")}<br />
            <span className="text-accent">{t("expertises.title_accent")}</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-4">{t("expertises.intro")}</p>
          <p className="text-foreground font-heading font-semibold text-sm md:text-base">{t("expertises.intro2")}</p>
        </div>

        {/* Domains */}
        <div ref={domainsRef} className="flex flex-col gap-5 md:gap-6 mb-12 md:mb-20">
          {domains.map((domain, i) => (
            <DomainCard key={i} domain={domain} index={i} />
          ))}
        </div>

        {/* Integrated Approach */}
        <div ref={integratedRef} className="bg-gradient-to-br from-[#071528] via-[#0B1F3A] to-[#102848] rounded-2xl p-6 md:p-10 text-white mb-10 md:mb-16">
          <h3 className="font-heading font-extrabold text-lg md:text-2xl mb-4 text-center">
            {t("expertises.integrated_title")}
          </h3>
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-[700px] mx-auto text-center mb-8">
            {t("expertises.integrated_desc")}
          </p>
          <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-[600px] mx-auto">
            <PillarCard icon={Building2} title={t("expertises.pillar_org")} desc={t("expertises.pillar_org_desc")} />
            <PillarCard icon={Settings} title={t("expertises.pillar_process")} desc={t("expertises.pillar_process_desc")} />
            <PillarCard icon={Database} title={t("expertises.pillar_systems")} desc={t("expertises.pillar_systems_desc")} />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-card border border-border rounded-2xl p-6 md:p-10">
          <h3 className="font-heading font-bold text-lg md:text-xl text-foreground mb-2">{t("expertises.cta_title")}</h3>
          <p className="text-muted-foreground text-sm md:text-base mb-6">{t("expertises.cta_desc")}</p>
          <Link
            to="/diagnostic"
            className="inline-flex items-center justify-center gap-2 font-heading text-sm font-bold tracking-[0.05em] uppercase bg-accent text-accent-foreground px-7 md:px-8 py-3 md:py-3.5 rounded-full shadow-gold hover:bg-gold-light hover:-translate-y-0.5 transition-all duration-300"
          >
            {t("expertises.cta_button")}
          </Link>
        </div>
      </div>
    </section>
  );
};

const DomainCard = ({ domain, index }: { domain: Domain; index: number }) => {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-accent/30">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 md:px-8 py-4 md:py-5 text-left"
        aria-expanded={open}
      >
        <div>
          <span className="font-heading text-accent font-bold text-xs md:text-sm">{index + 1}.</span>
          <h3 className="font-heading font-bold text-sm md:text-lg text-foreground inline ml-2">{domain.title}</h3>
          <p className="text-xs md:text-sm text-muted-foreground mt-1 italic">{domain.objective}</p>
        </div>
        {open ? <ChevronUp className="w-5 h-5 text-accent flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-5 md:px-8 pb-5 md:pb-8 grid md:grid-cols-3 gap-4 md:gap-6 border-t border-border pt-4 md:pt-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-foreground">Problématiques</h4>
            </div>
            <ul className="flex flex-col gap-1.5">
              {domain.problems.map((p, i) => (
                <li key={i} className="text-xs md:text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">—</span> {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Wrench className="w-4 h-4 text-primary" />
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-foreground">Interventions</h4>
            </div>
            <ul className="flex flex-col gap-1.5">
              {domain.interventions.map((p, i) => (
                <li key={i} className="text-xs md:text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-muted-foreground mt-1">—</span> {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-foreground">Résultats</h4>
            </div>
            <ul className="flex flex-col gap-1.5">
              {domain.results.map((p, i) => (
                <li key={i} className="text-xs md:text-sm text-foreground font-medium flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const PillarCard = ({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) => (
  <div className="flex flex-col items-center text-center p-3 md:p-5 bg-white/5 border border-white/10 rounded-xl">
    <Icon className="w-6 h-6 md:w-8 md:h-8 text-accent mb-2" />
    <strong className="font-heading font-bold text-xs md:text-sm text-white mb-1">{title}</strong>
    <span className="text-[0.65rem] md:text-xs text-white/60">{desc}</span>
  </div>
);

export default ExpertisesSection;