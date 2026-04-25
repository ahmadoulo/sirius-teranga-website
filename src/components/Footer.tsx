import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import logoDark from "@/assets/logo-dark-transparent.png";
import BrochureDialog from "./BrochureDialog";

const Footer = () => {
  const { t } = useTranslation();
  const [brochureOpen, setBrochureOpen] = useState(false);

  const navLinks = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.partnership"), to: "/partenariat" },
    { label: t("nav.expertises"), to: "/expertises" },
    { label: t("nav.services"), to: "/services" },
    { label: t("nav.references"), to: "/references" },
    { label: t("nav.diagnostic"), to: "/diagnostic" },
    { label: t("nav.contact"), to: "/contact" },
  ];

  const serviceLinks = [
    t("footer.services_org"),
    t("footer.services_digital"),
    t("footer.services_si"),
    t("footer.services_process"),
    t("footer.services_training"),
  ];

  return (
    <>
    <footer className="bg-[#071528]">
      {/* Top */}
      <div className="py-10 md:py-16 pb-8 md:pb-10">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 grid grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr] gap-8 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center mb-4 md:mb-6" aria-label="Sirius Teranga Consulting - Accueil">
              <img src={logoDark} alt="Sirius Teranga Consulting" className="h-12 md:h-16 w-auto object-contain" />
            </Link>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-[280px]">{t("footer.tagline")}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-[0.65rem] md:text-xs font-bold tracking-[0.12em] uppercase text-accent mb-4 md:mb-6">{t("footer.nav_title")}</h3>
            <ul className="flex flex-col gap-1.5 md:gap-2">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/70 text-xs md:text-sm hover:text-accent hover:pl-1 transition-all duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => setBrochureOpen(true)}
                  className="inline-flex items-center gap-1.5 text-white/70 text-xs md:text-sm hover:text-accent hover:pl-1 transition-all duration-200 text-left"
                >
                  <Download className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  {t("footer.brochure")}
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-[0.65rem] md:text-xs font-bold tracking-[0.12em] uppercase text-accent mb-4 md:mb-6">{t("footer.services_title")}</h3>
            <ul className="flex flex-col gap-1.5 md:gap-2">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <Link to="/services" className="text-white/70 text-xs md:text-sm hover:text-accent hover:pl-1 transition-all duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="font-heading text-[0.65rem] md:text-xs font-bold tracking-[0.12em] uppercase text-accent mb-4 md:mb-6">{t("footer.contact_title")}</h3>
            <div className="flex flex-col gap-1.5 md:gap-2">
               <p className="text-white/70 text-xs md:text-sm flex items-center gap-2">
                 <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent flex-shrink-0" />
                 {t("contact.info_email")}
               </p>
               <p className="text-white/70 text-xs md:text-sm flex items-center gap-2">
                 <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent flex-shrink-0" />
                 {t("contact.info_phone")}
               </p>
               <p className="text-white/70 text-xs md:text-sm flex items-center gap-2">
                 <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent flex-shrink-0" />
                 {t("contact.info_location")}
               </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/[0.08] py-4 md:py-6">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
           <span className="text-white/70 text-[0.65rem] md:text-xs">{t("footer.rights", { year: new Date().getFullYear() })}</span>
           <div className="flex gap-4 md:gap-6">
             <a href="#" className="text-white/70 text-[0.65rem] md:text-xs hover:text-accent transition-colors">{t("footer.legal")}</a>
             <a href="#" className="text-white/70 text-[0.65rem] md:text-xs hover:text-accent transition-colors">{t("footer.privacy")}</a>
           </div>
        </div>
      </div>
    </footer>
    <BrochureDialog open={brochureOpen} onOpenChange={setBrochureOpen} />
    </>
  );
};

export default Footer;
