'use client';

import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import MobileHome from '@/components/HomeMobile';
import DesktopHome from '@/components/Home';
import DesktopNav from '@/components/Navbar';
import MobileNav from '@/components/MobileNavbar';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';

export default function ResponsiveHome() {
  const [isDesktop, setIsDesktop] = useState(false);

  // Detect screen size
  useEffect(() => {
    const match = window.matchMedia('(min-width: 768px)').matches;
    setIsDesktop(match);

    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    window.matchMedia('(min-width: 768px)').addEventListener('change', handler);

    return () => {
      window.matchMedia('(min-width: 768px)').removeEventListener('change', handler);
    };
  }, []);

  return (
    <PageLoader waitForImage='/images/nice-house.jpg'>
      <Box component="div" sx={{ bgcolor: '#111', width: '100%', minHeight: '100vh' }}>
        {isDesktop ? (
          <>
            <Box component="nav" aria-label="Primary desktop navigation">
              <DesktopNav />
            </Box>
            <Box component="main" tabIndex={-1} aria-label="Homepage main content">
              <DesktopHome />
            </Box>
            <Box component="footer" aria-label="Footer">
              <Footer />
            </Box>
          </>
        ) : (
          <>
            <Box component="main" tabIndex={-1} aria-label="Homepage main content">
              <MobileHome />
            </Box>
            <Box component="footer" aria-label="Footer">
              <Footer />
            </Box>
          </>
        )}
      </Box>
    </PageLoader>
  );
}
