import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center max-w-4xl py-32">
        <div className="inline-block bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 mb-8">
          <span className="font-body text-sm text-primary-foreground">Cabinet de conseil en organisation & transformation</span>
        </div>

        <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
          Transformez votre organisation.{" "}
          <span className="text-accent">Accélérez votre performance.</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          STC accompagne les entreprises dans l'optimisation de leurs processus, la transformation digitale et l'amélioration durable de leur performance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo("#contact")}
            className="bg-accent text-accent-foreground font-heading font-semibold px-8 py-3.5 rounded-md text-base hover:bg-gold-light transition-colors"
          >
            Nous contacter
          </button>
          <button
            onClick={() => scrollTo("#services")}
            className="border border-primary-foreground/30 text-primary-foreground font-heading font-semibold px-8 py-3.5 rounded-md text-base hover:bg-primary-foreground/10 transition-colors"
          >
            Découvrir nos services
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
