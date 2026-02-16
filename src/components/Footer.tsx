const Footer = () => {
  return (
    <footer className="border-t border-border py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <p className="font-display text-xl tracking-[0.2em] uppercase text-gold-gradient font-semibold mb-2">
              Bugatti
            </p>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
              Molsheim, Alsace, France
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-10">
            {["Heritage", "Models", "Ownership", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs text-muted-foreground">
            © 2024 Bugatti Automobiles S.A.S. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            An experience beyond imagination.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
