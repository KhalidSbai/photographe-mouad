import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <div className="pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      <SEO
        title="Contact Photographe Marrakech - Mouad Sbai"
        description="Contactez Mouad Sbai, photographe professionnel à Marrakech, pour un shooting portrait, mode, produit, mariage ou événement au Maroc."
        canonicalUrl="/contact"
      />
      <div className="max-w-3xl">
        <div className="space-y-16">
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 block">Contact</span>
            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter uppercase leading-[0.9]">
              Parlons de <br /> votre projet
            </h1>
            <p className="text-lg md:text-xl font-light opacity-60 leading-relaxed max-w-md">
              Que ce soit pour une collaboration éditoriale ou une séance privée, je serais ravi d'entendre votre histoire.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 block mb-1">Email</span>
                <span className="text-sm font-bold tracking-widest">sbaimouad1@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 block mb-1">Téléphone</span>
                <span className="text-sm font-bold tracking-widest">+212 6 63 29 95 41</span>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 block mb-1">Studio</span>
                <span className="text-sm font-bold tracking-widest">Guéliz, Marrakech, Maroc</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
