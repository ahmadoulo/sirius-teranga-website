import { CheckCircle } from "lucide-react";

const points = [
  { title: "Approche contextualisée", desc: "Solutions adaptées aux réalités locales et contraintes spécifiques de chaque organisation." },
  { title: "Présence terrain", desc: "Équipes sur le terrain pour un accompagnement au plus près de vos opérations." },
  { title: "Résultats mesurables", desc: "Des KPI définis dès le départ et un suivi rigoureux de la performance." },
  { title: "Transfert de compétences", desc: "Formation et autonomisation de vos équipes internes pour un impact durable." },
  { title: "Expertise pluridisciplinaire", desc: "Organisation, digital, qualité et systèmes d'information réunis dans une seule équipe." },
  { title: "Engagement total", desc: "Implication directe dans l'exécution et la mise en œuvre, pas seulement le conseil." },
];

const WhyUsSection = () => (
  <section className="py-24 bg-surface-alt">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-14">
        <span className="font-heading text-sm font-semibold text-accent uppercase tracking-widest">Différenciation</span>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-3 mb-4">
          Pourquoi choisir STC ?
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {points.map((p) => (
          <div key={p.title} className="flex gap-4 p-5">
            <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-heading font-bold text-foreground mb-1">{p.title}</h3>
              <p className="font-body text-text-muted text-sm leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
