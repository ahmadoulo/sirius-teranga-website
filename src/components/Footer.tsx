import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

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
    <footer className="bg-[#071528]">
      {/* Top */}
      <div className="py-10 md:py-16 pb-8 md:pb-10">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8 grid grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr] gap-8 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="relative flex items-center font-heading font-black text-lg md:text-xl tracking-tight text-white bg-gradient-to-br from-[#102848] to-[#0B1F3A] border-2 border-accent rounded-lg px-2 md:px-2.5 py-0.5 md:py-1 leading-none">
                <span>S</span><span>T</span><span className="text-accent">C</span>
                <div className="absolute -top-[3px] -right-[3px] w-2 h-2 bg-accent rounded-full border-[1.5px] border-[#071528]" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-extrabold text-sm md:text-base text-white">Sirius Teranga</span>
                <span className="font-body text-[0.6rem] md:text-[0.7rem] text-accent uppercase tracking-[0.12em]">Consulting</span>
              </div>
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
  );
};

export default Footer;
