import heroImage from "@/assets/hero-bugatti.jpg";
import gallerySide from "@/assets/gallery-side.jpg";
import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryRear from "@/assets/gallery-rear.jpg";
import galleryEngine from "@/assets/gallery-engine.jpg";

export const carData = {
  name: "Bugatti Tourbillon",
  tagline: "The Future of Hypercar Engineering",
  intro:
    "The Bugatti Tourbillon marks a revolutionary shift in hypercar design, introducing a naturally aspirated V16 hybrid powertrain and a bold new design language for the brand.",
  heroImage,
  performance: {
    power: "1,800+ HP",
    engine: "8.3L Naturally Aspirated V16 + Hybrid System",
    topSpeed: "445+ km/h (276+ mph)",
    acceleration: "Under 2.0 seconds",
  },
  design:
    "Sculpted aerodynamics, aggressive proportions, and advanced airflow engineering define the Tourbillon's breathtaking form.",
  interior:
    "Exposed mechanical gauges inspired by Swiss watchmaking, luxury leather, and carbon fiber create a cockpit that blends art with engineering.",
  exclusivity:
    "Produced in extremely limited numbers, each Tourbillon is handcrafted for ultimate rarity and personalization.",
  gallery: [
    { src: heroImage, alt: "Bugatti Tourbillon Front 3/4 View", label: "Exterior" },
    { src: gallerySide, alt: "Bugatti Tourbillon Side Profile", label: "Profile" },
    { src: galleryInterior, alt: "Bugatti Tourbillon Interior", label: "Interior" },
    { src: galleryRear, alt: "Bugatti Tourbillon Rear View", label: "Rear" },
    { src: galleryEngine, alt: "Bugatti Tourbillon V16 Engine", label: "Engine" },
  ],
  navLinks: [
    { label: "Experience", href: "#experience" },
    { label: "Performance", href: "#features" },
    { label: "Gallery", href: "#gallery" },
    { label: "Exclusivity", href: "#exclusivity" },
  ],
};
