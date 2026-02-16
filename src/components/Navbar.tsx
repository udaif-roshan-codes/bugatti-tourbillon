import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { carData } from "@/data/carData";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 lg:py-6">
        <a href="#" className="font-display text-lg lg:text-2xl tracking-[0.2em] uppercase text-gold-gradient font-semibold z-50 relative">
          Bugatti
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {carData.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#gallery"
          className="hidden md:inline-block text-sm tracking-[0.15em] uppercase border border-primary/40 text-primary px-5 py-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Discover
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2 -mr-2 z-50 relative active:scale-95 transition-transform"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-2xl z-40 md:hidden flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center gap-8 py-8 w-full">
              {carData.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#gallery"
                onClick={() => setMobileOpen(false)}
                className="mt-4 text-sm tracking-[0.15em] uppercase border border-primary/40 text-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Discover
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
