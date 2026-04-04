const Footer = () => (
  <footer className="bg-primary py-12 border-t border-primary-foreground/10">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-heading font-bold text-lg text-primary-foreground">SIRIUS</span>{" "}
          <span className="font-heading text-sm text-accent font-semibold">Teranga Consulting</span>
        </div>
        <p className="font-body text-primary-foreground/50 text-sm">
          © {new Date().getFullYear()} Sirius Teranga Consulting. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
