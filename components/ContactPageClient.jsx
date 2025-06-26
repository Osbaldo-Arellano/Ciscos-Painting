'use client';

import { useRef } from 'react';
import Head from 'next/head';
import {
  Box,
  Typography,
  useMediaQuery,
} from '@mui/material';
import DesktopNav from '@/components/Navbar';
import MobileNav from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import React from 'react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const heroRef = useRef(null);

  return (
    <>
      <GlobalStyles />
      {isDesktop ? <DesktopNav /> : <MobileNav />}
      <Box
        component="main"
        sx={{ bgcolor: '#111', color: '#eee', minHeight: '100vh' }}
      >
        <HeroSection ref={heroRef} />
        <Footer />
      </Box>
    </>
  );
}

const HeroSection = React.forwardRef((_, ref) => {
  const isMd = useMediaQuery('(min-width:768px) and (max-width:1199px)');

  return (
    <Box
      ref={ref}
      component="section"
      aria-labelledby="contact-heading"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundImage: 'url(/images/banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        px: { xs: 2, sm: 6 },
        py: { xs: 4, sm: 8 },
        textAlign: 'center',
      }}
      className="fade-in"
    >
      <Box
        sx={{
          zIndex: 2,
          bgcolor: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(6px)',
          borderRadius: 2,
          p: { xs: 2, sm: 4, md: 6 },
          color: '#eee',
          width: { xs: '100%', md: '70%', xl: '100%' },
          maxWidth: '700px',
        }}
      >
        <Typography
          id="contact-heading"
          component="h1"
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
            fontFamily: '"Inter", sans-serif',
            lineHeight: 1.2,
            fontWeight: 700,
            mb: 2,
          }}
          className="fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Let&apos;s Bring Your Vision to Life
        </Typography>
        <Typography
          variant="body1"
          className="fade-in"
          style={{ animationDelay: '0.4s' }}
          sx={{ mb: 3, color: '#ddd' }}
        >
          Whether it&apos;s a home, office, or custom project — we want to hear
          from you.
        </Typography>
      </Box>

      {/* Contact form section */}
      <Box
        sx={{
          zIndex: 2,
          bgcolor: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(6px)',
          borderRadius: 2,
          p: { xs: 2, sm: 4, md: 6 },
          mt:10,
          width: {
            xs: '100%',
            sm: '100%',
            md: '60%',
            xl: '100%',
          },
          maxWidth: '700px',
          display: isMd ? 'flex' : { xs: 'block', xl: 'block' },
          justifyContent: 'center',
        }}
        className="fade-in"
      >
        <ContactForm />
      </Box>

      {/* Dark overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0,0,0,0.6)',
          zIndex: 1,
        }}
      />
    </Box>
  );
});

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
    `}</style>
  );
}
