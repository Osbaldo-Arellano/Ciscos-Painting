'use client';

import { useState, useEffect, useRef } from 'react';
import { Box, Typography, useMediaQuery, Button } from '@mui/material';
import DesktopNav from '@/components/Navbar';
import MobileNav from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import React from 'react';

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
      <GlobalStyles />
      {isDesktop ? <DesktopNav /> : <MobileNav />}
      <Box sx={{ bgcolor: '#111', color: '#eee', minHeight: '100vh' }}>
        <HeroSection ref={heroRef} />
        {showScrollHint && <ScrollHint />}
        <Box sx={{ marginLeft: 0, marginRight: 8, bgcolor: '#111' }}>
          <Projects />
        </Box>
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
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        bgcolor: 'rgba(0, 0, 0, 0.7)',
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
        bgcolor: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(6px)',
        borderRadius: 2,
        color: '#eee',
      }}
    >
      <Typography variant="h6" sx={{ color: '#bbb', mb: 1 }} className="fade-in">
        00/ Project Gallery
      </Typography>
      <Typography
        component="h1"
        className="fade-in"
        style={{ animationDelay: '0.2s' }}
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
      <Typography
        variant="body1"
        className="fade-in"
        style={{ animationDelay: '0.4s' }}
        sx={{ mb: 3, color: '#ddd' }}
      >
        Painting, Siding, Fences, Roofing, Drywall, Carpentry, Janitorial, Cabinet Refinishing, Restoration.
        <br />
        Cisco's Painting does it all — built on quality, finished with care.
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
      className="fade-in"
    >
      <Typography
        variant="body1"
        sx={{
          color: '#eee',
          fontWeight: 700,
          letterSpacing: 2,
          textTransform: 'uppercase',
          fontFamily: '"Inter", sans-serif',
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
