import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { Factory, Building2, MapPin, Briefcase } from "lucide-react";

interface Angle {
  label: string;
  title: string;
  subtitle: string;
  companies: Array<{ name: string; detail: string }>;
}

interface Sector {
  sector: string;
  missions: string;
  refs: string;
}

const angleIcons = [Factory, Building2, MapPin];

const ReferencesSection = () => {
  const { t } = useTranslation();
  const introRef = useScrollAnimation('fade-in-up', 0);
  const anglesRef = useScrollAnimation('fade-in-up', 200);
  const tableRef = useScrollAnimation('fade-in-up', 300);

  const angles = t("references.angles", { returnObjects: true }) as Angle[];
  const sectors = t("references.sectors", { returnObjects: true }) as Sector[];

  return (
    <section className="py-14 md:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div ref={introRef} className="max-w-[800px] mx-auto text-center mb-12 md:mb-20">
          <div className="inline-block font-heading text-[0.65rem] md:text-xs font-bold tracking-[0.15em] uppercase text-accent bg-accent/10 border border-accent/30 px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-3 md:mb-4">
            {t("references.tag")}
          </div>
          <h2 className="font-heading font-extrabold text-[clamp(1.4rem,4vw,2.8rem)] leading-[1.2] text-foreground mb-4 md:mb-6">
            {t("references.title")}<br />
            <span className="text-accent">{t("references.title_accent")}</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed">{t("references.intro")}</p>
        </div>

        {/* 3 Angles */}
        <div ref={anglesRef} className="grid md:grid-cols-3 gap-5 md:gap-6 mb-12 md:mb-20">
          {angles.map((angle, i) => {
            const Icon = angleIcons[i];
            return (
              <div key={i} className="bg-card border border-border rounded-xl p-5 md:p-6 hover:border-accent/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="font-heading text-[0.6rem] font-bold uppercase tracking-wider text-accent">{angle.label}</span>
                    <h3 className="font-heading font-bold text-sm md:text-base text-foreground leading-tight">{angle.title}</h3>
                    <span className="text-xs text-muted-foreground">{angle.subtitle}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {angle.companies.map((c, j) => (
                    <div key={j} className="bg-muted/50 border border-border rounded-lg px-3 py-2 text-center min-w-[90px]">
                      <strong className="block font-heading text-xs md:text-sm font-bold text-foreground">{c.name}</strong>
                      <span className="text-[0.6rem] md:text-[0.65rem] text-muted-foreground italic">{c.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Sector Table */}
        <div ref={tableRef}>
          <h3 className="font-heading font-extrabold text-xl md:text-2xl text-foreground text-center mb-2">
            {t("references.sectors_title")}
          </h3>
          <p className="text-muted-foreground text-sm text-center mb-8">{t("references.sectors_subtitle")}</p>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary/5 dark:bg-primary/10">
                  <th className="font-heading text-xs uppercase tracking-wider text-foreground text-left px-5 py-3 border-b border-border">Secteur</th>
                  <th className="font-heading text-xs uppercase tracking-wider text-foreground text-left px-5 py-3 border-b border-border">Types de missions</th>
                  <th className="font-heading text-xs uppercase tracking-wider text-foreground text-left px-5 py-3 border-b border-border">Références clés</th>
                </tr>
              </thead>
              <tbody>
                {sectors.map((s, i) => (
                  <tr key={i} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-accent flex-shrink-0" />
                        <strong className="font-heading text-sm font-bold text-foreground">{s.sector}</strong>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-sm text-muted-foreground">{s.missions}</td>
                    <td className="px-5 py-3 text-sm font-medium text-foreground">{s.refs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden flex flex-col gap-3">
            {sectors.map((s, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-accent flex-shrink-0" />
                  <strong className="font-heading text-sm font-bold text-foreground">{s.sector}</strong>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{s.missions}</p>
                <p className="text-xs font-medium text-foreground">{s.refs}</p>
              </div>
            ))}
          </div>

          {/* Micro case */}
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 md:p-5 mt-6 md:mt-8">
            <p className="text-sm text-muted-foreground italic">"{t("references.micro_case")}"</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-16 bg-gradient-to-br from-[#071528] via-[#0B1F3A] to-[#102848] rounded-2xl p-6 md:p-10">
          <h3 className="font-heading font-bold text-lg md:text-xl text-white mb-2">{t("references.cta_title")}</h3>
          <p className="text-white/80 text-sm md:text-base mb-6">{t("references.cta_desc")}</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 font-heading text-sm font-bold tracking-[0.05em] uppercase bg-accent text-accent-foreground px-7 md:px-8 py-3 md:py-3.5 rounded-full shadow-gold hover:bg-gold-light hover:-translate-y-0.5 transition-all duration-300"
          >
            {t("references.cta_button")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;