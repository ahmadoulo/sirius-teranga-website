import { LayoutGrid, MonitorSmartphone, Wrench, Server, GitBranch, GraduationCap, Handshake, ArrowRight, TrendingUp, Gauge, PiggyBank, Activity } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const serviceKeys = [
  { icon: LayoutGrid, key: "org" },
  { icon: MonitorSmartphone, key: "digital" },
  { icon: Wrench, key: "gmao" },
  { icon: Server, key: "si" },
  { icon: GitBranch, key: "process" },
  { icon: GraduationCap, key: "training" },
];

const ServiceCard = ({ icon: Icon, sKey, delay }: { icon: React.ElementType; sKey: string; delay: number }) => {
  const ref = useScrollAnimation<HTMLDivElement>('fade-in-up', delay);
  const { t } = useTranslation();
  return (
    <div
      ref={ref}
      className="relative bg-card rounded-xl p-5 md:p-8 border border-border shadow-navy-sm transition-all duration-300 cursor-pointer overflow-hidden group hover:-translate-y-2 hover:shadow-navy-xl
        before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[#0B1F3A] before:to-[#102848] before:opacity-0 before:transition-opacity before:duration-300 before:z-0
        hover:before:opacity-100"
    >
      <div className="relative z-[1]">
        <div className="w-11 h-11 md:w-[60px] md:h-[60px] bg-primary/[0.06] rounded-xl md:rounded-2xl flex items-center justify-center text-primary mb-4 md:mb-6 transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
          <Icon className="w-5 h-5 md:w-7 md:h-7" />
        </div>
        <h3 className="font-heading font-extrabold text-[0.95rem] md:text-lg text-foreground mb-3 md:mb-4 transition-colors duration-300 group-hover:text-white">
          {t(`services.items.${sKey}.title`)}
        </h3>
        <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-4 md:mb-6 transition-colors duration-300 group-hover:text-white/75">
          {t(`services.items.${sKey}.desc`)}
        </p>
        <span className="inline-flex items-center gap-1.5 font-heading text-[0.65rem] md:text-xs font-bold tracking-[0.05em] uppercase text-accent transition-colors duration-200">
          {t("services.learn_more")} <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const { t } = useTranslation();
  const headRef = useScrollAnimation('fade-in-up', 0);
  const ctaRef = useScrollAnimation('fade-in-up', 500);

  return (
    <section id="services" className="py-14 md:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div ref={headRef} className="text-center mb-10 md:mb-16">
          <div className="inline-block font-heading text-[0.65rem] md:text-xs font-bold tracking-[0.15em] uppercase text-accent bg-accent/10 border border-accent/30 px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-3 md:mb-4">
            {t("services.tag")}
          </div>
          <h2 className="font-heading font-extrabold text-[clamp(1.4rem,4vw,2.8rem)] leading-[1.2] text-foreground">
            {t("services.title")} <span className="text-accent">{t("services.title_accent")}</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-[600px] mx-auto mt-3 md:mt-4">{t("services.subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {serviceKeys.map((s, i) => (
            <ServiceCard key={s.key} icon={s.icon} sKey={s.key} delay={i * 100} />
          ))}

          {/* CTA Card */}
          <div
            ref={ctaRef}
            className="relative bg-gradient-to-br from-[#0B1F3A] to-[#102848] rounded-xl p-5 md:p-8 border border-transparent flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-navy-xl hover:border-accent overflow-hidden"
          >
            <div className="text-center z-[1]">
              <Handshake className="w-8 h-8 md:w-10 md:h-10 text-accent mx-auto mb-3 md:mb-4" />
              <h3 className="font-heading font-extrabold text-base md:text-xl text-white mb-3 md:mb-4">{t("services.cta_title")}</h3>
              <p className="text-white/80 text-xs md:text-sm mb-4 md:mb-6">{t("services.cta_desc")}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-heading text-xs md:text-sm font-bold tracking-[0.05em] uppercase bg-accent text-accent-foreground px-5 md:px-6 py-2.5 md:py-3 rounded-full shadow-gold hover:bg-gold-light transition-all duration-300"
              >
                {t("services.cta_button")}
              </Link>
            </div>
          </div>
        </div>

        {/* GMAO Gains block */}
        <GmaoGains />
      </div>
    </section>
  );
};

const gmaoGainKeys = [
  { icon: TrendingUp, key: "productivity" },
  { icon: Gauge, key: "efficiency" },
  { icon: PiggyBank, key: "costs" },
  { icon: Activity, key: "availability" },
];

const GmaoGains = () => {
  const { t } = useTranslation();
  const headRef = useScrollAnimation('fade-in-up', 0);
  return (
    <div className="mt-16 md:mt-24">
      <div ref={headRef} className="text-center mb-8 md:mb-12">
        <div className="inline-block font-heading text-[0.65rem] md:text-xs font-bold tracking-[0.15em] uppercase text-accent bg-accent/10 border border-accent/30 px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-3 md:mb-4">
          {t("services.gmao_gains.tag")}
        </div>
        <h3 className="font-heading font-extrabold text-[clamp(1.2rem,3.2vw,2.2rem)] leading-[1.2] text-foreground">
          {t("services.gmao_gains.title")} <span className="text-accent">{t("services.gmao_gains.title_accent")}</span>
        </h3>
        <p className="text-muted-foreground text-sm md:text-base max-w-[640px] mx-auto mt-3 md:mt-4">{t("services.gmao_gains.subtitle")}</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {gmaoGainKeys.map((g, i) => (
          <GmaoGainCard key={g.key} icon={g.icon} gKey={g.key} delay={i * 100} />
        ))}
      </div>
    </div>
  );
};

const GmaoGainCard = ({ icon: Icon, gKey, delay }: { icon: React.ElementType; gKey: string; delay: number }) => {
  const ref = useScrollAnimation<HTMLDivElement>('fade-in-up', delay);
  const { t } = useTranslation();
  return (
    <div
      ref={ref}
      className="bg-card border border-border rounded-xl p-4 md:p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-navy-md hover:border-accent/40"
    >
      <div className="w-9 h-9 md:w-11 md:h-11 mx-auto bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-3 md:mb-4">
        <Icon className="w-4 h-4 md:w-5 md:h-5" />
      </div>
      <div className="font-heading font-black text-[clamp(1.1rem,3vw,1.8rem)] text-accent leading-none mb-2">
        {t(`services.gmao_gains.items.${gKey}.value`)}
      </div>
      <div className="font-heading text-[0.7rem] md:text-xs font-bold uppercase tracking-[0.08em] text-foreground mb-2">
        {t(`services.gmao_gains.items.${gKey}.label`)}
      </div>
      <p className="text-muted-foreground text-[0.7rem] md:text-xs leading-relaxed hidden md:block">
        {t(`services.gmao_gains.items.${gKey}.desc`)}
      </p>
    </div>
  );
};

export default ServicesSection;
