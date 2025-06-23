// File: components/MobileNavbar.tsx
'use client';

import React, { useState } from 'react';
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
  Typography,
  Grid,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import Image from 'next/image';

// Use our shared EstimateModal
import EstimateModal from '@/components/EstimateModal';

const services = [
  'Painting',
  'Siding',
  'Fences',
  'Roofing',
  'Drywall',
  'Carpentry',
  'Janitorial',
  'Cabinet re-paint and finishing',
  'Restoration',
];

export default function MobileNavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(prev => !prev);

  return (
    <>
      {/* Top CTA Bar */}
      <Box
        component="section"
        sx={{
          backgroundColor: '#b71c1c',
          color: 'white',
          px: 2,
          py: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.9rem',
        }}
      >
        <Button
          sx={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline', '&:hover': { color: '#ffcdd2' } }}
          onClick={() => setModalOpen(true)}
        >
          FREE QUOTE
        </Button>
        <Button
          component="a"
          href="tel:5039999060"
          sx={{ color: 'white', fontWeight: 600, textTransform: 'none', '&:hover': { color: '#ffcdd2' } }}
        >
          📱 (503) 999-9060
        </Button>
      </Box>

      {/* Shared Estimate Modal */}
      <EstimateModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* AppBar */}
      <AppBar position="sticky" sx={{ background: 'radial-gradient(circle at right, #111 10%, #333 50%)', px: 2 }}>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/">
              <Image src="/images/logo.png" alt="Logo" width={120} height={100} priority />
            </Link>
          </Box>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon sx={{ color: '#ccc' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        ModalProps={{ BackdropProps: { sx: { backdropFilter: drawerOpen ? 'blur(8px)' : 'none', backgroundColor: drawerOpen ? 'rgba(0,0,0,0.4)' : 'transparent' } } }}
        sx={{ '& .MuiDrawer-paper': { background: 'linear-gradient(135deg, #111, #222)', color: '#eee', width: 300, borderLeft: '1px solid black' } }}
      >
        <Box>
          {/* Header */}
          <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', position: 'relative', borderBottom: '1px solid #b71c1c' }}>
            <Image src="/images/logo.png" alt="Logo" width={140} height={120} priority />
            <IconButton onClick={toggleDrawer} sx={{ position: 'absolute', right: 8, top: 8, color: '#fff' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

          {/* Links */}
          <List>
            <NavLink label="Home" href="/" onClick={toggleDrawer} />
            <NavLink label="Gallery" href="/gallery" onClick={toggleDrawer} />
            <NavLink label="Contact" href="/contact" onClick={toggleDrawer} />

            <ListItem onClick={() => setServicesOpen(prev => !prev)}>
              <ListItemText primary="Services" />
              {servicesOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
              <List disablePadding>
                {services.map(service => (
                  <NavLink
                    key={service}
                    label={service}
                    href={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={toggleDrawer}
                    nested
                  />
                ))}
              </List>
            </Collapse>
          </List>

          {/* Contact & Button */}
          <Box sx={{ p: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'white', mb: 1 }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ color: 'gray', mb: 0.5 }}>
              <Link href="tel:5039999060">(503) 999-9060</Link>
            </Typography>
            <Typography variant="body2" sx={{ color: 'gray' }}>
              1489 Arabian Ave SE.<br />Salem, OR 97317
            </Typography>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 2, backgroundColor: '#b71c1c', '&:hover': { backgroundColor: '#a31818' } }}
              onClick={() => {
                setModalOpen(true);
                setDrawerOpen(false);
              }}
            >
              Get Estimate
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

function NavLink({ label, href, onClick, nested = false }: { label: string; href: string; onClick: () => void; nested?: boolean }) {
  return (
    <ListItem
      component={Link}
      href={href}
      onClick={onClick}
      sx={{ pl: nested ? 4 : 2, color:'white'}}
    >
      <ListItemText primary={label} color='white'/>
    </ListItem>
  );
}
