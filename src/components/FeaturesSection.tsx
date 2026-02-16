import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { carData } from "@/data/carData";
import { Zap, Gauge, Wind, Gem } from "lucide-react";
import galleryInterior from "@/assets/gallery-interior.jpg";

const stats = [
  { icon: Zap, label: "Power", value: carData.performance.power },
  { icon: Gauge, label: "0–100 km/h", value: carData.performance.acceleration },
  { icon: Wind, label: "Top Speed", value: carData.performance.topSpeed },
];

const features = [
  {
    title: "Performance",
    description: carData.performance.engine,
    icon: Zap,
  },
  {
    title: "Design",
    description: carData.design,
    icon: Wind,
  },
  {
    title: "Interior",
    description: carData.interior,
    icon: Gem,
  },
];

const FeaturesSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-80px" });

  return (
    <section id="features" className="relative py-32">
      {/* Stats bar */}
      <div ref={statsRef} className="max-w-5xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card p-6 md:p-10 text-center"
            >
              <stat.icon className="w-5 h-5 text-primary mx-auto mb-4" />
              <p className="text-3xl md:text-4xl font-display font-bold text-gold-gradient mb-2">
                {stat.value}
              </p>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Feature cards */}
      <div ref={featuresRef} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={featuresInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Engineering Excellence
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Crafted Without{" "}
            <span className="text-gold-gradient">Compromise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative bg-card border border-border p-6 md:p-10 hover:border-primary/30 transition-all duration-500"
            >
              <feature.icon className="w-6 h-6 text-primary mb-6" />
              <h3 className="font-display text-2xl font-semibold mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-primary/5 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Interior showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 relative overflow-hidden"
        >
          <img
            src={galleryInterior}
            alt="Bugatti Tourbillon Interior"
            className="w-full aspect-video object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-1/3" />
          <div className="absolute bottom-10 left-10 lg:bottom-16 lg:left-16 max-w-md">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
              Swiss Precision
            </p>
            <p className="text-lg text-foreground font-light leading-relaxed">
              {carData.interior}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
