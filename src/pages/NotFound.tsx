import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <div className="pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto min-h-[70vh] flex items-center">
      <SEO
        title="Page introuvable - Sbai Mouad Photographe Marrakech"
        description="La page demandée est introuvable. Retrouvez le portfolio, les services et les informations de contact de Sbai Mouad, photographe à Marrakech."
        canonicalUrl="/404"
      />
      <section className="max-w-3xl space-y-8">
        <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 block">Erreur 404</span>
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter uppercase leading-[0.9]">
          Page <br /> introuvable
        </h1>
        <p className="text-lg md:text-xl font-light opacity-60 leading-relaxed">
          Cette adresse n'existe pas ou a été déplacée. Vous pouvez revenir au portfolio pour continuer la visite.
        </p>
        <Button
          variant="outline"
          className="px-10 py-6 text-xs uppercase tracking-[0.2em] border-foreground/20"
          asChild
        >
          <Link to="/portfolio">Retour au portfolio</Link>
        </Button>
      </section>
    </div>
  );
}
