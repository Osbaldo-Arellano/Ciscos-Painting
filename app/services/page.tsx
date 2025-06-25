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
        <link rel="canonical" href="https://ciscospainting.com/services" />

        <meta property="og:title" content="Services | Cisco's GC Painting" />
        <meta
          property="og:description"
          content="Explore the wide range of quality painting, roofing, siding, and restoration services offered by Cisco's GC Painting in Salem and Portland metro."
        />
        <meta property="og:image" content="https://ciscospainting.com/images/services-banner.jpg" />
        <meta property="og:url" content="https://ciscospainting.com/services" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | Cisco's GC Painting" />
        <meta
          name="twitter:description"
          content="Explore the wide range of quality painting, roofing, siding, and restoration services offered by Cisco's GC Painting in Salem and Portland metro."
        />
        <meta name="twitter:image" content="https://ciscospainting.com/images/services-banner.jpg" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Cisco's GC Painting",
              image: "https://ciscospainting.com/images/logo-bg.jpg",
              url: "https://ciscospainting.com/services",
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
                "Offering quality painting, roofing, siding, and restoration services in Salem, Oregon and Portland metro.",
              service: [
                {
                  "@type": "Service",
                  name: "Painting",
                  description: "Interior and exterior painting with premium finishes."
                },
                {
                  "@type": "Service",
                  name: "Roofing",
                  description: "Expert roofing solutions for all types of homes."
                },
                {
                  "@type": "Service",
                  name: "Siding",
                  description: "Durable siding installation and repairs."
                },
                {
                  "@type": "Service",
                  name: "Restoration",
                  description: "Comprehensive restoration services after damage."
                },
                {
                  "@type": "Service",
                  name: "Carpentry",
                  description: "Custom woodwork and carpentry craftsmanship."
                },
              ],
              sameAs: [
                "https://www.facebook.com/yourpage",
                "https://www.instagram.com/yourprofile"
              ]
            }),
          }}
        />
      </Head>
      <ServicesPageClient />
    </>
  );
}
