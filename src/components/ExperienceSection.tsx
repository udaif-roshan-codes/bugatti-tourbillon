import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { carData } from "@/data/carData";
import gallerySide from "@/assets/gallery-side.jpg";

const ExperienceSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-32 lg:py-48">
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 border-gold-gradient border-l" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
              The Experience
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              A New Era of{" "}
              <span className="text-gold-gradient">Automotive Art</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {carData.intro}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {carData.design}
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={gallerySide}
                alt="Bugatti Tourbillon Side"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            {/* Accent border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
