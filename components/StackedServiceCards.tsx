'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Box } from '@mui/material';
import ServiceCard from './ServiceCard';

type Service = {
  image: string;
  title: string;
  description: string;
};

type StackedServiceCardsProps = {
  services: Service[];
};

const gradients = [
  'linear-gradient(90deg, #b71c1c, #880e4f)',    // Red to deep purple
  'linear-gradient(90deg, #4a148c, #1a237e)',    // Deep purple to indigo
  'linear-gradient(90deg, #00695c, #004d40)',    // Teal to dark teal
  'linear-gradient(90deg, #37474f, #263238)'     // Blue grey to dark grey
];

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function StackedServiceCards({ services }: StackedServiceCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const baseCardWidth = 360;
  const minOverlapOffset = -150;
  const minCardVisible = 100;

  useEffect(() => {
    function updateWidth() {
      setContainerWidth(containerRef.current?.clientWidth || 0);
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const calculateOverlapOffset = () => {
    if (containerWidth === 0) return minOverlapOffset;
    const maxCards = services.length;
    const requiredWidth = maxCards * baseCardWidth - (maxCards - 1) * minOverlapOffset;
    if (containerWidth >= requiredWidth) {
      return minOverlapOffset;
    }
    const availableOverlapSpace = (maxCards * baseCardWidth - containerWidth) / (maxCards - 1);
    const dynamicOverlap = -Math.max(availableOverlapSpace, baseCardWidth - minCardVisible);
    return dynamicOverlap;
  };

  const overlapOffset = calculateOverlapOffset();

  // Randomize gradients once per render cycle
  const randomizedGradients = useMemo(() => shuffleArray(gradients), []);

  return (
    <Box
      ref={containerRef}
      component="section"
      aria-label="Stacked services showcasing craftsmanship and expertise"
      sx={{
        width: '100%',
        margin: 'auto',
        mt: 8,
        px: 2,
        position: 'relative',
      }}
      tabIndex={-1} // focusable container for accessibility and skip links
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 320,
          marginBottom: 8,
        }}
      >
        {services.map((service, index) => {
          const isHovered = hoveredIndex === index;
          const zIndex = isHovered ? 10 : services.length - index;

          return (
            <Box
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                position: 'absolute',
                top: 0,
                left: index !== 0 ? `${index * (baseCardWidth + overlapOffset)}px` : 0,
                zIndex,
                transition: 'transform 0.3s ease, z-index 0.3s ease, left 0.3s ease',
                transform: `translateY(${isHovered ? -10 : 0}px)`,
                boxShadow: 3,
              }}
              role="group"
              aria-labelledby={`service-title-${index}`}
              aria-describedby={`service-desc-${index}`}
              tabIndex={0} // keyboard focusable for accessibility
              onFocus={() => setHoveredIndex(index)} // sync focus with hover effect
              onBlur={() => setHoveredIndex(null)}
            >
              <ServiceCard
                image={service.image}
                title={service.title}
                description={service.description}
                isHovered={isHovered}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                gradient={randomizedGradients[index % randomizedGradients.length]}
                aria-labelledby={`service-title-${index}`}
                aria-describedby={`service-desc-${index}`}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
