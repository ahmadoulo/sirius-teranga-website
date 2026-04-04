import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  const links = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.about"), to: "/a-propos" },
    { label: t("nav.services"), to: "/services" },
    { label: t("nav.contact"), to: "/contact" },
  ];

  return (
    <footer className="bg-primary py-16 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-heading font-bold text-xl text-primary-foreground">SIRIUS</span>{" "}
              <span className="font-heading text-sm text-accent font-semibold">Teranga Consulting</span>
            </Link>
            <p className="font-body text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              {t("about.desc")}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">{t("footer.links")}</h4>
            <nav className="space-y-2">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="block font-body text-primary-foreground/60 text-sm hover:text-accent transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">{t("footer.contact_title")}</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span className="font-body text-primary-foreground/60 text-sm">{t("contact.info_email")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span className="font-body text-primary-foreground/60 text-sm">{t("contact.info_phone")}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="font-body text-primary-foreground/60 text-sm">{t("contact.info_location")}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="font-body text-primary-foreground/40 text-sm text-center">
            {t("footer.rights", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
