import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { carData } from "@/data/carData";
import galleryEngine from "@/assets/gallery-engine.jpg";

const ExclusivitySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="exclusivity" className="relative py-16 md:py-32 lg:py-48">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="relative order-2 lg:order-1"
          >
            <img
              src={galleryEngine}
              alt="V16 Engine Detail"
              className="w-full aspect-square object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
              Exclusivity
            </p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight">
              Beyond{" "}
              <span className="text-gold-gradient">Rare</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {carData.exclusivity}
            </p>
            <div className="border-t border-gold-gradient pt-8">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                Starting from
              </p>
              <p className="font-display text-3xl text-gold-gradient font-bold">
                €3,800,000
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExclusivitySection;
