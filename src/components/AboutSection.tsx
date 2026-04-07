import { Shield, Target, Star, TrendingUp, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const { t } = useTranslation();
  const visualRef = useScrollAnimation('fade-in-left', 0);
  const contentRef = useScrollAnimation('fade-in-right', 200);

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Card Stack Visual */}
          <div ref={visualRef} className="relative max-w-[480px] mx-auto lg:mx-0">
            <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
              {/* Background card */}
              <div className="absolute inset-0 bg-gradient-to-br from-offwhite to-light-grey rounded-xl -rotate-3 scale-[0.97] border border-border" />
              {/* Main card */}
              <div className="absolute inset-0 bg-card rounded-xl p-8 shadow-navy-xl border border-accent/10 flex flex-col justify-between">
                <div className="flex gap-4">
                  <div className="w-[52px] h-[52px] rounded-lg bg-primary/[0.08] flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div className="w-[52px] h-[52px] rounded-lg bg-accent/[0.12] flex items-center justify-center">
                    <Settings className="w-6 h-6 text-gold-dark" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-full h-2 bg-light-grey rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-bar-grow" style={{ width: '90%' }} />
                  </div>
                  <div className="w-full h-2 bg-light-grey rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-bar-grow" style={{ width: '75%', animationDelay: '0.3s' }} />
                  </div>
                  <div className="w-full h-2 bg-light-grey rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-bar-grow" style={{ width: '85%', animationDelay: '0.6s' }} />
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 font-heading text-sm font-bold text-gold-dark bg-accent/10 border border-accent/30 px-4 py-2.5 rounded-full self-start">
                  <Star className="w-4 h-4" />
                  <span>{t("about.badge_text")}</span>
                </div>
              </div>
              {/* Accent square */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-accent rounded-2xl opacity-[0.12] -z-10" />
            </div>
          </div>

          {/* Right: Content */}
          <div ref={contentRef}>
            <div className="inline-block font-heading text-xs font-bold tracking-[0.15em] uppercase text-accent bg-accent/10 border border-accent/30 px-4 py-1.5 rounded-full mb-4">
              {t("about.tag")}
            </div>
            <h2 className="font-heading font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.2] text-foreground mb-4">
              {t("about.title")}<br />
              <span className="text-accent">{t("about.title_accent")}</span>
            </h2>
            <p className="text-muted-foreground mb-4 text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: t("about.p1") }} />
            <p className="text-muted-foreground mb-6 text-base leading-relaxed">{t("about.p2")}</p>

            {/* Highlights */}
            <div className="flex flex-col gap-5 mb-8">
              <HighlightItem icon={Shield} title={t("about.highlight1_title")} desc={t("about.highlight1_desc")} />
              <HighlightItem icon={Target} title={t("about.highlight2_title")} desc={t("about.highlight2_desc")} />
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-heading text-sm font-bold tracking-[0.05em] uppercase bg-primary text-white px-8 py-3.5 rounded-full border-2 border-primary hover:bg-navy-mid hover:-translate-y-0.5 hover:shadow-navy-lg transition-all duration-300"
            >
              {t("about.cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const HighlightItem = ({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) => (
  <div className="flex gap-4 items-start">
    <div className="w-11 h-11 bg-gradient-to-br from-primary to-navy-mid text-accent rounded-lg flex items-center justify-center flex-shrink-0 shadow-navy-md">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <strong className="block font-heading font-bold text-[0.95rem] text-foreground mb-0.5">{title}</strong>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  </div>
);

export default AboutSection;
