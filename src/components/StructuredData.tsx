export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://habitarnutricion.vercel.app/#organization",
    name: "Habitar Nutrición",
    alternateName: "Habitar Nutricion",
    url: "https://habitarnutricion.vercel.app",
    logo: "https://habitarnutricion.vercel.app/og-image.jpg",
    image: "https://habitarnutricion.vercel.app/og-image.jpg",
    description:
      "Coaching nutricional con enfoque humano. Antropometría ISAK, gestión de hábitos y planes personalizados para lograr cambios sostenibles.",
    founder: {
      "@type": "Person",
      name: "Julieta Daina Brest",
      jobTitle: "Nutricionista Deportiva",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barcelona",
      addressCountry: "ES",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+34-611-542-474",
      email: "julietadainabrest@gmail.com",
      contactType: "Customer Service",
      availableLanguage: ["Spanish", "English"],
    },
    sameAs: [
      // Add your social media profiles here when available
      // "https://www.instagram.com/habitarnutricion",
      // "https://www.linkedin.com/in/julieta-daina-brest",
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "41.3851",
        longitude: "2.1734",
      },
      geoRadius: "50000", // 50km radius
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Nutrición",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Evaluación Inicial + Plan Nutricional",
            description:
              "Consulta inicial con evaluación completa y plan personalizado mensual",
            serviceType: "Nutritional Consultation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Seguimiento y Ajustes",
            description:
              "Revisión del proceso, sensaciones, adherencia y mediciones antropométricas",
            serviceType: "Nutritional Follow-up",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Antropometría ISAK",
            description:
              "Mediciones corporales certificadas según protocolo ISAK",
            serviceType: "Body Composition Analysis",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://habitarnutricion.vercel.app/#website",
    url: "https://habitarnutricion.vercel.app",
    name: "Habitar Nutrición",
    description:
      "Coaching nutricional consciente y antropometría ISAK en Barcelona",
    publisher: {
      "@id": "https://habitarnutricion.vercel.app/#organization",
    },
    inLanguage: ["es", "en"],
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://habitarnutricion.vercel.app/#service",
    name: "Habitar Nutrición - Coaching Nutricional",
    description:
      "Servicios profesionales de nutrición deportiva, coaching nutricional y antropometría ISAK en Barcelona",
    provider: {
      "@id": "https://habitarnutricion.vercel.app/#organization",
    },
    areaServed: {
      "@type": "City",
      name: "Barcelona",
    },
    hasOfferCatalog: {
      "@id": "https://habitarnutricion.vercel.app/#organization",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
    </>
  );
}
