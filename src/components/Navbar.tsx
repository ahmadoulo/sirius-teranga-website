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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinks = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.about"), to: "/a-propos" },
    { label: t("nav.services"), to: "/services" },
    { label: t("nav.contact"), to: "/contact" },
  ];

  const isActive = (to: string) => location.pathname === to;
  const isHome = location.pathname === "/";
  const isSolid = scrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        isSolid
          ? "bg-background/95 dark:bg-navy-dark/95 backdrop-blur-[16px] py-3 shadow-[0_4px_30px_hsl(var(--foreground)/0.16)] border-b border-border/60 dark:border-white/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="relative flex items-center font-heading font-black text-xl tracking-tight text-white bg-gradient-to-br from-primary to-navy-mid border-2 border-accent rounded-lg px-2.5 py-1 leading-none">
            <span>S</span>
            <span>T</span>
            <span className="text-accent">C</span>
            <div className="absolute -top-[3px] -right-[3px] w-2 h-2 bg-accent rounded-full border-[1.5px] border-navy-dark" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-heading font-extrabold text-base tracking-wide ${isSolid ? "text-foreground dark:text-white" : "text-white"}`}>
              Sirius Teranga
            </span>
            <span className="font-body text-[0.7rem] text-accent uppercase tracking-[0.12em]">Consulting</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative font-heading text-[0.82rem] font-semibold tracking-[0.05em] uppercase px-3.5 py-2 rounded-full transition-all duration-200 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-accent after:rounded-full after:transition-all after:duration-300 ${
                isActive(l.to)
                  ? "text-accent after:w-[70%]"
                  : `${isSolid ? "text-foreground hover:text-accent dark:text-white/85 dark:hover:text-white" : "text-white/85 hover:text-white"} after:w-0 hover:after:w-[70%]`
              }`}
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
          <LanguageSwitcher />
          <Link
            to="/contact"
            className="font-heading text-[0.82rem] font-extrabold uppercase tracking-[0.05em] bg-accent text-accent-foreground px-5 py-2.5 rounded-full shadow-gold hover:bg-gold-light hover:-translate-y-px transition-all duration-200 ml-1"
          >
            {t("nav.cta")}
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <button className="flex flex-col gap-[5px] p-[5px] relative z-[1001]" onClick={() => setOpen(!open)} aria-label="Menu">
            <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${isSolid ? "bg-foreground dark:bg-white" : "bg-white"} ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${isSolid ? "bg-foreground dark:bg-white" : "bg-white"} ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${isSolid ? "bg-foreground dark:bg-white" : "bg-white"} ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-background/98 dark:bg-navy-dark/98 flex flex-col items-center justify-center gap-4 transition-all duration-300 z-[999] md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {navLinks.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            onClick={() => setOpen(false)}
            className={`font-heading text-xl font-semibold uppercase tracking-[0.05em] px-6 py-3 rounded-full transition-colors ${
              isActive(l.to) ? "text-accent" : "text-foreground hover:text-accent dark:text-white/85 dark:hover:text-white"
            }`}
          >
            {l.label}
          </Link>
        ))}
        <Link
          to="/contact"
          onClick={() => setOpen(false)}
          className="font-heading text-base font-extrabold uppercase bg-accent text-accent-foreground px-8 py-3 rounded-full shadow-gold mt-4"
        >
          {t("nav.cta")}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
