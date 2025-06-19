'use client';

import { useState, useRef, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import Image from 'next/image';

export default function ProjectSlide({ project }) {
  const [mainSlider, setMainSlider] = useState(null);
  const [thumbnailSlider, setThumbnailSlider] = useState(null);
  const mainRef = useRef();
  const thumbRef = useRef();

  useEffect(() => {
    setMainSlider(mainRef.current);
    setThumbnailSlider(thumbRef.current);
  }, []);

  const mainSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
    touchMove: false,
    draggable: false,
    asNavFor: thumbnailSlider,
    ref: mainRef,
  };

  const thumbnailSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(3, project.images.length),
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    swipe: false,
    touchMove: false,
    draggable: false,
    asNavFor: mainSlider,
    ref: thumbRef,
    centerMode: true,
    centerPadding: '0px',
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'stretch',
        minHeight: "70vh",
      }}
    >
      {/* LHS: Image Carousel with Thumbnails */}
      <Box
        sx={{
          width: { xs: '100%', md: '40%' },
          minHeight: { xs: 300, md: 'auto' },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Main Image Slider */}
        <Slider {...mainSettings} style={{ flex: 1 }}>
          {project.images.map((src, i) => (
            <Box key={i} sx={{ position: 'relative', width: '100%', height: { xs: 300, md: '100%' } }}>
              <Image
                src={src}
                alt={`${project.title} - image ${i + 1}`}
                fill
                style={{ objectFit: 'cover', borderRadius: 8 }}
                priority={i === 0}
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            </Box>
          ))}
        </Slider>

        {/* Thumbnail Preview */}
        <Box
          sx={{
            mt: 2,
            px: 2,
            maxWidth: '100%',
            '.slick-slide': {
              padding: '0 5px',
              '& img': {
                border: '2px solid transparent',
                opacity: 0.6,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                borderRadius: 1,
              },
              '&.slick-center img': {
                borderColor: 'primary.main',
                opacity: 1,
              },
            },
          }}
        >
          <Slider {...thumbnailSettings}>
            {project.images.map((src, i) => (
              <Box key={i} sx={{ position: 'relative', height: 60 }}>
                <Image
                  src={src}
                  alt={`${project.title} - thumbnail ${i + 1}`}
                  fill
                  style={{ objectFit: 'cover', borderRadius: 8 }}
                  loading="lazy"
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>

      {/* RHS: Project Info */}
      <Box
        sx={{
          width: { xs: '95%', md: '60%' },
          p: { xs: 2, md: 4 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          bgcolor: 'transparent',
          maxWidth: 700,
          mx: 'auto',
        }}
      >
        <Typography
          variant="h4"
          component="h3"
          sx={{
            color: '#fff',
            fontWeight: 700,
            mb: 2,
            letterSpacing: '0.05em',
            lineHeight: 1.2,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {project.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontWeight: 400,
            lineHeight: 1.6,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {project.description}
        </Typography>
      </Box>
    </Box>
  );
}
