'use client';

import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MobileNavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Gallery', path: '/projects' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const services = ['Interior', 'Exterior'];

  return (
    <>
      {/* Top red bar */}
      <Box
        sx={{
          backgroundColor: '#b71c1c',
          color: 'white',
          px: 2,
          py: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.9rem',
          userSelect: 'none',
        }}
      >
        <Link href="/quote">
          <Button
            sx={{
              color: 'white',
              fontWeight: 'bold',
              textDecoration: 'underline',
              '&:hover': { color: '#ffcdd2' },
            }}
          >
            FREE QUOTE HERE
          </Button>
        </Link>

        <Button
          component="a"
          href="tel:5032367003"
          sx={{
            color: 'white',
            fontWeight: 600,
            textTransform: 'none',
            '&:hover': { color: '#ffcdd2' },
          }}
        >
          📱 (503) 999-9060
        </Button>
      </Box>

      {/* Main navbar */}
      <AppBar
        position="sticky"
        elevation={4}
        sx={{
          backgroundColor: 'rgb(126, 126, 126)',
          color: 'black',
          px: 2,
        }}
      >
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/" passHref>
              <Box sx={{ display: 'inline-block' }}>
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={120}
                  height={100}
                  priority
                />
              </Box>
            </Link>
          </Box>
          <IconButton onClick={toggleDrawer} aria-label="menu">
            <MenuIcon sx={{ color: 'black' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Side Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        ModalProps={{
          BackdropProps: {
            sx: {
              backdropFilter: drawerOpen ? 'blur(8px)' : 'none',
              backgroundColor: drawerOpen ? 'rgba(0,0,0,0.2)' : 'transparent',
            },
          },
        }}
      >
        <Box
          sx={{
            width: 280,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                p: 2,
              }}
            >
              <IconButton onClick={toggleDrawer} aria-label="close drawer">
                <CloseIcon />
              </IconButton>
            </Box>

            <Divider />

            <Box sx={{ px: 2, mb: 2 }}>
              <Link href="/" passHref>
                <Box sx={{ display: 'inline-block' }}>
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={240}
                    height={190}
                    priority
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              </Link>
            </Box>

            <List>
              {navLinks.map(({ label, path }) => (
                <ListItem
                  key={label}
                  button
                  component={Link}
                  href={path}
                  onClick={toggleDrawer}
                  sx={{
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: 'rgba(0,0,0,0.04)',
                    },
                  }}
                >
                  <ListItemText primary={label} />
                </ListItem>
              ))}

              {/* Services with expand */}
              <ListItem
                button
                onClick={() => setServicesOpen((prev) => !prev)}
                sx={{ fontWeight: 600 }}
              >
                <ListItemText primary="Services" />
                {servicesOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{ pl: 4 }}>
                  {services.map((service) => (
                    <ListItem
                      key={service}
                      button
                      onClick={() => {
                        toggleDrawer();
                        // Add routing if you want each service to have a dedicated page
                      }}
                      sx={{
                        '&:hover': {
                          backgroundColor: 'rgba(0,0,0,0.04)',
                        },
                      }}
                    >
                      <ListItemText primary={service} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </List>
          </Box>

          {/* Bottom CTA Button */}
          <Box sx={{ p: 2 }}>
            <Link href="/estimate">
              <Button
                fullWidth
                variant="contained"
                onClick={toggleDrawer}
                sx={{
                  backgroundColor: '#b71c1c',
                  color: 'white',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  py: 1,
                  boxShadow: '0 4px 8px rgba(183, 28, 28, 0.4)',
                  transition:
                    'background-color 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#a31818',
                    boxShadow: '0 6px 12px rgba(163, 24, 24, 0.6)',
                  },
                }}
              >
                Get Estimate
              </Button>
            </Link>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
