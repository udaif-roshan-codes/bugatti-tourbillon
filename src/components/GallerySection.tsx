import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { carData } from "@/data/carData";

const GallerySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="gallery" className="relative py-16 md:py-32">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Gallery
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Every Angle, a{" "}
            <span className="text-gold-gradient">Masterpiece</span>
          </h2>
        </motion.div>

        {/* Main image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-6 overflow-hidden"
        >
          <img
            src={carData.gallery[activeIndex].src}
            alt={carData.gallery[activeIndex].alt}
            className="w-full aspect-video object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
        </motion.div>

        {/* Thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 md:gap-3"
        >
          {carData.gallery.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative overflow-hidden aspect-video transition-all duration-300 ${activeIndex === i
                ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                : "opacity-50 hover:opacity-80"
                }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-2">
                <span className="text-[10px] tracking-[0.2em] uppercase text-foreground">
                  {item.label}
                </span>
              </div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
