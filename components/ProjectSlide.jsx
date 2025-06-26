'use client';

import { useState, useRef, useEffect } from 'react';
import { Box, Typography, useTheme, CircularProgress } from '@mui/material';
import Slider from 'react-slick';
import Image from 'next/image';

export default function ProjectSlide({ project, isActive, slideIndex }) {
  const mainRef = useRef(null);
  const thumbRef = useRef(null);
  const [mainSlider, setMainSlider] = useState(null);
  const [thumbnailSlider, setThumbnailSlider] = useState(null);
  const [loadedImages, setLoadedImages] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    if (mainRef.current && typeof mainRef.current.slickGoTo === 'function') {
      setMainSlider(mainRef.current);
    }

    if (thumbRef.current && typeof thumbRef.current.slickGoTo === 'function') {
      setThumbnailSlider(thumbRef.current);
    }
  }, []);

  if (!isActive) return null;

  const hasMultipleImages = project.images.length > 1;

  function handleMainAfterChange(index) {}

  function handleThumbnailClick(i) {
    if (mainRef.current && typeof mainRef.current.slickGoTo === 'function') {
      mainRef.current.slickGoTo(i);
    }
  }

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => [...new Set([...prev, index])]);
  };

  const mainSettings = {
    // REMOVE: asNavFor
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
  };

  const thumbnailSettings = {
    // REMOVE: asNavFor
    dots: false,
    infinite: hasMultipleImages,
    speed: 500,
    slidesToShow: Math.min(3, project.images.length),
    slidesToScroll: 1,
    focusOnSelect: false, // 👈 disable auto-focus behavior
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
      data-project-slide
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
        <Slider {...mainSettings}>
          {project.images.map((src, i) => (
            <Box
              key={i}
              sx={{ position: 'relative', width: '100%', height: { xs: 250, sm: 300, md: 700 } }}
            >
              {!loadedImages.includes(i) && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1,
                    bgcolor: 'rgba(0,0,0,0.3)',
                  }}
                >
                  <CircularProgress color="inherit" size={40} />
                </Box>
              )}
              <Image
                src={src}
                alt={`${project.title} - image ${i + 1}`}
                fill
                style={{ objectFit: 'cover', borderRadius: 8, transition: 'opacity 0.3s ease-in-out' }}
                priority={i === 0}
                loading={i === 0 ? 'eager' : 'lazy'}
                onLoad={() => handleImageLoad(i)}
              />
            </Box>
          ))}
        </Slider>

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
            <Box sx={{ position: 'relative', height: 60, width: 80, mx: 'auto' }}>
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
