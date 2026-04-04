import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const formRef = useScrollAnimation('fade-in-up', 0);
  const infoRef = useScrollAnimation('fade-in-right', 200);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error(t("contact.error"));
      return;
    }
    toast.success(t("contact.success"));
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-heading text-sm font-semibold text-accent uppercase tracking-widest">{t("contact.tag")}</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-3 mb-4">{t("contact.title")}</h2>
          <p className="font-body text-text-muted text-lg">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="lg:col-span-2 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-heading text-sm font-semibold text-foreground mb-1.5 block">{t("contact.name")} *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-border rounded-md px-4 py-3 font-body text-foreground bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                  placeholder={t("contact.name_placeholder")}
                  maxLength={100}
                />
              </div>
              <div>
                <label className="font-heading text-sm font-semibold text-foreground mb-1.5 block">{t("contact.email")} *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-border rounded-md px-4 py-3 font-body text-foreground bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                  placeholder={t("contact.email_placeholder")}
                  maxLength={255}
                />
              </div>
            </div>
            <div>
              <label className="font-heading text-sm font-semibold text-foreground mb-1.5 block">{t("contact.company")}</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full border border-border rounded-md px-4 py-3 font-body text-foreground bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                placeholder={t("contact.company_placeholder")}
                maxLength={100}
              />
            </div>
            <div>
              <label className="font-heading text-sm font-semibold text-foreground mb-1.5 block">{t("contact.message")} *</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full border border-border rounded-md px-4 py-3 font-body text-foreground bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 transition resize-none"
                placeholder={t("contact.message_placeholder")}
                maxLength={1000}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground font-heading font-semibold px-8 py-3.5 rounded-md text-base hover:bg-gold-light transition-colors"
            >
              {t("contact.submit")}
            </button>
          </form>

          <div ref={infoRef} className="space-y-6">
            <h3 className="font-heading font-bold text-lg text-foreground">{t("contact.info_title")}</h3>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-accent mt-0.5" />
              <span className="font-body text-text-muted text-sm">{t("contact.info_email")}</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-accent mt-0.5" />
              <span className="font-body text-text-muted text-sm">{t("contact.info_phone")}</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent mt-0.5" />
              <span className="font-body text-text-muted text-sm">{t("contact.info_location")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
