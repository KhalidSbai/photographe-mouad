import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "../components/SEO";
import imagesData from "../data/images.json";

const specializations = imagesData
  .filter(category => category.images && category.images.length > 0)
  .map(category => ({
    title: category.name,
    image: category.images[0],
    link: `/portfolio?cat=${category.id}`
  }));

const publications = ["Vogue", "Elle", "Harper's Bazaar", "L'Officiel", "GQ"];

export default function Home() {
  return (
    <div className="space-y-32 pb-32">
      <SEO 
        title="Sbai Mouad - Photographe Professionnel à Marrakech & Maroc"
        description="Découvrez l'univers de Sbai Mouad, photographe professionnel à Marrakech. Spécialisé en photographie de mode, portrait, et reportage de mariage au Maroc."
        canonicalUrl="/"
      />
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img
            src="https://images.unsplash.com/photo-1724371959066-307b8ea7e145?q=80&w=1632&auto=format&fit=crop&q=80&w=1200&fm=webp"
            alt="Sbai Mouad, Photographe Professionnel à Marrakech en plein shooting photo"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            className="text-white text-5xl md:text-8xl font-extrabold tracking-tighter uppercase mb-6 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="text-sm md:text-base tracking-[0.3em] font-normal mb-4 opacity-80">Photographe Marrakech</span>
            <span>Aura Narrative</span>
          </motion.h1>
          <motion.p
            className="text-white/80 text-xs md:text-sm uppercase tracking-[0.4em] font-light max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Le silence entre les moments capturé à Marrakech
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-12"
          >
            <Button
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-black transition-all px-10 py-6 text-xs uppercase tracking-[0.2em]"
              asChild
            >
              <Link to="/portfolio">Explorer la Galerie</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-px h-12 bg-white/30" />
        </motion.div>
      </section>

      {/* Specializations */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">Expertise</span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase leading-none">
              Spécialisations <br /> Artistiques
            </h2>
          </div>
          <Link to="/services" className="group flex items-center gap-4 text-xs uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-all">
            Voir tous les services <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {specializations.map((spec, i) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden mb-6">
                <img
                  src={spec.image}
                  alt={`Service de ${spec.title} - Photographe Maroc`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width={900}
                  height={1200}
                />
              </div>
              <h3 className="text-xl font-extrabold uppercase tracking-tighter mb-2">{spec.title}</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-40">Découvrir l'approche</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-secondary/30 py-32">
        <div className="px-6 md:px-12 max-w-7xl mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-12 block">Publications & Collaborations</span>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {publications.map((pub) => (
              <span
                key={pub}
                className="text-2xl md:text-4xl font-extrabold tracking-tighter uppercase opacity-20 hover:opacity-100 transition-opacity cursor-default"
              >
                {pub}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="px-6 md:px-12 max-w-4xl mx-auto py-32 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="sr-only">L'approche de votre photographe de mariage et mode à Marrakech</h2>
          <p className="text-2xl md:text-4xl font-light italic leading-relaxed mb-12">
            "La photographie n'est pas ce que l'on voit, mais ce que l'on ressent. Lors d'un shooting photo au Maroc ou pour un événement à Marrakech, la lumière raconte des histoires que seul le silence peut entendre."
          </p>
          <span className="text-xs uppercase tracking-[0.3em] font-bold">— Sbai Mouad</span>
        </motion.div>
      </section>
    </div>
  );
}
