import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { t } = useTranslation();
  const badgeRef = useScrollAnimation('fade-in-up', 0);
  const titleRef = useScrollAnimation('fade-in-up', 100);
  const subRef = useScrollAnimation('fade-in-up', 200);
  const ctaRef = useScrollAnimation('fade-in-up', 300);
  const statsRef = useScrollAnimation('fade-in-up', 400);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#071528] via-[#0B1F3A] to-[#102848]">
      {/* Background overlays */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(212,175,55,0.07) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(16,40,72,0.8) 0%, transparent 60%),
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.04'%3E%3Crect width='2' height='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <Particles />

      <div className="relative z-10 w-full max-w-[860px] mx-auto px-5 md:px-8 py-28 md:py-32">
        <div ref={badgeRef} className="inline-flex items-center gap-2 font-heading text-[0.65rem] md:text-xs font-bold tracking-[0.12em] uppercase text-accent bg-accent/10 border border-accent/30 px-4 py-2 rounded-full mb-6 md:mb-8 backdrop-blur-sm">
          <span className="w-[7px] h-[7px] bg-accent rounded-full animate-pulse-dot" />
          <span>{t("hero.badge")}</span>
        </div>

        <h1 ref={titleRef} className="font-heading font-black text-[clamp(1.8rem,5.5vw,3.8rem)] leading-[1.15] text-white mb-5 md:mb-8 tracking-tight">
          {t("hero.title")}<br />
          <span className="text-accent">{t("hero.highlight")}</span>
        </h1>

        <p ref={subRef} className="text-[clamp(0.9rem,2vw,1.2rem)] text-white/85 max-w-[600px] mx-auto mb-8 md:mb-10 leading-relaxed px-2">
          {t("hero.subtitle")}
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-12 md:mb-16 px-4 sm:px-0">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 font-heading text-sm font-bold tracking-[0.05em] uppercase bg-accent text-accent-foreground px-7 md:px-8 py-3 md:py-3.5 rounded-full border-2 border-transparent shadow-gold hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(212,175,55,0.45)] transition-all duration-300"
          >
            {t("hero.cta1")}
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 font-heading text-sm font-bold tracking-[0.05em] uppercase bg-transparent text-white px-7 md:px-8 py-3 md:py-3.5 rounded-full border-2 border-white/40 hover:bg-white/10 hover:border-white hover:-translate-y-0.5 transition-all duration-300"
          >
            {t("hero.cta2")}
          </Link>
        </div>

        {/* Stats bar */}
        <div ref={statsRef} className="flex flex-col sm:flex-row items-center justify-center gap-0 px-4 sm:px-6 md:px-8 py-5 md:py-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-[12px] mx-2 sm:mx-0">
          <StatItem numKey="hero.stat1_number" labelKey="hero.stat1_label" />
          <div className="hidden sm:block w-px h-[50px] bg-white/20 flex-shrink-0" />
          <div className="sm:hidden w-16 h-px bg-white/20 my-3" />
          <StatItem numKey="hero.stat2_number" labelKey="hero.stat2_label" />
          <div className="hidden sm:block w-px h-[50px] bg-white/20 flex-shrink-0" />
          <div className="sm:hidden w-16 h-px bg-white/20 my-3" />
          <StatItem numKey="hero.stat3_number" labelKey="hero.stat3_label" />
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/60">
        <div className="w-[22px] h-[36px] border-2 border-white/30 rounded-[11px] flex justify-center items-start pt-[5px]">
          <div className="w-1 h-2 bg-accent rounded-full animate-scroll-wheel" />
        </div>
        <span className="font-heading text-[0.7rem] tracking-[0.1em] uppercase">{t("hero.scroll")}</span>
      </div>
    </section>
  );
};

const StatItem = ({ numKey, labelKey }: { numKey: string; labelKey: string }) => {
  const { t } = useTranslation();
  const target = parseInt(t(numKey), 10);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        const duration = 1800;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="flex flex-col items-center px-6 sm:px-8 md:px-12">
      <div className="flex items-baseline">
        <span className="font-heading text-2xl sm:text-3xl md:text-[2.5rem] font-black text-white leading-none">{count}</span>
        <span className="font-heading text-xl sm:text-2xl md:text-[1.8rem] font-black text-accent">+</span>
      </div>
      <span className="text-[0.65rem] sm:text-[0.72rem] md:text-[0.78rem] text-white/80 uppercase tracking-[0.08em] mt-1 font-heading text-center">{t(labelKey)}</span>
    </div>
  );
};

const Particles = () => {
  useEffect(() => {
    const container = document.getElementById('hero-particles');
    if (!container || container.children.length > 0) return;
    for (let i = 0; i < 18; i++) {
      const p = document.createElement('div');
      const size = Math.random() * 4 + 2;
      const x = Math.random() * 100;
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 10;
      p.style.cssText = `position:absolute;border-radius:50%;background:#D4AF37;opacity:0;width:${size}px;height:${size}px;left:${x}%;bottom:-${size}px;animation:particle-float ${duration}s linear ${delay}s infinite;`;
      container.appendChild(p);
    }
  }, []);

  return <div id="hero-particles" className="absolute inset-0 pointer-events-none overflow-hidden" />;
};

export default HeroSection;
