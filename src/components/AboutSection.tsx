import { Building2, Target, Users } from "lucide-react";

const stats = [
  { icon: Building2, value: "PME & Grands Groupes", label: "Clientèle cible" },
  { icon: Target, value: "Résultats concrets", label: "Approche orientée impact" },
  { icon: Users, value: "Équipe d'experts", label: "Pluridisciplinaire" },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-surface">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="font-heading text-sm font-semibold text-accent uppercase tracking-widest">À propos</span>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-3 mb-6">
          Qui sommes-nous ?
        </h2>
        <p className="font-body text-text-muted text-lg leading-relaxed">
          STC est un cabinet de conseil spécialisé dans l'optimisation des organisations, la transformation digitale et l'amélioration de la performance des entreprises. Nous accompagnons les structures dans la structuration de leurs activités, l'optimisation de leurs processus et l'intégration de solutions technologiques adaptées.
        </p>
        <p className="font-body text-text-muted text-lg leading-relaxed mt-4">
          Notre approche repose sur une expertise technique et une vision stratégique, afin de proposer des solutions concrètes, efficaces et durables.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {stats.map((s) => (
          <div key={s.label} className="text-center p-6">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <p className="font-heading font-bold text-lg text-foreground">{s.value}</p>
            <p className="font-body text-text-muted text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
