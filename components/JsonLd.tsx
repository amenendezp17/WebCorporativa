import { business } from "@/lib/business";

// JSON-LD schema.org/LocalBusiness — habilita rich snippets (horario, dirección, valoraciones) en Google.
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ElectronicsStore",
    name: business.nombre,
    description: business.descripcionCorta,
    image: `${business.url}/images/hero-taller.svg`,
    url: business.url,
    telephone: business.telefono,
    email: business.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.direccion.calle,
      addressLocality: business.direccion.localidad,
      postalCode: business.direccion.codigoPostal,
      addressRegion: business.direccion.region,
      addressCountry: business.direccion.pais,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    openingHours: business.horarioSchema,
    sameAs: [business.redes.instagram, business.redes.facebook, business.redes.linkedin],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "3",
    },
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
