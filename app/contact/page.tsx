import ContactPageClient from '@/components/ContactPageClient';
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Cisco's Painting | Get a Free Estimate in Salem, Oregon</title>
        <meta
          name="description"
          content="Contact Cisco's Painting for expert painting, siding, roofing, carpentry, and restoration services in Salem, Oregon and Portland metro."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ciscospainting.com/contact" />

        <meta property="og:title" content="Contact Cisco's Painting" />
        <meta
          property="og:description"
          content="Reach out for a free estimate or questions about painting, siding, roofing, carpentry, and restoration services."
        />
        <meta property="og:image" content="https://ciscospainting.com/images/logo-bg.jpg" />
        <meta property="og:url" content="https://ciscospainting.com/contact" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Cisco's Painting" />
        <meta
          name="twitter:description"
          content="Reach out for a free estimate or questions about painting, siding, roofing, carpentry, and restoration services."
        />
        <meta name="twitter:image" content="https://ciscospainting.com/images/logo-bg.jpg" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Cisco's Painting",
              "image": "https://ciscospainting.com/images/logo-bg.jpg",
              "url": "https://ciscospainting.com/contact",
              "telephone": "+1-503-999-9060",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1489 Arabian Ave SE",
                "addressLocality": "Salem",
                "addressRegion": "OR",
                "postalCode": "97317",
                "addressCountry": "US"
              },
              "description":
                "Professional painting, siding, roofing, carpentry, and restoration services in Salem, Oregon and Portland metro."
            }),
          }}
        />
      </Head>
      <ContactPageClient />
    </>
  );
}

