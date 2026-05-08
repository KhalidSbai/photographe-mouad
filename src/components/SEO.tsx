import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  schemaData?: object | object[];
}

const siteUrl = 'https://www.sbaimouad.com';
const defaultOgImage = `${siteUrl}/logo/logo.png`; // URL par défaut si pas d'image spécifiée

export default function SEO({ title, description, canonicalUrl, ogImage, schemaData }: SEOProps) {
  // S'assurer que le chemin commence par un slash si ce n'est pas déjà l'URL complète
  const path = canonicalUrl.startsWith('http') ? canonicalUrl : canonicalUrl.startsWith('/') ? canonicalUrl : `/${canonicalUrl}`;
  const fullCanonicalUrl = path.startsWith('http') ? path : `${siteUrl}${path}`;
  const fullImageUrl = ogImage || defaultOgImage;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Schema.org JSON-LD */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
}
