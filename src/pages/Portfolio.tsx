import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { getResponsiveImageSrcSet } from "@/lib/images";
import SEO from "../components/SEO";
import imagesData from "../data/images.json";
const categories = [
  { id: "all", name: "Tout" },
  ...imagesData.map(cat => ({ id: cat.id, name: cat.name }))
];

const items = imagesData.flatMap((cat, catIndex) => 
  cat.images.map((img, index) => {
    const layoutIndex = catIndex * 10 + index;
    const size = layoutIndex % 5 === 0 ? "wide" : layoutIndex % 3 === 0 ? "tall" : "normal";
    return {
      id: `${cat.id}-${index}`,
      category: cat.id,
      size: size,
      image: img
    };
  })
);

const imageDimensions = {
  wide: { width: 1600, height: 900 },
  tall: { width: 900, height: 1600 },
  normal: { width: 1200, height: 1200 },
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all" 
    ? items 
    : items.filter(item => item.category === activeCategory);

  return (
    <>
      <SEO
        title="Portfolio Photographe Marrakech - Sbai Mouad"
        description="Explorez le portfolio de Sbai Mouad, photographe professionnel à Marrakech : architecture, portraits, événements, nature et mariages au Maroc."
        canonicalUrl="/portfolio"
      />
      <div className="pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
        <div className="space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-40">Galerie</span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter uppercase leading-none">
            Portfolio <br /> Immersif
          </h1>
        </div>

        <nav className="flex flex-wrap gap-6" aria-label="Filtrer le portfolio par catégorie">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              aria-pressed={activeCategory === cat.id}
              className={cn(
                "text-[10px] uppercase tracking-[0.2em] font-bold transition-all border-b-2 pb-1",
                activeCategory === cat.id ? "border-foreground opacity-100" : "border-transparent opacity-30 hover:opacity-60"
              )}
            >
              {cat.name}
            </button>
          ))}
        </nav>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence initial={false}>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className={cn(
                "relative group overflow-hidden bg-secondary/20",
                item.size === "wide" ? "md:col-span-2 aspect-[16/9] md:aspect-[2/1]" :
                item.size === "tall" ? "md:row-span-2 aspect-[3/4] md:aspect-[1/2]" :
                "aspect-square"
              )}
            >
              <img 
                src={item.image} 
                srcSet={getResponsiveImageSrcSet(item.image)}
                sizes={item.size === "wide" ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
                alt={`Portfolio ${item.id}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
                width={imageDimensions[item.size].width}
                height={imageDimensions[item.size].height}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center p-6">
                  <span className="text-[10px] text-white/60 uppercase tracking-[0.3em] mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-white text-xl font-extrabold uppercase tracking-tighter">
                    Vision {item.id}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      </div>
    </>
  );
}
