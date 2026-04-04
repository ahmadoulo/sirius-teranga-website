import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Méthodologie", href: "#methodology" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <button onClick={() => scrollTo("#hero")} className="flex items-center gap-2">
          <span className="font-heading font-bold text-xl text-primary tracking-tight">SIRIUS</span>
          <span className="font-heading text-sm text-gold font-semibold tracking-wide">Teranga Consulting</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="font-body text-sm text-foreground hover:text-accent transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="bg-accent text-accent-foreground font-heading text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-gold-light transition-colors"
          >
            Demander un devis
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface border-t border-border px-4 pb-6 pt-2 space-y-3">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block w-full text-left font-body text-foreground py-2 hover:text-accent transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="w-full bg-accent text-accent-foreground font-heading text-sm font-semibold px-5 py-2.5 rounded-md"
          >
            Demander un devis
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
