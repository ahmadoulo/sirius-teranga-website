import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const infoRef = useScrollAnimation('fade-in-left', 0);
  const formRef = useScrollAnimation<HTMLFormElement>('fade-in-right', 200);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error(t("contact.error"));
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("access_key", "ea435ede-dfc0-4f09-88b8-9b49d525edf7");
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("company", form.company);
      formData.append("subject", form.subject);
      formData.append("message", form.message);
      formData.append("from_name", "Sirius Teranga Consulting — Site Web");
      formData.append("subject_line", `Nouveau message — ${form.subject || "Contact"} — ${form.name}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        toast.success(t("contact.success"));
        setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
      } else {
        toast.error(t("contact.error"));
      }
    } catch {
      toast.error(t("contact.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const infoBlocks = [
    { icon: Mail, label: t("contact.info_email_label"), value: t("contact.info_email"), href: `mailto:${t("contact.info_email")}` },
    { icon: Phone, label: t("contact.info_phone_label"), value: t("contact.info_phone"), href: `tel:${t("contact.info_phone").replace(/\s/g, "")}` },
    { icon: MapPin, label: t("contact.info_location_label"), value: t("contact.info_location") },
  ];

  const inputClasses = "w-full font-body text-sm md:text-[0.95rem] text-foreground bg-offwhite border-[1.5px] border-border rounded-lg px-3.5 md:px-4 py-3 md:py-3.5 outline-none transition-all duration-200 focus:border-accent focus:bg-card focus:shadow-[0_0_0_3px_rgba(212,175,55,0.12)]";

  return (
    <section id="contact" className="py-14 md:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block font-heading text-[0.65rem] md:text-xs font-bold tracking-[0.15em] uppercase text-accent bg-accent/10 border border-accent/30 px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-3 md:mb-4">
            {t("contact.tag")}
          </div>
          <h2 className="font-heading font-extrabold text-[clamp(1.4rem,4vw,2.8rem)] leading-[1.2] text-foreground">
            {t("contact.title")} <span className="text-accent">{t("contact.title_accent")}</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-[600px] mx-auto mt-3 md:mt-4">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-16 items-start">
          {/* Info */}
          <div ref={infoRef} className="flex flex-col gap-3 md:gap-5 pt-0 lg:pt-4">
            {infoBlocks.map((block, i) => (
              <div
                key={i}
                className="flex items-start gap-3 md:gap-4 p-4 md:p-5 bg-card border border-border rounded-xl md:rounded-2xl transition-all duration-300 hover:shadow-navy-md hover:border-accent/30 hover:translate-x-1"
              >
                <div className="w-9 h-9 md:w-11 md:h-11 bg-[#0B1F3A] dark:bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <block.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                </div>
                <div>
                  <strong className="block font-heading text-[0.65rem] md:text-xs font-bold uppercase tracking-[0.08em] text-foreground mb-0.5">
                    {block.label}
                  </strong>
                  {block.href ? (
                    <a href={block.href} className="text-xs md:text-sm text-muted-foreground hover:text-gold-dark transition-colors">
                      {block.value}
                    </a>
                  ) : (
                    <span className="text-xs md:text-sm text-muted-foreground">{block.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="bg-card rounded-xl p-5 md:p-8 border border-border shadow-navy-md">
            <div className="grid sm:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="font-heading text-[0.65rem] md:text-xs font-bold uppercase tracking-[0.08em] text-foreground">{t("contact.name")} *</label>
                <input id="contact-name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClasses} placeholder={t("contact.name_placeholder")} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="font-heading text-[0.65rem] md:text-xs font-bold uppercase tracking-[0.08em] text-foreground">{t("contact.email")} *</label>
                <input id="contact-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClasses} placeholder={t("contact.email_placeholder")} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-phone" className="font-heading text-[0.65rem] md:text-xs font-bold uppercase tracking-[0.08em] text-foreground">{t("contact.phone")}</label>
                <input id="contact-phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClasses} placeholder={t("contact.phone_placeholder")} />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-company" className="font-heading text-[0.65rem] md:text-xs font-bold uppercase tracking-[0.08em] text-foreground">{t("contact.company")}</label>
                <input id="contact-company" type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClasses} placeholder={t("contact.company_placeholder")} />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 mb-4 md:mb-5">
              <label htmlFor="contact-subject" className="font-heading text-[0.65rem] md:text-xs font-bold uppercase tracking-[0.08em] text-foreground">{t("contact.subject")}</label>
              <select id="contact-subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={`${inputClasses} cursor-pointer appearance-none`}>
                <option value="">{t("contact.subject_placeholder")}</option>
                <option value="diagnostic">{t("contact.subject_options.diagnostic")}</option>
                <option value="eam">{t("contact.subject_options.eam")}</option>
                <option value="org">{t("contact.subject_options.org")}</option>
                <option value="process">{t("contact.subject_options.process")}</option>
                <option value="training">{t("contact.subject_options.training")}</option>
                <option value="other">{t("contact.subject_options.other")}</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5 mb-4 md:mb-5">
              <label htmlFor="contact-message" className="font-heading text-[0.65rem] md:text-xs font-bold uppercase tracking-[0.08em] text-foreground">{t("contact.message")} *</label>
              <textarea id="contact-message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} className={`${inputClasses} resize-y min-h-[100px]`} placeholder={t("contact.message_placeholder")} />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 font-heading text-xs md:text-sm font-bold tracking-[0.05em] uppercase bg-accent text-accent-foreground px-6 md:px-8 py-3 md:py-3.5 rounded-full shadow-gold hover:bg-gold-light hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
              <span>{isSubmitting ? "..." : t("contact.submit")}</span>
              <Send className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
