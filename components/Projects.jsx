'use client';

import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useState, useRef, useEffect } from 'react';
import { Box, Typography, Paper, GlobalStyles } from '@mui/material';
import Slider from 'react-slick';

// Dynamic import with loading fallback and no SSR for heavy slider
const ProjectSlide = dynamic(() => import('../components/ProjectSlide'), {
  loading: () => <p style={{ color: 'white' }}>Loading project slide...</p>,
  ssr: false,
});

// Your projects data
const projects = [
  {
    title: 'Salem, Oregon – Modern Suburban Homes',
    description:
      'A 12-unit residential development featuring energy-efficient designs, open floor plans, and sustainable materials. Completed on schedule despite challenging winter conditions.',
    images: ['/images/home1.png', '/images/site1.png', '/images/worker1.png', '/images/worker1-2.png'],
  },
  {
    title: 'Portland Urban Loft Renovation',
    description:
      'Transformed a historic downtown warehouse into luxury loft apartments while preserving its industrial character. Features exposed brick, steel beams, and smart home integration.',
    images: ['/images/home1.png', '/images/site1.png', '/images/worker1.png', '/images/worker1-2.png'],
  },
  {
    title: 'Bend, OR – Mountain View Custom Home',
    description:
      'A 3,500 sq ft custom-built home with panoramic Cascade Mountain views. Designed for extreme weather resilience with high-performance insulation and solar-ready roofing.',
    images: ['/images/home1.png', '/images/site1.png', '/images/worker1.png', '/images/worker1-2.png'],
  },
  {
    title: 'Eugene Community Center Expansion',
    description:
      'Added a 10,000 sq ft multi-purpose hall, playground, and ADA-compliant facilities to a local community center. Completed with 30% recycled materials.',
    images: ['/images/home1.png', '/images/site1.png', '/images/worker1.png', '/images/worker1-2.png'],
  },
  {
    title: 'Coastal Retreat – Cannon Beach',
    description:
      'A beachfront property built to withstand Pacific storms, featuring reinforced foundations, cedar siding, and floor-to-ceiling oceanview windows.',
    images: ['/images/home1.png', '/images/site1.png', '/images/worker1.png', '/images/worker1-2.png'],
  },
];

// JSON-LD structured data for SEO
const jsonLdProjects = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Our Construction Projects',
  description:
    'A list of recent residential and commercial construction projects completed with sustainable materials and high-quality standards.',
  itemListElement: projects.map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Project',
      name: project.title,
      description: project.description,
      image: `https://yourdomain.com${project.images[0]}`, // Use full URL, update domain accordingly
      url: 'https://yourdomain.com/projects', // Update URL per project if available
    },
  })),
};

export default function ProjectsPage() {
  const projectSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    pauseOnFocus: true,
    cssEase: 'cubic-bezier(0.77, 0, 0.175, 1)',
    centerMode: false,
    swipeToSlide: true,
    focusOnSelect: true,
    draggable: true,
    appendDots: dots => (
      <ul
        style={{ margin: '0px', padding: '10px' }}
        aria-label="Project navigation dots"
      >
        {dots}
      </ul>
    ),
    customPaging: i => (
      <button
        type="button"
        aria-label={`Go to project slide ${i + 1}`}
        style={{
          width: 12,
          height: 12,
          borderRadius: '50%',
          background: '#ccc',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
        }}
      />
    ),
  };

  return (
    <>
      <Head>
        <title>Our Construction Projects | Your Company Name</title>
        <meta
          name="description"
          content="Explore our recent construction projects including modern homes, renovations, and community centers. High-quality craftsmanship with sustainable materials."
        />
        <link rel="canonical" href="https://yourdomain.com/projects" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Our Construction Projects | Your Company Name"
        />
        <meta
          property="og:description"
          content="Explore our recent construction projects including modern homes, renovations, and community centers."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/projects" />
        <meta
          property="og:image"
          content="https://yourdomain.com/images/og-image.jpg"
        /> {/* Replace with your real image URL */}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Construction Projects | Your Company Name"
        />
        <meta
          name="twitter:description"
          content="Explore our recent construction projects including modern homes, renovations, and community centers."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/images/twitter-image.jpg"
        /> {/* Replace with your real image URL */}

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProjects) }}
          key="jsonld-projects"
        />
      </Head>

      <GlobalStyles
        styles={{
          '.slick-dots li button:before': {
            color: '#ccc !important',
            opacity: 1,
            fontSize: '12px',
          },
          '.slick-dots li.slick-active button:before': {
            color: '#fff !important',
            opacity: 1,
          },
        }}
      />

      <Paper
        elevation={3}
        component="section"
        aria-labelledby="gallery-heading"
        sx={{
          p: 4,
          background: `radial-gradient(circle at center, #3a3a3a 0%, #1a1a1a 100%)`,
          mt: 8,
          width: '100%',
        }}
      >
        <Typography variant="h6" sx={{ color: '#bbb', mb: 1,
            ml:8 }} className="fade-in">
          01/ Project Gallery
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
            color: 'white',
            ml:8
          }}
        >
          From House to Home
        </Typography>
        <Typography
          variant="body1"
          className="fade-in"
          style={{ animationDelay: '0.4s' }}
          sx={{ mb: 3, color: '#ddd',
            ml:8 }}
        >
          Painting, Siding, Fences, Roofing, Drywall, Carpentry, Janitorial, Cabinet Refinishing, Restoration.
          <br />
          Cisco's Painting does it all — built on quality, finished with care.
        </Typography>
        <Box sx={{ mt: 4, ml: 9 }}>
          <Slider
            {...projectSettings}
            aria-live="polite"
            aria-roledescription="carousel"
            role="region"
            aria-label="Project showcase carousel"
          >
            {projects.map((project, index) => (
              <article
                key={index}
                tabIndex={0}
                aria-label={`${project.title} project`}
                role="group"
                style={{ outline: 'none' }}
              >
                <ProjectSlide project={project} />
              </article>
            ))}
          </Slider>
        </Box>
      </Paper>
    </>
  );
}
