import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";
import logo from "@/assets/logo.png";
import logoDark from "@/assets/logo-dark.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  const navLinks = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.about"), to: "/a-propos" },
    { label: t("nav.services"), to: "/services" },
    { label: t("nav.contact"), to: "/contact" },
  ];

  const isActive = (to: string) => location.pathname === to;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <img src={logo} alt="Sirius Teranga Consulting" className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-body text-sm transition-colors relative pb-1 ${
                isActive(l.to)
                  ? "text-accent font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent"
                  : "text-foreground hover:text-accent"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
          <LanguageSwitcher />
          <Link
            to="/contact"
            className="bg-accent text-accent-foreground font-heading text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-gold-light transition-colors"
          >
            {t("nav.cta")}
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <button className="text-foreground" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface border-t border-border px-4 pb-6 pt-2 space-y-3 animate-fade-in">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block w-full text-left font-body py-2 transition-colors ${
                isActive(l.to) ? "text-accent font-semibold" : "text-foreground hover:text-accent"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-accent text-accent-foreground font-heading text-sm font-semibold px-5 py-2.5 rounded-md"
          >
            {t("nav.cta")}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;