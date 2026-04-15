import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navLinks = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.partnership"), to: "/partenariat" },
    { label: t("nav.expertises"), to: "/expertises" },
    { label: t("nav.services"), to: "/services" },
    { label: t("nav.references"), to: "/references" },
    { label: t("nav.contact"), to: "/contact" },
  ];

  const isActive = (to: string) => location.pathname === to;
  const isHome = location.pathname === "/";
  const isTransparent = isHome && !scrolled && !open;

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[1100] focus:bg-accent focus:text-accent-foreground focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-semibold">
        Passer au contenu
      </a>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          isTransparent
            ? "bg-transparent py-4 md:py-5"
            : "bg-white dark:bg-[#071528] py-2.5 md:py-3 shadow-[0_2px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-border/50 dark:border-white/10"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <div className="relative flex items-center font-heading font-black text-lg md:text-xl tracking-tight text-white bg-gradient-to-br from-[#102848] to-[#0B1F3A] border-2 border-accent rounded-lg px-2 py-0.5 md:px-2.5 md:py-1 leading-none">
              <span>S</span><span>T</span><span className="text-accent">C</span>
              <div className="absolute -top-[3px] -right-[3px] w-2 h-2 bg-accent rounded-full border-[1.5px] border-[#071528]" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-heading font-extrabold text-sm md:text-base tracking-wide transition-colors ${
                isTransparent ? "text-white" : "text-foreground"
              }`}>
                Sirius Teranga
              </span>
              <span className="font-body text-[0.6rem] md:text-[0.7rem] text-accent uppercase tracking-[0.12em]">Consulting</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`relative font-heading text-[0.8rem] font-semibold tracking-[0.05em] uppercase px-3 py-2 rounded-full transition-all duration-200
                  after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-accent after:rounded-full after:transition-all after:duration-300
                  ${isActive(l.to)
                    ? "text-accent after:w-[70%]"
                    : `after:w-0 hover:after:w-[70%] ${
                        isTransparent
                          ? "text-white/80 hover:text-white"
                          : "text-foreground/80 hover:text-foreground dark:text-white/80 dark:hover:text-white"
                      }`
                  }`}
              >
                {l.label}
              </Link>
            ))}
            <ThemeToggle isTransparent={isTransparent} />
            <LanguageSwitcher isTransparent={isTransparent} />
            <Link
              to="/diagnostic"
              className="font-heading text-[0.8rem] font-extrabold uppercase tracking-[0.05em] bg-accent text-accent-foreground px-5 py-2.5 rounded-full shadow-gold hover:bg-gold-light hover:-translate-y-px transition-all duration-200 ml-1"
            >
              {t("nav.cta")}
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="flex lg:hidden items-center gap-1.5">
            <ThemeToggle isTransparent={isTransparent} />
            <LanguageSwitcher isTransparent={isTransparent} />
            <button
              className="flex flex-col gap-[5px] p-2 relative z-[1002]"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <span className={`block w-5 h-[2px] rounded-full transition-all duration-300 ${
                open ? "bg-white translate-y-[7px] rotate-45" : isTransparent ? "bg-white" : "bg-foreground dark:bg-white"
              }`} />
              <span className={`block w-5 h-[2px] rounded-full transition-all duration-300 ${
                open ? "bg-white opacity-0 scale-x-0" : isTransparent ? "bg-white" : "bg-foreground dark:bg-white"
              }`} />
              <span className={`block w-5 h-[2px] rounded-full transition-all duration-300 ${
                open ? "bg-white -translate-y-[7px] -rotate-45" : isTransparent ? "bg-white" : "bg-foreground dark:bg-white"
              }`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay - outside nav, with higher z-index */}
      {open && (
        <div className="fixed inset-0 z-[1001] bg-[#071528] flex flex-col items-center justify-center gap-4 lg:hidden animate-fade-in">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`font-heading text-xl font-semibold uppercase tracking-[0.08em] px-6 py-3 rounded-full transition-colors ${
                isActive(l.to) ? "text-accent" : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/diagnostic"
            onClick={() => setOpen(false)}
            className="font-heading text-sm font-extrabold uppercase bg-accent text-accent-foreground px-8 py-3.5 rounded-full shadow-gold mt-6"
          >
            {t("nav.cta")}
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
