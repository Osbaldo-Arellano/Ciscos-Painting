'use client';

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { Box, Typography, useMediaQuery } from '@mui/material';
import DesktopNav from '@/components/Navbar';
import MobileNav from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';

export default function GalleryPage() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [isDark, setIsDark] = useState(true);
  const [showScrollHint, setShowScrollHint] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsDark(localStorage.getItem('theme') === 'dark');
    const handleScroll = () => setShowScrollHint(window.scrollY <= 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('fade-in-visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Gallery | Cisco's General Contractor in Painting - Oregon's Trusted Contractor</title>
        <meta
          name="description"
          content="Explore Cisco's General Contractor in Painting portfolio showcasing expert painting, siding, roofing, carpentry, and restoration projects in Oregon since 2013."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ciscospainting.com/gallery" />
        <meta property="og:title" content="Gallery | Cisco's General Contractor in Paintingg" />
        <meta property="og:description" content="Explore Cisco's General Contractor in Painting portfolio showcasing expert painting, siding, roofing, carpentry, and restoration projects in Oregon since 2013." />
        <meta property="og:image" content="https://ciscospainting.com/images/gallery-banner.jpg" />
        <meta property="og:url" content="https://ciscospainting.com/gallery" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery | Cisco's General Contractor in Painting" />
        <meta name="twitter:description" content="Explore Cisco's General Contractor in Painting portfolio showcasing expert painting, siding, roofing, carpentry, and restoration projects in Oregon since 2013." />
        <meta name="twitter:image" content="https://ciscospainting.com/images/gallery-banner.jpg" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Cisco's General Contractor in Painting",
              image: "https://ciscospainting.com/images/logo-bg.jpg",
              url: "https://ciscospainting.com/gallery",
              telephone: "+1-503-999-9060",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1489 Arabian Ave SE",
                addressLocality: "Salem",
                addressRegion: "OR",
                postalCode: "97317",
                addressCountry: "US"
              },
              description: "Explore Cisco's General Contractor in Painting portfolio showcasing expert painting, siding, roofing, carpentry, and restoration projects in Oregon since 2013.",
            }),
          }}
        />
      </Head>

      <GlobalStyles />
      {isDesktop ? <DesktopNav /> : <MobileNav />}

      <Box sx={{ bgcolor: '#111', color: '#eee', minHeight: '100vh' }}>
        <HeroSection ref={heroRef} />

        {showScrollHint && <ScrollHint />}

        <Box
          sx={{
            marginLeft: isDesktop ? 0 : -9,
            marginRight: isDesktop ? 10 : 0,
            bgcolor: '#111',
            mb: 8,
          }}
        >
          <Projects aria-label="Gallery of completed projects" />
        </Box>

        {/* 🔥 New Video Gallery Section */}
        <VideoGallerySection />

        <Footer />
      </Box>
    </>
  );
}

function GlobalStyles() {
  return (
    <style jsx global>{`
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .fade-in {
        opacity: 0;
        animation: fadeIn 0.8s ease forwards;
      }
      .fade-in-visible {
        opacity: 1;
      }
    `}</style>
  );
}

const HeroSection = React.forwardRef<HTMLDivElement>((_, ref) => (
  <Box
    ref={ref}
    sx={{
      position: 'relative',
      height: { xs: '75vh', md: '100vh' },
      width: '100%',
      backgroundImage: 'url(/images/banner.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    className="fade-in"
  >
    <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0, 0, 0, 0.7)', zIndex: 1 }} />
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
        bgcolor: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(6px)',
        borderRadius: 2,
        color: '#eee',
        textAlign: 'left',
      }}
    >
      <Typography variant="h6" sx={{ color: '#bbb', mb: 1 }} id="gallery-hero-title">
        00/ See Our Work
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
        Proudly Serving Oregon Since 2013
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: '#ddd' }}>
        Painting, Siding, Fences, Roofing, Drywall, Carpentry, Janitorial, Cabinet Refinishing, Restoration.
        <br />
        Cisco's General Contractor in Painting does it all — built on quality, finished with care.
      </Typography>
    </Box>
  </Box>
));

function ScrollHint() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        bgcolor: 'rgba(0,0,0,0.7)',
        backdropFilter: 'blur(6px)',
        px: 4,
        py: 1.5,
        borderRadius: 4,
        zIndex: 1500,
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        cursor: 'default',
        userSelect: 'none',
        maxWidth: 320,
        boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
      }}
      role="note"
    >
      <Typography
        variant="body1"
        sx={{
          color: '#eee',
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: 'uppercase',
          fontSize: '0.875rem',
        }}
      >
        Scroll down to explore our projects
      </Typography>
      <Box
        sx={{
          width: 10,
          height: 10,
          borderLeft: '2px solid #eee',
          borderBottom: '2px solid #eee',
          transform: 'rotate(45deg)',
          mb: '2px',
        }}
      />
    </Box>
  );
}

// 💡 Video Gallery Section Component
function VideoGallerySection() {
  const videoUrls = [
    '/images/videos/VID_20250620_133517.mp4',
    '/images/videos/VID_20250620_133517.mp4',
    '/images/videos/VID_20250620_133517.mp4', 
  ];

  return (
    <Box
      component="section"
      sx={{
        py: 8,
        px: { xs: 2, sm: 4 },
        bgcolor: '#121212',
        textAlign: 'left',
        ml: { sm: 0, md: 9 },
        background: `radial-gradient(circle at center, #3a3a3a 0%, #1a1a1a 100%)`,
        borderRadius:1,
        marginBottom:8
      }}
    >
      <Typography variant="h4" sx={{ color: '#ccc', mb: 1 }}>
        02 / Videos in Action
      </Typography>
      <Typography variant="h3" sx={{ mb: 4, fontWeight: 700, color: '#eee' }}>
        See Our Process
      </Typography>

      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 2,
          pb: 3,
          scrollSnapType: 'x mandatory',
          '& > *': {
            scrollSnapAlign: 'center',
          },
        }}
      >
        {videoUrls.map((url, idx) => (
          <Box
            key={idx}
            sx={{
              minWidth: { xs: '85%', sm: '60%', md: '30%', lg: '25%' }, 
              flexShrink: 0,
              borderRadius: 2,
              overflow: 'hidden',
              position: 'relative',
              aspectRatio: '9 / 16', // fallback below if unsupported
              backgroundColor: '#000',
              '@supports not (aspect-ratio: 1)': {
                paddingTop: '177.78%', // 16:9 ratio
              },
            }}
          >
            <video
              controls
              src={url}
              poster="/images/video-thumb.jpg"
              preload="metadata"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

