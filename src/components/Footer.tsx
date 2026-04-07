import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  const navLinks = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.about"), to: "/a-propos" },
    { label: t("nav.services"), to: "/services" },
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
      <div className="py-16 pb-10">
        <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr] gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="relative flex items-center font-heading font-black text-xl tracking-tight text-white bg-gradient-to-br from-[#102848] to-[#0B1F3A] border-2 border-accent rounded-lg px-2.5 py-1 leading-none">
                <span>S</span><span>T</span><span className="text-accent">C</span>
                <div className="absolute -top-[3px] -right-[3px] w-2 h-2 bg-accent rounded-full border-[1.5px] border-[#071528]" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-extrabold text-base text-white">Sirius Teranga</span>
                <span className="font-body text-[0.7rem] text-accent uppercase tracking-[0.12em]">Consulting</span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-[280px]">{t("footer.tagline")}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-xs font-bold tracking-[0.12em] uppercase text-accent mb-6">{t("footer.nav_title")}</h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/55 text-sm hover:text-accent hover:pl-1 transition-all duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-xs font-bold tracking-[0.12em] uppercase text-accent mb-6">{t("footer.services_title")}</h4>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <Link to="/services" className="text-white/55 text-sm hover:text-accent hover:pl-1 transition-all duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xs font-bold tracking-[0.12em] uppercase text-accent mb-6">{t("footer.contact_title")}</h4>
            <div className="flex flex-col gap-2">
              <p className="text-white/55 text-sm flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                {t("contact.info_email")}
              </p>
              <p className="text-white/55 text-sm flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                {t("contact.info_phone")}
              </p>
              <p className="text-white/55 text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                {t("contact.info_location")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/[0.08] py-6">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white/40 text-xs">{t("footer.rights", { year: new Date().getFullYear() })}</span>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 text-xs hover:text-accent transition-colors">{t("footer.legal")}</a>
            <a href="#" className="text-white/40 text-xs hover:text-accent transition-colors">{t("footer.privacy")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
