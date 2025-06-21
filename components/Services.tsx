'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, useMediaQuery, Grid } from '@mui/material';
import ServiceCard from './ServiceCard';

type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
  gradient: string;
};

const servicesData: Service[] = [
  {
    id: 1,
    title: 'Painting',
    description: 'Interior and exterior painting with premium finishes.',
    image: '/images/painting.jpg',
    gradient: 'linear-gradient(45deg, #b71c1c, #d32f2f)',
  },
  {
    id: 2,
    title: 'Siding',
    description: 'Durable siding installation and repairs.',
    image: '/images/siding.jpg',
    gradient: 'linear-gradient(45deg, #4a148c, #7b1fa2)',
  },
  {
    id: 3,
    title: 'Fences',
    description: 'Custom fences for privacy and style.',
    image: '/images/fences.jpg',
    gradient: 'linear-gradient(45deg, #ff6f00, #ffa000)',
  },
  {
    id: 4,
    title: 'Roofing',
    description: 'Expert roofing solutions for all types of homes.',
    image: '/images/roofing.jpg',
    gradient: 'linear-gradient(45deg, #0d47a1, #1976d2)',
  },
  {
    id: 5,
    title: 'Drywall',
    description: 'Seamless drywall installation and repair.',
    image: '/images/drywall.jpg',
    gradient: 'linear-gradient(45deg, #00695c, #009688)',
  },
  {
    id: 6,
    title: 'Carpentry',
    description: 'Custom woodwork and carpentry craftsmanship.',
    image: '/images/carpentry.jpg',
    gradient: 'linear-gradient(45deg, #ef6c00, #ffa726)',
  },
  {
    id: 7,
    title: 'Janitorial',
    description: 'Professional janitorial services for homes & businesses.',
    image: '/images/janitorial.jpg',
    gradient: 'linear-gradient(45deg, #283593, #5c6bc0)',
  },
  {
    id: 8,
    title: 'Cabinet re-paint and finishing',
    description: 'Restore and refinish cabinets to perfection.',
    image: '/images/cabinet-repaint.jpg',
    gradient: 'linear-gradient(45deg, #ad1457, #e91e63)',
  },
  {
    id: 9,
    title: 'Restoration',
    description: 'Comprehensive restoration services after damage.',
    image: '/images/restoration.jpg',
    gradient: 'linear-gradient(45deg, #455a64, #607d8b)',
  },
  {
    id: 10,
    title: 'Contact',
    description: 'Reach out for custom service requests and inquiries.',
    image: '/images/logo-bg.jpg',
    gradient: 'linear-gradient(45deg, #37474f, #78909c)',
  },
];

export default function Services() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const isDesktop = useMediaQuery('(min-width:768px)');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('fade-in-visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.fade-in');
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={containerRef}
      component="section"
      aria-labelledby="services-heading"
      sx={{
        bgcolor: '#111',
        color: '#eee',
        minHeight: '100vh',
        px: { xs: 2, md: 10 },
        py: 8,
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h6"
        id="services-subheading"
        sx={{ color: '#bbb', mb: 1 }}
        className="fade-in"
      >
        01/ Quality Workmanship
      </Typography>

      <Typography
        component="h1"
        id="services-heading"
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
        Quality Workmanship You Can Trust
      </Typography>

      <Typography
        variant="body1"
        className="fade-in"
        style={{ animationDelay: '0.4s' }}
        sx={{ mb: 3, color: '#ddd' }}
        aria-describedby="services-description"
      >
        From painting to roofing, siding to restoration, Cisco's General Contractor in Painting covers it all.
        <br />
        Experience craftsmanship built on care and expertise.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          overflow: 'visible',
        }}
      >
        <Grid
          container
          spacing={4}
          justifyContent="center"
          maxWidth="1200px"
          sx={{ overflow: 'visible' }}
          role="list"
          aria-label="Services offered by Cisco's General Contractor in Painting"
        >
          {servicesData.map(({ id, title, description, image, gradient }) => (
            <Grid
              key={id}
              className="fade-in"
              style={{ transitionDelay: `${id * 0.1}s` }}
              sx={{
                position: 'relative',
                zIndex: hoveredId === id ? 2 : 1,
                transition: 'z-index 0.3s ease',
                outline: 'none',
              }}
              role="listitem"
              tabIndex={-1}
            >
              <ServiceCard
                image={image}
                title={title}
                description={description}
                isHovered={hoveredId === id}
                onMouseEnter={() => setHoveredId(id)}
                onMouseLeave={() => setHoveredId(null)}
                gradient={gradient}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
