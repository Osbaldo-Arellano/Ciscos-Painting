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

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = (event: Event) => {
    // Ignore if click is on the toggle button
    if (anchorRef.current && anchorRef.current.contains(event.target as Node)) {
      return;
    }
    setOpen(false);
  };

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab' || event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
    }
  };

  // Return focus to the button when menu closes
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
        <Link href="/quote">
          <Button
            sx={{
              color: 'white',
              fontWeight: 500,
              '&:hover': { color: '#ffcdd2' },
              textTransform: 'none',
            }}
          >
            FREE quote request HERE
          </Button>
        </Link>

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
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 5 }}>
            <Image src="/images/logo.png" alt="Logo" height={150} width={180} priority />
          </Box>

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
                role={undefined}
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
                            { href: '/services/interior', label: 'Interior Painting' },
                            { href: '/services/exterior', label: 'Exterior Painting' },
                            { href: '/services/commercial', label: 'Commercial' },
                          ].map(({ href, label }) => (
                            <MenuItem
                              key={href}
                              onClick={() => setOpen(false)}
                              component={Link}
                              href={href}
                              sx={{
                                color: '#fff',
                                px: 2,
                                textDecoration: 'none',      // <-- add this here
                                '&:hover': {
                                  backgroundColor: 'rgba(255,255,255,0.08)',
                                },
                                width: '100%',               // <-- full width clickable
                                display: 'block',
                              }}
                            >
                              {label} {/* No nested <a> here */}
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
            <NavLink href="/about" current={pathname === '/about'}>
              About
            </NavLink>
            <NavLink href="/contact" current={pathname === '/contact'}>
              Contact
            </NavLink>
          </Box>

          {/* Estimate Button */}
          <Link href="/estimate" >
            <Button
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
          </Link>
        </Toolbar>
        <ScrollTopButton />
      </AppBar>
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

function NavLink({
  href,
  children,
  current,
}: {
  href: string;
  children: React.ReactNode;
  current: boolean;
}) {
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

const navLinkButtonStyle = (isActive: boolean) => ({
  color: '#fff',
  textTransform: 'none',
  fontSize: '1.1rem',
  fontWeight: 400,
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.08)',
  },
});
