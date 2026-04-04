import { Search, LayoutList, Settings2, Rocket } from "lucide-react";

const steps = [
  { icon: Search, num: "01", title: "Analyser", desc: "Diagnostic approfondi de votre organisation, processus et performance existante." },
  { icon: LayoutList, num: "02", title: "Structurer", desc: "Définition d'un plan d'action clair avec des objectifs mesurables et atteignables." },
  { icon: Settings2, num: "03", title: "Optimiser", desc: "Mise en œuvre des améliorations, refonte des processus et intégration des outils." },
  { icon: Rocket, num: "04", title: "Transformer", desc: "Accompagnement au changement, formation des équipes et pilotage des résultats." },
];

const MethodologySection = () => (
  <section id="methodology" className="py-24 bg-primary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <span className="font-heading text-sm font-semibold text-accent uppercase tracking-widest">Approche</span>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mt-3 mb-4">
          Notre Méthodologie
        </h2>
        <p className="font-body text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Une démarche structurée et éprouvée pour des résultats concrets et durables.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <div key={s.num} className="text-center relative">
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-primary-foreground/20" />
            )}
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-5 relative z-10">
              <s.icon className="w-7 h-7 text-accent" />
            </div>
            <span className="font-heading text-xs font-bold text-accent tracking-widest">{s.num}</span>
            <h3 className="font-heading font-bold text-xl text-primary-foreground mt-2 mb-3">{s.title}</h3>
            <p className="font-body text-primary-foreground/70 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MethodologySection;
