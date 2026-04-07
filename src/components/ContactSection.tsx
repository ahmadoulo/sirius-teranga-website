import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", company: "", subject: "", message: "" });
  const infoRef = useScrollAnimation('fade-in-left', 0);
  const formRef = useScrollAnimation<HTMLFormElement>('fade-in-right', 200);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error(t("contact.error"));
      return;
    }
    toast.success(t("contact.success"));
    setForm({ name: "", email: "", company: "", subject: "", message: "" });
  };

  const infoBlocks = [
    { icon: Mail, label: t("contact.info_email_label"), value: t("contact.info_email"), href: `mailto:${t("contact.info_email")}` },
    { icon: Phone, label: t("contact.info_phone_label"), value: t("contact.info_phone"), href: `tel:${t("contact.info_phone").replace(/\s/g, "")}` },
    { icon: MapPin, label: t("contact.info_location_label"), value: t("contact.info_location") },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-block font-heading text-xs font-bold tracking-[0.15em] uppercase text-accent bg-accent/10 border border-accent/30 px-4 py-1.5 rounded-full mb-4">
            {t("contact.tag")}
          </div>
          <h2 className="font-heading font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.2] text-foreground">
            {t("contact.title")} <span className="text-accent">{t("contact.title_accent")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[600px] mx-auto mt-4">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">
          {/* Info */}
          <div ref={infoRef} className="flex flex-col gap-5 pt-4">
            {infoBlocks.map((block, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-card border border-border rounded-2xl transition-all duration-300 hover:shadow-navy-md hover:border-accent/30 hover:translate-x-1"
              >
                <div className="w-11 h-11 bg-primary text-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <block.icon className="w-5 h-5" />
                </div>
                <div>
                  <strong className="block font-heading text-xs font-bold uppercase tracking-[0.08em] text-foreground mb-0.5">
                    {block.label}
                  </strong>
                  {block.href ? (
                    <a href={block.href} className="text-sm text-muted-foreground hover:text-gold-dark transition-colors">
                      {block.value}
                    </a>
                  ) : (
                    <span className="text-sm text-muted-foreground">{block.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="bg-card rounded-xl p-8 border border-border shadow-navy-md">
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div className="flex flex-col gap-1.5">
                <label className="font-heading text-xs font-bold uppercase tracking-[0.08em] text-foreground">{t("contact.name")} *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full font-body text-[0.95rem] text-foreground bg-offwhite border-[1.5px] border-border rounded-lg px-4 py-3.5 outline-none transition-all duration-200 focus:border-accent focus:bg-card focus:shadow-[0_0_0_3px_rgba(212,175,55,0.12)]"
                  placeholder={t("contact.name_placeholder")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-heading text-xs font-bold uppercase tracking-[0.08em] text-foreground">{t("contact.email")} *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full font-body text-[0.95rem] text-foreground bg-offwhite border-[1.5px] border-border rounded-lg px-4 py-3.5 outline-none transition-all duration-200 focus:border-accent focus:bg-card focus:shadow-[0_0_0_3px_rgba(212,175,55,0.12)]"
                  placeholder={t("contact.email_placeholder")}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 mb-5">
              <label className="font-heading text-xs font-bold uppercase tracking-[0.08em] text-foreground">{t("contact.company")}</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full font-body text-[0.95rem] text-foreground bg-offwhite border-[1.5px] border-border rounded-lg px-4 py-3.5 outline-none transition-all duration-200 focus:border-accent focus:bg-card focus:shadow-[0_0_0_3px_rgba(212,175,55,0.12)]"
                placeholder={t("contact.company_placeholder")}
              />
            </div>
            <div className="flex flex-col gap-1.5 mb-5">
              <label className="font-heading text-xs font-bold uppercase tracking-[0.08em] text-foreground">{t("contact.subject")}</label>
              <select
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full font-body text-[0.95rem] text-foreground bg-offwhite border-[1.5px] border-border rounded-lg px-4 py-3.5 outline-none transition-all duration-200 focus:border-accent focus:bg-card focus:shadow-[0_0_0_3px_rgba(212,175,55,0.12)] cursor-pointer appearance-none"
              >
                <option value="">{t("contact.subject_placeholder")}</option>
                <option value="org">{t("contact.subject_options.org")}</option>
                <option value="digital">{t("contact.subject_options.digital")}</option>
                <option value="si">{t("contact.subject_options.si")}</option>
                <option value="process">{t("contact.subject_options.process")}</option>
                <option value="training">{t("contact.subject_options.training")}</option>
                <option value="other">{t("contact.subject_options.other")}</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5 mb-5">
              <label className="font-heading text-xs font-bold uppercase tracking-[0.08em] text-foreground">{t("contact.message")} *</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="w-full font-body text-[0.95rem] text-foreground bg-offwhite border-[1.5px] border-border rounded-lg px-4 py-3.5 outline-none transition-all duration-200 focus:border-accent focus:bg-card focus:shadow-[0_0_0_3px_rgba(212,175,55,0.12)] resize-y min-h-[120px]"
                placeholder={t("contact.message_placeholder")}
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 font-heading text-sm font-bold tracking-[0.05em] uppercase bg-accent text-accent-foreground px-8 py-3.5 rounded-full shadow-gold hover:bg-gold-light hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>{t("contact.submit")}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
