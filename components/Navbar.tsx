'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  MenuItem,
  Popper,
  Paper,
  Grow,
  ClickAwayListener,
  MenuList,
  Fab,
  Zoom,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState, useRef, useEffect } from 'react';
import EstimateModal from '@/components/EstimateModal'; 

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [estimateOpen, setEstimateOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as Node)) return;
    setOpen(false);
  };
  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab' || event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
    }
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <>
      {/* Sticky Top Bar */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          backgroundColor: '#b71c1c',
          color: '#fff',
          px: { xs: 2, md: 9 },
          py: 0.1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.9rem',
          fontFamily: '"Inter", sans-serif',
          zIndex: 1200,
        }}
      >
        <Button
          onClick={() => setEstimateOpen(true)}
          sx={{
            color: 'white',
            fontWeight: 500,
            '&:hover': { color: '#ffcdd2' },
            textTransform: 'none',
          }}
        >
          FREE quote request HERE
        </Button>

        <Link href="tel:5039999060" passHref>
          <Button
            sx={{
              color: 'white',
              fontWeight: 600,
              fontSize: '1rem',
              '&:hover': { color: '#ffcdd2' },
              textTransform: 'none',
            }}
          >
            📞 (503) 999-9060
          </Button>
        </Link>
      </Box>

      {/* Main Navbar */}
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          top: 0,
          left: 0,
          width: '100%',
          px: { xs: 2, md: 9 },
          py: 1,
          zIndex: 1100,
        }}
      >
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" passHref>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mt: 5,
                cursor: 'pointer', // ✅ makes it feel clickable
              }}
            >
              <Image
                src="/images/logo.png"
                alt="Logo"
                height={150}
                width={180}
                priority
              />
            </Box>
          </Link>

          {/* Nav Links */}
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 4, gap: 2 }}>
            <NavLink href="/" current={pathname === '/'}>
              Home
            </NavLink>

            <Box
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
              sx={{ position: 'relative' }}
            >
              <Button
                ref={anchorRef}
                onClick={handleToggle}
                endIcon={<KeyboardArrowDownIcon sx={{ color: '#fff' }} />}
                sx={navLinkButtonStyle(pathname.startsWith('/services'))}
              >
                Services
              </Button>

              <Popper
                open={open}
                anchorEl={anchorRef.current}
                placement="bottom-start"
                transition
                disablePortal
                sx={{ zIndex: 1200 }}
              >
                {({ TransitionProps }) => (
                  <Grow {...TransitionProps} style={{ transformOrigin: 'top left' }}>
                    <Paper sx={{ backgroundColor: 'rgba(30,30,30,0.95)', color: '#fff', mt: 1 }}>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="services-menu"
                          onKeyDown={handleListKeyDown}
                          sx={{ p: 0 }}
                        >
                          {[
                            { href: '/services', label: 'Residential' },
                            { href: '/services', label: 'Commercial' },
                          ].map(({ href, label }) => (
                            <MenuItem
                              key={href}
                              onClick={() => setOpen(false)}
                              component={Link}
                              href={href}
                              sx={{
                                color: '#fff',
                                px: 2,
                                textDecoration: 'none',
                                '&:hover': {
                                  backgroundColor: 'rgba(255,255,255,0.08)',
                                },
                                width: '100%',
                                display: 'block',
                              }}
                            >
                              {label}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Box>

            <NavLink href="/gallery" current={pathname === '/gallery'}>
              Gallery
            </NavLink>
            <NavLink href="/contact" current={pathname === '/contact'}>
              Contact
            </NavLink>
          </Box>

          {/* Estimate Button */}
          <Button
            onClick={() => setEstimateOpen(true)}
            variant="outlined"
            sx={{
              ml: 3,
              px: 2.5,
              py: 0.8,
              color: '#fff',
              borderColor: '#fff',
              borderRadius: '999px',
              textTransform: 'none',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: '#d32f2f',
                borderColor: '#fff',
              },
            }}
          >
            Get Estimate
          </Button>
        </Toolbar>
        <ScrollTopButton />
      </AppBar>

      <EstimateModal open={estimateOpen} onClose={() => setEstimateOpen(false)} />
    </>
  );
}

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Zoom in={visible}>
      <Fab
        color="primary"
        size="small"
        onClick={handleClick}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1300,
          bgcolor: '#b71c1c',
          color: '#fff',
          '&:hover': { bgcolor: '#d32f2f' },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}

function NavLink({ href, children, current }) {
  return (
    <Link href={href} passHref>
      <Button
        sx={{
          color: '#fff',
          textTransform: 'none',
          fontSize: '1.1rem',
          fontWeight: 400,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            bottom: -4,
            width: current ? '100%' : '0%',
            height: 2,
            backgroundColor: '#b71c1c',
            transition: 'width 0.3s ease',
          },
          '&:hover::after': {
            width: '100%',
          },
        }}
      >
        {children}
      </Button>
    </Link>
  );
}

const navLinkButtonStyle = (isActive) => ({
  color: '#fff',
  textTransform: 'none',
  fontSize: '1.1rem',
  fontWeight: 400,
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
});
