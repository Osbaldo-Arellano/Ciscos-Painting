import ResponsiveHome from './ResponsiveHome';
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | Cisco's General Contracor in Painting - Quality Craftsmanship in Oregon</title>
        <meta
          name="description"
          content="Cisco's General Contracor in Painting offers expert residential and commercial painting, roofing, siding, carpentry, and restoration services in Salem, Oregon and Portland metro since 2013."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ciscospainting.com" />

        <meta property="og:title" content="Home | Cisco's General Contractor in Painting" />
        <meta
          property="og:description"
          content="Cisco's General Contracor in Painting offers expert residential and commercial painting, roofing, siding, carpentry, and restoration services in Salem, Oregon and Portland metro since 2013."
        />
        <meta property="og:image" content="https://ciscospainting.com/images/logo-bg.jpg" />
        <meta property="og:url" content="https://ciscospainting.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | Cisco's General Contractor in Painting" />
        <meta
          name="twitter:description"
          content="Cisco's General Contracor in Painting offers expert residential and commercial painting, roofing, siding, carpentry, and restoration services in Salem, Oregon and Portland metro since 2013."
        />
        <meta name="twitter:image" content="https://ciscospainting.com/images/logo-bg.jpg" />

        <meta name="google-site-verification" content="-F9-REPSbdFD-4Gjhw2TcjqLugLc_lwIV__k4ECWG3k" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Cisco's General Contractor in Painting",
              image: "https://ciscospainting.com/images/logo-bg.jpg",
              url: "https://ciscospainting.com",
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
                "Expert residential and commercial painting, roofing, siding, carpentry, and restoration services in Salem, Oregon and Portland metro since 2013.",
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
                }
              ],
              sameAs: [
                "https://www.facebook.com/yourpage",
                "https://www.instagram.com/yourprofile"
              ]
            }),
          }}
        />
      </Head>

      <main id="main-content" tabIndex={-1}>
        <ResponsiveHome />
      </main>
    </>
  );
}
