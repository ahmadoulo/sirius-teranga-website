import { BarChart3, Cog, GraduationCap, LayoutGrid, MonitorSmartphone, Shield } from "lucide-react";

const services = [
  {
    icon: LayoutGrid,
    title: "Conseil & Audit Organisationnel",
    desc: "Analyse de vos structures, cartographie des processus et recommandations pour une organisation plus efficace.",
  },
  {
    icon: MonitorSmartphone,
    title: "Transformation Digitale",
    desc: "Accompagnement dans la digitalisation de vos activités et l'intégration de solutions technologiques adaptées.",
  },
  {
    icon: Cog,
    title: "Optimisation des Processus",
    desc: "Amélioration de l'efficacité opérationnelle, réduction des gaspillages et mise en place de bonnes pratiques.",
  },
  {
    icon: BarChart3,
    title: "Systèmes d'Information",
    desc: "Mise en place de GMAO/EAM, pilotage par les données et solutions de reporting décisionnel.",
  },
  {
    icon: Shield,
    title: "ISO & Qualité (SMQ)",
    desc: "Accompagnement vers les certifications ISO, mise en place de systèmes de management de la qualité.",
  },
  {
    icon: GraduationCap,
    title: "Formation & Transfert de Compétences",
    desc: "Programmes de formation professionnelle pour autonomiser vos équipes et renforcer leurs capacités.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-surface">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-14">
        <span className="font-heading text-sm font-semibold text-accent uppercase tracking-widest">Expertise</span>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-3 mb-4">
          Nos Services
        </h2>
        <p className="font-body text-text-muted text-lg max-w-2xl mx-auto">
          Des solutions structurées pour accompagner votre transformation et améliorer durablement votre performance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s) => (
          <div key={s.title} className="group bg-surface-alt rounded-lg p-8 border border-border hover:border-accent/30 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
              <s.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
            </div>
            <h3 className="font-heading font-bold text-lg text-foreground mb-3">{s.title}</h3>
            <p className="font-body text-text-muted leading-relaxed text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
