'use client';

import MobileHome from "@/components/HomeMobile";
import DesktopHome from "@/components/Home";
import DesktopNav from "@/components/Navbar";
import MobileNav from "@/components/MobileNavbar";
import useMediaQuery from '@mui/material/useMediaQuery';
import Footer from "@/components/Footer";
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

export default function ResponsiveHome() {
  // Use state to avoid hydration mismatch with useMediaQuery
  const [isDesktop, setIsDesktop] = useState(false);

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
    <Box
      component="div"
      sx={{ bgcolor: '#111', width: '100%', minHeight: '100vh' }}
    >
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
          <Box component="nav" aria-label="Primary mobile navigation">
            <MobileNav />
          </Box>

          <Box component="main" tabIndex={-1} aria-label="Homepage main content">
            <MobileHome />
          </Box>

          <Box component="footer" aria-label="Footer">
            <Footer />
          </Box>
        </>
      )}
    </Box>
  );
}
