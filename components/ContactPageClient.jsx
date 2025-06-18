'use client';

import { useState, useEffect, useRef } from 'react';
import { Box, Typography, TextField, Button, Alert, useMediaQuery } from '@mui/material';
import DesktopNav from '@/components/Navbar';
import MobileNav from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import React from 'react';

export default function ContactPage() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const heroRef = useRef(null);

  return (
    <>
      <GlobalStyles />
      {isDesktop ? <DesktopNav /> : <MobileNav />}
      <Box sx={{ bgcolor: '#111', color: '#eee', minHeight: '100vh' }}>
        <HeroSection ref={heroRef} />
        <Footer />
      </Box>
    </>
  );
}

const HeroSection = React.forwardRef((_, ref) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <Box
      ref={ref}
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        backgroundImage: 'url(/images/banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        px: { xs: 2, sm: 6 },
        py: { xs: 4, sm: 0 },
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
          width: { xs: '100%', md: '50%' },
        }}
      >
        <Typography variant="h6" sx={{ color: '#bbb', mb: 1 }} className="fade-in">
          Contact Us
        </Typography>
        <Typography
          component="h1"
          className="fade-in"
          style={{ animationDelay: '0.2s' }}
          sx={{
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
            fontFamily: '"Inter", sans-serif',
            lineHeight: 1.2,
            fontWeight: 700,
            mb: 2,
          }}
        >
          Let's Bring Your Vision to Life
        </Typography>
        <Typography
          variant="body1"
          className="fade-in"
          style={{ animationDelay: '0.4s' }}
          sx={{ mb: 3, color: '#ddd' }}
        >
          Whether it's a home, office, or custom project — we want to hear from you.
        </Typography>
      </Box>

      <Box
        sx={{
          zIndex: 2,
          bgcolor: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(6px)',
          borderRadius: 2,
          p: { xs: 2, sm: 4, md: 6 },
          width: { xs: '100%', md: '40%' },
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

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: null, message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      setStatus({ success: result.success, message: result.message });
      if (result.success) setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus({ success: false, message: 'Something went wrong. Please try again.' });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, color: '#eee' }}>
        Contact Us
      </Typography>

      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        fullWidth
        InputProps={{ sx: { bgcolor: '#222', color: '#eee' } }}
        InputLabelProps={{ sx: { color: '#aaa' } }}
      />

      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        fullWidth
        InputProps={{ sx: { bgcolor: '#222', color: '#eee' } }}
        InputLabelProps={{ sx: { color: '#aaa' } }}
      />

      <TextField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        multiline
        rows={4}
        fullWidth
        InputProps={{ sx: { bgcolor: '#222', color: '#eee' } }}
        InputLabelProps={{ sx: { color: '#aaa' } }}
      />

      {status.message && (
        <Alert severity={status.success ? 'success' : 'error'}>{status.message}</Alert>
      )}

      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{
          bgcolor: '#c62828',
          ':hover': { bgcolor: '#b71c1c' },
          fontWeight: 700,
          alignSelf: 'flex-start',
        }}
      >
        Send Message
      </Button>
    </Box>
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
