import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { ClipboardCheck, BarChart3, FileText, Check, Users, Target, Mail, Phone, MapPin, Shield } from "lucide-react";

const DiagnosticSection = () => {
  const { t } = useTranslation();
  const introRef = useScrollAnimation('fade-in-up', 0);
  const whatRef = useScrollAnimation('fade-in-up', 200);
  const whoRef = useScrollAnimation('fade-in-up', 300);
  const ctaRef = useScrollAnimation('fade-in-up', 400);

  const criteria = t("diagnostic.criteria", { returnObjects: true }) as string[];
  const sectors = t("diagnostic.sectors", { returnObjects: true }) as string[];

  return (
    <section className="py-14 md:py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div ref={introRef} className="max-w-[800px] mx-auto text-center mb-12 md:mb-20">
          <div className="inline-block font-heading text-[0.65rem] md:text-xs font-bold tracking-[0.15em] uppercase text-accent bg-accent/10 border border-accent/30 px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-3 md:mb-4">
            {t("diagnostic.tag")}
          </div>
          <h2 className="font-heading font-extrabold text-[clamp(1.4rem,4vw,2.8rem)] leading-[1.2] text-foreground mb-4 md:mb-6">
            {t("diagnostic.title")}<br />
            <span className="text-accent">{t("diagnostic.title_accent")}</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-4">{t("diagnostic.intro")}</p>
          <p className="text-foreground font-heading font-semibold text-sm md:text-base">{t("diagnostic.intro2")}</p>
        </div>

        {/* What you get */}
        <div ref={whatRef} className="mb-12 md:mb-20">
          <h3 className="font-heading font-extrabold text-xl md:text-2xl text-foreground text-center mb-8 md:mb-12">
            {t("diagnostic.what_title")}
          </h3>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-[900px] mx-auto">
            <DayCard
              icon={ClipboardCheck}
              title={t("diagnostic.day1_title")}
              desc={t("diagnostic.day1_desc")}
              number="1"
            />
            <DayCard
              icon={BarChart3}
              title={t("diagnostic.day2_title")}
              desc={t("diagnostic.day2_desc")}
              number="2"
            />
          </div>
          <div className="max-w-[900px] mx-auto mt-5 md:mt-6 bg-accent/10 border border-accent/30 rounded-xl p-5 md:p-6 flex items-start gap-3">
            <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm md:text-base text-foreground font-medium">{t("diagnostic.deliverable")}</p>
          </div>
        </div>

        {/* Who is it for */}
        <div ref={whoRef} className="mb-12 md:mb-20">
          <h3 className="font-heading font-extrabold text-xl md:text-2xl text-foreground text-center mb-8 md:mb-12">
            {t("diagnostic.who_title")}
          </h3>
          <div className="grid md:grid-cols-2 gap-5 md:gap-8 max-w-[900px] mx-auto">
            {/* Criteria */}
            <div className="bg-card border border-border rounded-xl p-5 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-accent" />
                <h4 className="font-heading font-bold text-sm md:text-base text-foreground">{t("diagnostic.criteria_title")}</h4>
              </div>
              <ul className="flex flex-col gap-3">
                {criteria.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-muted-foreground">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Sectors */}
            <div className="bg-card border border-border rounded-xl p-5 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-accent" />
                <h4 className="font-heading font-bold text-sm md:text-base text-foreground">{t("diagnostic.sectors_title")}</h4>
              </div>
              <ul className="flex flex-col gap-3">
                {sectors.map((s, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                    <span className="text-xs md:text-sm text-muted-foreground">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div ref={ctaRef} className="bg-gradient-to-br from-[#071528] via-[#0B1F3A] to-[#102848] rounded-2xl p-6 md:p-12 text-center">
          <div className="inline-flex items-center gap-2 font-heading text-[0.6rem] md:text-xs font-bold tracking-wider uppercase text-accent bg-accent/10 border border-accent/30 px-3 py-1.5 rounded-full mb-4">
            <Shield className="w-3 h-3" />
            {t("diagnostic.badge")}
          </div>
          <h3 className="font-heading font-extrabold text-xl md:text-2xl text-white mb-3">
            {t("diagnostic.cta_title")}
          </h3>
          <p className="text-white/80 text-sm md:text-base mb-6">{t("diagnostic.cta_desc")}</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 font-heading text-sm font-bold tracking-[0.05em] uppercase bg-accent text-accent-foreground px-8 md:px-10 py-3.5 md:py-4 rounded-full shadow-gold hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(212,175,55,0.45)] transition-all duration-300"
          >
            {t("diagnostic.cta_button")}
          </Link>
          <p className="text-white/60 text-xs mt-4">{t("diagnostic.cta_sub")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mt-6 pt-6 border-t border-white/10">
            <a href="mailto:contact@siriusteranga.com" className="flex items-center gap-2 text-white/80 text-sm hover:text-accent transition-colors">
              <Mail className="w-4 h-4 text-accent" /> contact@siriusteranga.com
            </a>
            <a href="tel:+221787888055" className="flex items-center gap-2 text-white/80 text-sm hover:text-accent transition-colors">
              <Phone className="w-4 h-4 text-accent" /> +221 78 788 80 55
            </a>
            <span className="flex items-center gap-2 text-white/80 text-sm">
              <MapPin className="w-4 h-4 text-accent" /> Dakar, Sénégal
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const DayCard = ({ icon: Icon, title, desc, number }: { icon: React.ElementType; title: string; desc: string; number: string }) => (
  <div className="bg-card border border-border rounded-xl p-5 md:p-6 hover:border-accent/30 transition-all duration-300">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center relative">
        <Icon className="w-6 h-6 text-accent" />
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground rounded-full text-[0.6rem] font-bold flex items-center justify-center">
          {number}
        </span>
      </div>
      <h4 className="font-heading font-bold text-sm md:text-base text-foreground">{title}</h4>
    </div>
    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{desc}</p>
  </div>
);

export default DiagnosticSection;