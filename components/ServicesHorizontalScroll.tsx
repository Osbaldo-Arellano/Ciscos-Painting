'use client';

import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import ServiceCard from './ServiceCard';

const servicesData = [
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

export default function ServicesHorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('fade-in-visible');
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.fade-in');
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      component="section"
      aria-labelledby="services-heading"
      sx={{ background: '#1a1a1a', py: 6, px: 2 }}
    >
      <Typography
        id="services-heading"
        variant="h4"
        sx={{ color: '#ccc', mb: 2 }}
        className="fade-in"
        tabIndex={-1} // Makes it focusable for skip links
      >
        01 / Our Services 
      </Typography>
                  <Typography variant="h5" sx={{ color: '#ccc', mb: 0, py:1 }}>
              swipe to see more ➦
            </Typography>

      <Box
        ref={containerRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: 2,
          pb: 2,
          scrollBehavior: 'smooth',
          scrollPaddingInline: 2,
          '& > *': {
            scrollSnapAlign: 'center',
            flex: '0 0 85%',
            maxWidth: '100%',
          },
        }}
        role="list"
        aria-label="List of services"
      >
        {servicesData.map((service, index) => (
          <Box
            key={service.id}
            className="fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            sx={{ flexShrink: 0 }}
            role="listitem"
          >
            <ServiceCard
              image={service.image}
              title={service.title}
              description={service.description}
              isHovered={false}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              gradient={service.gradient}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
