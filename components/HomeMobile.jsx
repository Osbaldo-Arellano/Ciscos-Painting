'use client';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Typography, Button } from '@mui/material';
import StackedServiceCards from '@/components/StackedServiceCards';
import { useState } from 'react';
import EstimateModal from '@/components/EstimateModal';
import ContactForm from '@/components/ContactForm';
import ServicesHorizontalScroll from '@/components/ServicesHorizontalScroll';
import MobileNavbar from '@/components/MobileNavbar'; // adjust path if needed


export default function MobileHome() {
  const [modalOpen, setModalOpen] = useState(false);

  const servicesData = [
    { image: '/images/painting.jpg', title: 'Painting', description: 'Professional painting services to refresh and beautify your property.' },
    { image: '/images/siding.jpg', title: 'Siding', description: 'Durable siding installation and repair to protect and enhance your exterior.' },
    { image: '/images/fences.jpg', title: 'Fences', description: 'Custom fence design and installation for privacy and security.' },
    { image: '/images/roofing.jpg', title: 'Roofing', description: 'Reliable roofing solutions to keep your home safe and weatherproof.' },
    { image: '/images/drywall.jpg', title: 'Drywall', description: 'Expert drywall installation, finishing, and repair services.' },
    { image: '/images/carpentry.jpg', title: 'Carpentry', description: 'Skilled carpentry work tailored to your construction or renovation needs.' },
    { image: '/images/janitorial.jpg', title: 'Janitorial', description: 'Comprehensive janitorial services for commercial and residential spaces.' },
    { image: '/images/cabinet-repaint.jpg', title: 'Cabinet Re-paint', description: 'Transform your cabinets with professional repainting and finishing.' },
    { image: '/images/restoration.jpg', title: 'Restoration', description: 'Quality restoration services to bring your property back to life.' },
  ];

  return (
    <>
       <Head>
        <title>Cisco's GC Painting | Salem's Premier Contractor</title>
        <meta
          name="description"
          content="Cisco's GC Painting provides expert painting, siding, roofing, carpentry, and restoration services in Salem, Oregon and Portland metro."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ciscospainting.com/" />
        <meta property="og:title" content="Cisco's GC Painting" />
        <meta property="og:description" content="Reviving Homes, Restoring Trust in Salem, Oregon." />
        <meta property="og:image" content="https://ciscospainting.com/images/nice-house.jpg" />
        <meta property="og:url" content="https://ciscospainting.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cisco's GC Painting" />
        <meta name="twitter:description" content="Reviving Homes, Restoring Trust in Salem, Oregon." />
        <meta name="twitter:image" content="https://ciscospainting.com/images/nice-house.jpg" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Cisco's GC Painting",
              "image": "https://ciscospainting.com/images/logo-bg.jpg",
              "url": "https://ciscospainting.com/",
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
                "Professional painting, siding, roofing, carpentry, and restoration services in Salem, Oregon and Portland metro.",
              "sameAs": [
                "https://www.facebook.com/yourpage",
                "https://www.instagram.com/yourprofile"
              ]
            }),
          }}
        />
      </Head>

      <EstimateModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <MobileNavbar />
      <Box>
          {/* Hero Section */}
        <section>
          <Box
            sx={{
              position: 'relative',
              height: { xs: '75vh', md: '100vh' },
              width: '100%',
              backgroundImage: 'url(/images/nice-house.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                bgcolor: 'rgba(0, 0, 0, 0.6)',
                zIndex: 1,
              }}
            />

            <Box
              component="header"
              sx={{
                position: 'absolute',
                top: '50%',
                left: 0,
                transform: 'translateY(-60%)',
                zIndex: 2,
                width: { xs: '90%', sm: '70%', md: '55%' },
                p: { xs: 2, sm: 9 },
                backgroundColor: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(6px)',
                borderRadius: 2,
                color: '#eee',
              }}
            >
              <Typography variant="h6" sx={{ color: '#ccc', mb: 1 }}>
                00/ Welcome
              </Typography>
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: '1.8rem', sm: '2.5rem', md: '4rem' },
                  fontFamily: '"Inter", sans-serif',
                  lineHeight: 1.2,
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                With 20+ Years of Experience, We Are Here To Serve You
              </Typography>
            </Box>

            <Box
              sx={{
                position: 'absolute',
                bottom: { xs: 40, md: 100 },
                left: { xs: '5%', md: '5%' },
                color: '#fff',
                maxWidth: { xs: '90%', sm: 400 },
                zIndex: 2,
              }}
            >
              <Box
                sx={{
                  bgcolor: 'rgba(0,0,0,0.4)',
                  backdropFilter: 'blur(6px)',
                  borderRadius: 2,
                  p: 2,
                  mb: 3,
                  color: '#eee',
                }}
              >
                <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                  Get in touch with one of Salem&apos;s premier contractors.
                </Typography>
              </Box>

              {/* MODAL TRIGGER BUTTON */}
              <Button
                variant="contained"
                size="medium"
                onClick={() => setModalOpen(true)}
                sx={{
                  backgroundColor: '#f44336',
                  color: '#fff',
                  fontWeight: 'bold',
                  borderRadius: '999px',
                  px: 3,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  '&:hover': { backgroundColor: '#d32f2f' },
                }}
              >
                Get Estimate
              </Button>
            </Box>
          </Box>
        </section>

        {/* Services */}
        <Box sx={{ background: '#1a1a1a'}}>
          <ServicesHorizontalScroll />
        </Box>

        {/* About */}
        <Box sx={{ background: '#181818', py: 6, px: 2, color: '#ccc' }}>
          <Typography
        id="services-heading"
        variant="h4"
        sx={{ color: '#ccc', mb: 2 }}
        className="fade-in"
        tabIndex={-1}
      >
        02 / About Us
      </Typography>
          <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
            Reviving Homes, Restoring Trust
          </Typography>
          <Image
            src="/images/home2.jpg"
            alt="home"
            width={900}
            height={700}
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            priority
          />
          <Typography sx={{ mt: 2, fontSize: '1rem' }}>
            Cisco's GC Painting is Salem's premier contractor for painting, siding, fencing, roofing, drywall, carpentry, janitorial, cabinet refinishing, and restoration.
          </Typography>
          <Link href="/gallery" passHref>
            <Button
              variant="outlined"
              sx={{ color: '#ccc', borderColor: '#ccc', borderRadius: 999, mt: 3 }}
            >
              View Gallery
            </Button>
          </Link>
        </Box>

        {/* Contact */}
        <Box
          sx={{
            flex: 1,
            p: 2,
            borderRadius: '16px',
            position: 'relative',
            overflow: 'hidden',
            color: '#eee',
            background:
              'linear-gradient(25deg, #2e2e2e, #1a1a1a, #1a1231)',

            boxShadow: '0 8px 30px rgba(0,0,0,0.9)',

            // Glow effect circles for depth and softness
            '&::before': {
              content: '""',
              position: 'absolute',
              width: '280px',
              height: '280px',
              background:
                'radial-gradient(circle at center, rgb(216, 6, 6) 0%, transparent 70%)', // red glow
              opacity: 0.3,
              borderRadius: '50%',
              filter: 'blur(70px)',
              zIndex: 0,
              transform: 'rotate(15deg)',
            },

            '&::after': {
              content: '""',
              position: 'absolute',
              width: '320px',
              height: '320px',
              background:
                'radial-gradient(circle at center, #000000 0%, transparent 80%)',
              opacity: 0.3,
              borderRadius: '50%',
              filter: 'blur(90px)',
              zIndex: 0,
              transform: 'rotate(-10deg)',
            },

            '& > div': {
              position: 'relative',
              zIndex: 1,
              backgroundColor: 'rgba(20, 20, 30, 0.8)',
              borderRadius: '12px',
              padding: 3,
              boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.05)',
            },

            '& .MuiTextField-root input, & textarea': {
              color: '#eee',
            },
            '& .MuiInputLabel-root': {
              color: '#bbb',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#555',
              },
              '&:hover fieldset': {
                borderColor: '#d80606', // bright red on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#d80606',
                boxShadow: '0 0 8px #d80606', // red glow on focus
              },
            },
          }}
        >
          <ContactForm />
        </Box>

      </Box>
    </>
  );
}


