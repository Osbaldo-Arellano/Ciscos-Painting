import React from 'react';
import ServicesPageClient from '@/components/ServicesPage';
import Head from 'next/head';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Cisco's GC Painting - Quality Craftsmanship in Oregon</title>
        <meta
          name="description"
          content="Explore the wide range of quality painting, roofing, siding, and restoration services offered by Cisco's GC Painting in Salem and Portland metro."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ciscosgc.com/services" />

        <meta property="og:title" content="Services | Cisco's GC Painting" />
        <meta
          property="og:description"
          content="Explore the wide range of quality painting, roofing, siding, and restoration services offered by Cisco's GC Painting in Salem and Portland metro."
        />
        <meta property="og:image" content="https://ciscosgc.com/images/services-banner.webp" />
        <meta property="og:url" content="https://ciscosgc.com/services" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | Cisco's GC Painting" />
        <meta
          name="twitter:description"
          content="Explore the wide range of quality painting, roofing, siding, and restoration services offered by Cisco's GC Painting in Salem and Portland metro."
        />
        <meta name="twitter:image" content="https://ciscosgc.com/images/services-banner.webp" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Cisco's GC Painting",
                image: "https://ciscosgc.com/images/logo-bg.jpg",
                url: "https://ciscosgc.com/services",
                telephone: "+1-503-999-9060",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "1489 Arabian Ave SE",
                  addressLocality: "Salem",
                  addressRegion: "OR",
                  postalCode: "97317",
                  addressCountry: "US"
                },
                description:
                  "Cisco's GC Painting provides expert services in painting, roofing, siding, fences, drywall, janitorial, cabinet refinishing, and more across the Salem and Portland metro areas."
              },
              // Services as Products for rich results
              ...[
                { name: "Painting", desc: "Interior and exterior painting with premium finishes." },
                { name: "Siding", desc: "Durable siding installation and repair services." },
                { name: "Fences", desc: "Custom fence building and restoration for homes and businesses." },
                { name: "Roofing", desc: "Professional roof repairs and full replacements." },
                { name: "Drywall", desc: "Precise drywall hanging, taping, and texturing." },
                { name: "Carpentry", desc: "Detailed carpentry for trim, framing, and custom builds." },
                { name: "Janitorial", desc: "Commercial and residential cleaning services." },
                { name: "Cabinet Repaint", desc: "Cabinet refinishing and repainting with quality finishes." },
                { name: "Restoration", desc: "Full-service damage restoration for interiors and exteriors." }
              ].map(service => ({
                "@context": "https://schema.org",
                "@type": "Product",
                name: service.name,
                description: service.desc,
                brand: {
                  "@type": "Brand",
                  name: "Cisco's GC Painting"
                },
                url: "https://www.ciscosgc.com//services",
                offers: {
                  "@type": "Offer",
                  priceCurrency: "USD",
                  price: "0.00",
                  availability: "https://schema.org/InStock",
                  url: "https://www.ciscosgc.com//contact"
                }
              }))
            ])
          }}
        />
      </Head>
      <ServicesPageClient />
    </>
  );
}
