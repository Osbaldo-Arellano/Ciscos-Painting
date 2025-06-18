'use client';

import MobileHome from "@/components/HomeMobile";
import DesktopHome from "@/components/Home";
import DesktopNav from "@/components/Navbar";
import MobileNav from "@/components/MobileNavbar";
import useMediaQuery from '@mui/material/useMediaQuery';
import Footer from "@/components/Footer";
import { Box } from '@mui/material';

export default function ResponsiveHome() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <Box sx={{bgcolor: '#111', width: '100%', minHeight: '100vh', }}>
      {isDesktop ? (
        <>
          <DesktopNav />
          <DesktopHome />
          <Footer />
        </>
      ) : (
        <>
          <MobileNav />
          <MobileHome />
          <Footer />
        </>
      )}
    </Box>
  );
}
