'use client';

import { useState, useRef, useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import Slider from 'react-slick';
import Image from 'next/image';

export default function ProjectSlide({ project, isActive }) {
  const mainRef = useRef(null);
  const thumbRef = useRef(null);
  const [mainSlider, setMainSlider] = useState(null);
  const [thumbnailSlider, setThumbnailSlider] = useState(null);
  const theme = useTheme();

  const lastScrollY = useRef(0);
  const currentSlide = useRef(0);
  const scrollTimeout = useRef(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (
      mainRef.current &&
      typeof mainRef.current.slickGoTo === 'function'
    ) {
      setMainSlider(mainRef.current);
    }

    if (
      thumbRef.current &&
      typeof thumbRef.current.slickGoTo === 'function'
    ) {
      setThumbnailSlider(thumbRef.current);
    }
  }, []);

  useEffect(() => {
    if (!mainSlider || typeof mainSlider.slickGoTo !== 'function') return;

    function handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      const direction = scrollY > lastScrollY.current ? 'down' : 'up';
      lastScrollY.current = scrollY;

      const slideCount = project.images.length;
      let targetSlide = currentSlide.current;

      if (direction === 'down' && currentSlide.current < slideCount - 1) {
        targetSlide++;
      } else if (direction === 'up' && currentSlide.current > 0) {
        targetSlide--;
      }

      if (targetSlide !== currentSlide.current) {
        if (typeof mainSlider.slickGoTo === 'function') {
          mainSlider.slickGoTo(targetSlide, false);
          currentSlide.current = targetSlide;
        }
      }

      scrollTimeout.current = setTimeout(() => {
        scrollTimeout.current = null;
      }, 300);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [mainSlider, project.images.length]);

  if (!isActive || !mounted) return null;

  const hasMultipleImages = project.images.length > 1;

  function handleMainAfterChange(index) {
    currentSlide.current = index;
  }

  function handleThumbnailClick(i) {
    if (
      mainRef.current &&
      typeof mainRef.current.slickGoTo === 'function'
    ) {
      mainRef.current.slickGoTo(i);
      currentSlide.current = i;
    }
  }

  const mainSettings = {
    asNavFor: thumbnailSlider,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
    touchMove: false,
    draggable: false,
    adaptiveHeight: true,
    ref: mainRef,
    afterChange: handleMainAfterChange,
    appendDots: (dots) => (
      <Box sx={{ mt: 2 }}>
        <ul
          style={{
            margin: 0,
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {dots}
        </ul>
      </Box>
    ),
    customPaging: () => (
      <div
        style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: theme.palette.primary.main,
          opacity: 0.5,
        }}
      />
    ),
  };

  const thumbnailSettings = {
    asNavFor: mainSlider,
    dots: false,
    infinite: hasMultipleImages,
    speed: 500,
    slidesToShow: Math.min(3, project.images.length),
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
    swipe: true,
    touchMove: true,
    draggable: true,
    ref: thumbRef,
    centerMode: hasMultipleImages,
    centerPadding: '0px',
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        minHeight: '70vh',
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', md: '40%' },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Main Slider */}
        <Slider {...mainSettings}>
          {project.images.map((src, i) => (
            <Box
              key={i}
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 250, sm: 300, md: 700 },
              }}
            >
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

        {/* Thumbnails */}
        <Box
          sx={{
            mt: 3,
            px: 2,
            '.slick-slide': {
              padding: '0 5px',
              '& img': {
                border: '2px solid transparent',
                opacity: 0.6,
                cursor: 'pointer',
                borderRadius: 1,
              },
              '&.slick-current img': {
                borderColor: 'primary.main',
                opacity: 1,
              },
            },
          }}
        >
          {hasMultipleImages ? (
            <Slider {...thumbnailSettings}>
              {project.images.map((src, i) => (
                <Box
                  key={i}
                  sx={{ position: 'relative', height: 60 }}
                  onClick={() => handleThumbnailClick(i)}
                >
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
          ) : (
            <Box
              sx={{ position: 'relative', height: 60, width: 80, mx: 'auto' }}
            >
              <Image
                src={project.images[0]}
                alt={`${project.title} - thumbnail`}
                fill
                style={{ objectFit: 'cover', borderRadius: 8 }}
                loading="lazy"
              />
            </Box>
          )}
        </Box>
      </Box>

      {/* Project Info */}
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
          component="h1"
          sx={{
            fontSize: { xs: '2rem', sm: '2rem', md: '3rem' },
            textAlign: { xs: 'center', md: 'left' },
            fontWeight: 700,
            mb: 2,
            color: '#ccc',
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
            textAlign: { xs: 'left', md: 'left' },
          }}
        >
          {project.description}
        </Typography>
      </Box>
    </Box>
  );
}
