import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    toast.success("Message envoyé avec succès ! Nous vous recontacterons rapidement.");
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <div className="text-center mb-12">
          <span className="font-heading text-sm font-semibold text-accent uppercase tracking-widest">Contact</span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-3 mb-4">
            Contactez-nous
          </h2>
          <p className="font-body text-text-muted text-lg">
            Parlez-nous de votre projet. Nous vous répondrons sous 24h.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="font-heading text-sm font-semibold text-foreground mb-1.5 block">Nom *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-border rounded-md px-4 py-3 font-body text-foreground bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                placeholder="Votre nom"
                maxLength={100}
              />
            </div>
            <div>
              <label className="font-heading text-sm font-semibold text-foreground mb-1.5 block">Email *</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-border rounded-md px-4 py-3 font-body text-foreground bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                placeholder="votre@email.com"
                maxLength={255}
              />
            </div>
          </div>
          <div>
            <label className="font-heading text-sm font-semibold text-foreground mb-1.5 block">Entreprise</label>
            <input
              type="text"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="w-full border border-border rounded-md px-4 py-3 font-body text-foreground bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
              placeholder="Nom de votre entreprise"
              maxLength={100}
            />
          </div>
          <div>
            <label className="font-heading text-sm font-semibold text-foreground mb-1.5 block">Message *</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              className="w-full border border-border rounded-md px-4 py-3 font-body text-foreground bg-surface focus:outline-none focus:ring-2 focus:ring-accent/50 transition resize-none"
              placeholder="Décrivez votre besoin..."
              maxLength={1000}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-accent text-accent-foreground font-heading font-semibold px-8 py-3.5 rounded-md text-base hover:bg-gold-light transition-colors"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
