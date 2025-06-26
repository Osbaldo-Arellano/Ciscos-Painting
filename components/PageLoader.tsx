'use client';

import { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import Image from 'next/image';

export default function PageLoader({
  children,
  waitForImage,
}: {
  children: React.ReactNode;
  waitForImage?: string;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // If already loaded once this session, skip loading
    const hasSeenLoader = sessionStorage.getItem('seen-home-loader');
    if (hasSeenLoader === 'true') {
      setIsLoading(false);
      return;
    }

    if (!waitForImage) {
      setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('seen-home-loader', 'true');
      }, 800);
      return;
    }

    const img = new window.Image();
    img.src = waitForImage;

    img.onload = () => {
      setIsLoading(false);
      sessionStorage.setItem('seen-home-loader', 'true');
    };
    img.onerror = () => {
      setIsLoading(false);
      sessionStorage.setItem('seen-home-loader', 'true');
    };
  }, [waitForImage]);

  if (isLoading) {
    return (
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          bgcolor: '#111',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#eee',
        }}
      >
        <Image
          src="/images/logo-bg.jpg"
          alt="Cisco's GC Painting logo"
          width={120}
          height={120}
          style={{ borderRadius: '50%', marginBottom: 24 }}
        />
        <Typography
          variant="h5"
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700,
            mb: 2,
            background: 'linear-gradient(to right, #f44336, #b71c1c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Cisco's GC Painting
        </Typography>
        <CircularProgress size={48} sx={{ color: '#f44336' }} />
      </Box>
    );
  }

  return <>{children}</>;
}
