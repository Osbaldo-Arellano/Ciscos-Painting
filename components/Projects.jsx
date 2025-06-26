'use client';

import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState, useRef, useEffect, useMemo } from 'react';
import { Box, Typography, Paper, GlobalStyles } from '@mui/material';
import ProjectSlide from '@/components/ProjectSlide';

// Dynamically load Slider to keep SSR bundle light
const Slider = dynamic(() => import('react-slick'), { ssr: false });

const projects = [
  {
    title: 'Porch Restoration',
    description: 'Restoration of porches and patios with painting, sealing, and trim detailing.',
    images: Array.from({ length: 47 }, (_, i) => `/images/ciscos-images/porch-restoration/${i + 1}.jpg`),
  },
  {
    title: 'Bedroom Repaint & Remodel',
    description: 'Transforming bedrooms with fresh coats of paint and modern remodels for comfort and elegance.',
    images: [
      '/images/ciscos-images/bedroom-repaint-remodel/1.jpg',
    ],
  },
  {
    title: 'Cabinet Painting Excellence',
    description: 'Restoring and refinishing cabinets to bring life to your kitchen or bathroom spaces.',
    images: [
      '/images/ciscos-images/cabinet-painting/1.jpg',
      '/images/ciscos-images/cabinet-painting/2.jpg',
      '/images/ciscos-images/cabinet-painting/3.jpg',
      '/images/ciscos-images/cabinet-painting/4.jpg',
    ],
  },
  {
    title: 'Commercial Door Restoration',
    description: 'High-traffic commercial doors painted and restored to professional standards.',
    images: [
      '/images/ciscos-images/commercial-doors-repaint-remodel/1.jpg',
    ],
  },
  {
    title: 'Custom Design Painting',
    description: 'Unique, creative custom paint jobs tailored to your personal or commercial aesthetic.',
    images: [
      '/images/ciscos-images/custom-design-painting/1.jpg',
    ],
  },
  {
    title: 'Door Repair & Remodel',
    description: 'Repaired and restored doors with custom painting and modern hardware installation.',
    images: [
      '/images/ciscos-images/door-repair-remodel/1.jpg',
    ],
  },
  {
    title: 'Exterior Residential Painting',
    description: 'Protect and beautify your home exterior with long-lasting, weather-resistant paints.',
    images: [
      '/images/ciscos-images/exterior-residential-paint/1.jpg',
    ],
  },
  {
    title: 'Fencing Projects',
    description: 'Durable, beautiful fencing for security and style with premium coatings.',
    images: [
      '/images/ciscos-images/fencing/1.jpg',
      '/images/ciscos-images/fencing/2.jpg',
    ],
  },
  {
    title: 'Fire Station Painting',
    description: 'Specialized commercial painting designed for fire stations and public works facilities.',
    images: [
      '/images/ciscos-images/fire-station-painting/1.jpg',
      '/images/ciscos-images/fire-station-painting/2.jpg',
      '/images/ciscos-images/fire-station-painting/3.jpg',
      '/images/ciscos-images/fire-station-painting/4.jpg',
    ],
  },
  {
    title: 'Kitchen Remodels',
    description: 'Comprehensive kitchen remodeling, including painting, cabinetry, and finishing.',
    images: [
      '/images/ciscos-images/kitchen-remodel/1.jpg',
      '/images/ciscos-images/kitchen-remodel/2.jpg',
    ],
  },
  {
    title: 'Residential Projects',
    description: 'Premium residential painting and remodeling project for a family home.',
    images: [
      '/images/ciscos-images/residential-job-1/1.jpg',
      '/images/ciscos-images/residential-job-1/2.jpg',
    ],
  },
  {
    title: 'Residential Staircase Refinement',
    description: 'Modernizing staircases with detailed painting and finish carpentry.',
    images: [
      '/images/ciscos-images/residential-staircase/1.jpg',
      '/images/ciscos-images/residential-staircase/2.jpg',
      '/images/ciscos-images/residential-staircase/3.jpg',
    ],
  },
  {
    title: 'Stair Painting Project',
    description: 'Interior and exterior stairs painted with precision and high-quality materials.',
    images: [
      '/images/ciscos-images/stair-painting/1.jpg',
      '/images/ciscos-images/stair-painting/2.jpg',
      '/images/ciscos-images/stair-painting/3.jpg',
      '/images/ciscos-images/stair-painting/4.jpg',
    ],
  },
  {
    title: 'Stair Repair & Remodel',
    description: 'Comprehensive repair and remodeling of stairs with new finishes and paint.',
    images: [
      '/images/ciscos-images/stair-repaint-remodel/1.png',
      '/images/ciscos-images/stair-repaint-remodel/2.png',
    ],
  },
  {
    title: 'Window Trim Painting',
    description: 'Window trim restored and painted to match interior or exterior decor.',
    images: [
      '/images/ciscos-images/window-trim-painting/1.jpg',
      '/images/ciscos-images/window-trim-painting/2.jpg',
    ],
  },
];

export default function ProjectsPage() {
  // Track currently active slide
  const [activeIndex, setActiveIndex] = useState(0);

  // Memoize slider settings to avoid re-creation on each render
  const projectSettings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      adaptiveHeight: false,
      swipeToSlide: true,
      focusOnSelect: true,
      draggable: true,
      beforeChange: (_old, next) => setActiveIndex(next),
    }),
    []
  );

  // Slick dot styles via GlobalStyles
  const dotStyles = {
    '.slick-dots': {
      bottom: '-24px',
      '& li button:before': { fontSize: '12px', color: '#ccc', opacity: 1 },
      '& li.slick-active button:before': { color: '#fff' },
    },
  };

  return (
    <>
      <GlobalStyles styles={dotStyles} />

      <Paper
        elevation={3}
        component="section"
        aria-labelledby="gallery-heading"
        sx={{
          p: 4,
          background: 'radial-gradient(circle at center, #3a3a3a 0%, #1a1a1a 100%)',
          mt: 8,
          width: '100%',
        }}
      >
        <Typography variant="h4" sx={{ color: '#ccc', mb: 1, ml: {sm: 0, md: 8} }}>
          01/ Project Gallery
        </Typography>
        <Typography variant="h3" sx={{ mb: 4, fontWeight: 700, color: '#eee', ml: {sm: 0, md: 8} }}>
          From House to Home
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: '#ddd', ml: {sm: 0, md: 8} }}>
          Painting, Siding, Fences, Roofing, Drywall, Carpentry, Janitorial,
          Cabinet Refinishing, Restoration.
          <br />
          Cisco's GC Painting does it all — built on quality, finished with
          care.
        </Typography>

        <Box sx={{ mt: 4, mx: 'auto', width: '90%' }}>
          <Slider {...projectSettings}>
            {projects.map((proj, idx) => (
              <Box
                key={proj.title}
                tabIndex={0}
                role="group"
                aria-label={`${proj.title} project`}
                sx={{ outline: 'none' }}
              >
                <ProjectSlide
                  project={proj}
                  isActive={idx === activeIndex}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Paper>
    </>
  );
}
