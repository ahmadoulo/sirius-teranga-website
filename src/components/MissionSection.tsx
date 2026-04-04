import { Compass, Eye, Heart } from "lucide-react";

const cards = [
  {
    icon: Compass,
    title: "Mission",
    text: "Accompagner les entreprises dans l'optimisation de leurs performances en mettant en place des solutions organisationnelles et digitales adaptées à leurs besoins.",
  },
  {
    icon: Eye,
    title: "Vision",
    text: "Devenir un acteur de référence en Afrique dans le conseil en organisation et transformation digitale, reconnu pour son expertise et son impact.",
  },
  {
    icon: Heart,
    title: "Valeurs",
    text: "Qualité & Excellence · Innovation · Fiabilité & Confiance · Performance · Engagement",
  },
];

const MissionSection = () => (
  <section className="py-24 bg-surface-alt">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-14">
        <span className="font-heading text-sm font-semibold text-accent uppercase tracking-widest">Notre ADN</span>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-3">
          Mission, Vision & Valeurs
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {cards.map((c) => (
          <div key={c.title} className="bg-surface rounded-lg p-8 border border-border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center mb-5">
              <c.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">{c.title}</h3>
            <p className="font-body text-text-muted leading-relaxed">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MissionSection;
