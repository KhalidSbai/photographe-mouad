import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "../components/SEO";

const services = [
  "Portrait professionnel et artistique",
  "Shooting mode, editorial et lifestyle",
  "Photographie evenementielle et mariage",
  "Photographie produit, architecture et contenu de marque",
];

const locations = [
  "Medina de Marrakech",
  "Gueliz",
  "Palmeraie",
  "Desert d'Agafay",
  "Riads, hotels et lieux prives",
];

const faqs = [
  {
    question: "Quels types de shootings photo sont proposes a Marrakech ?",
    answer:
      "Mouad Sbai realise des portraits, shootings mode et lifestyle, reportages evenementiels, mariages, photos produit, architecture et contenus visuels pour marques a Marrakech et au Maroc.",
  },
  {
    question: "Est-il possible d'organiser une seance photo en exterieur ?",
    answer:
      "Oui. Les seances peuvent etre organisees en studio, en riad, dans la Medina, a Gueliz, dans la Palmeraie, au desert d'Agafay ou dans un lieu choisi selon le projet.",
  },
  {
    question: "Comment reserver un photographe a Marrakech ?",
    answer:
      "La reservation se fait par email ou telephone. Il suffit de preciser le type de shooting, la date souhaitee, le lieu et l'usage prevu des images.",
  },
];

const schemaData = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://mouadsbai.com/#business",
    name: "Mouad Sbai Photographe",
    url: "https://mouadsbai.com",
    image: "https://mouadsbai.com/logo/logo.png",
    email: "sbaimouad1@gmail.com",
    telephone: "+212663299541",
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Marrakech" },
      { "@type": "Country", name: "Morocco" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Marrakech",
      addressCountry: "MA",
    },
    serviceType: services,
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://mouadsbai.com/#person",
    name: "Mouad Sbai",
    jobTitle: "Photographe professionnel",
    url: "https://mouadsbai.com",
    email: "sbaimouad1@gmail.com",
    telephone: "+212663299541",
    worksFor: { "@id": "https://mouadsbai.com/#business" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function PhotographeMarrakech() {
  return (
    <div className="pt-40 pb-32">
      <SEO
        title="Photographe Marrakech - Mouad Sbai | Portrait, Mode & Evenement"
        description="Mouad Sbai est photographe professionnel a Marrakech pour portraits, mode, lifestyle, mariage, evenementiel, produit et contenus de marque au Maroc."
        canonicalUrl="/photographe-marrakech"
        schemaData={schemaData}
      />

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="max-w-4xl space-y-8">
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 block">
            Photographe Marrakech
          </span>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter uppercase leading-[0.9]">
            Photographe <br /> a Marrakech
          </h1>
          <p className="text-lg md:text-xl font-light opacity-70 leading-relaxed max-w-3xl">
            Mouad Sbai accompagne particuliers, couples, marques, hotels, riads et entreprises
            dans la creation d'images fortes, elegantes et naturelles a Marrakech et partout au Maroc.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="px-10 py-6 text-xs uppercase tracking-[0.2em]" asChild>
              <Link to="/contact">Reserver une seance</Link>
            </Button>
            <Button
              variant="outline"
              className="px-10 py-6 text-xs uppercase tracking-[0.2em] border-foreground/20"
              asChild
            >
              <Link to="/portfolio">Voir le portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter">
              Services photo
            </h2>
            <p className="text-base md:text-lg font-light opacity-65 leading-relaxed">
              Chaque shooting est prepare selon le lieu, la lumiere, l'objectif de communication
              et l'identite visuelle du client. L'approche reste sobre, precise et orientee vers
              des images utilisables sur site web, reseaux sociaux, campagnes, catalogues ou souvenirs personnels.
            </p>
          </div>
          <ul className="space-y-5">
            {services.map((service) => (
              <li key={service} className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-bold">
                <span className="w-8 h-px bg-foreground/20" />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary/20 py-32 px-6 md:px-12 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter">
              Lieux de shooting
            </h2>
            <p className="text-base md:text-lg font-light opacity-65 leading-relaxed">
              Marrakech offre une lumiere et des decors uniques : ruelles, terrasses, riads,
              architecture contemporaine, desert et lieux prives. Le choix du lieu se fait selon
              le style recherche et le confort de la seance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {locations.map((location) => (
              <div key={location} className="border border-border/70 p-6">
                <h3 className="text-sm uppercase tracking-[0.2em] font-bold">{location}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-5xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 block mb-8">
          Questions frequentes
        </span>
        <div className="space-y-10">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b border-border/60 pb-8">
              <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-tighter mb-4">
                {faq.question}
              </h2>
              <p className="text-base font-light opacity-65 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
