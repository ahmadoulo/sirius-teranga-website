const CtaSection = () => {
  const scrollTo = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-5">
          Prêt à transformer votre organisation ?
        </h2>
        <p className="font-body text-primary-foreground/70 text-lg mb-8">
          Contactez-nous pour discuter de vos enjeux et découvrir comment STC peut vous accompagner vers plus de performance.
        </p>
        <button
          onClick={scrollTo}
          className="bg-accent text-accent-foreground font-heading font-semibold px-10 py-4 rounded-md text-base hover:bg-gold-light transition-colors"
        >
          Parlons de votre projet
        </button>
      </div>
    </section>
  );
};

export default CtaSection;
