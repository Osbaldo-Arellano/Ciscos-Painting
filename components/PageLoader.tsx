'use client';

import { useEffect, useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import Image from 'next/image';

export default function PageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true); 
  const [fadeOut, setFadeOut] = useState(false);    

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem('seen-home-loader');
    if (hasSeenLoader === 'true') {
      setIsLoading(false);
      return;
    }

    const handleLoad = () => {
      setFadeOut(true); 
      sessionStorage.setItem('seen-home-loader', 'true');
      setTimeout(() => setIsLoading(false), 500);
    };

    if (document.readyState === 'complete') {
      handleLoad(); // already ready
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  if (!isLoading) return <>{children}</>;

  return (
    <>
      <Box
        className={`loader-container ${fadeOut ? 'fade-out' : ''}`}
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
          opacity: fadeOut ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <Image
          src="/images/logo-bg.jpg"
          alt="Cisco's GC Painting"
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
    </>
  );
}
