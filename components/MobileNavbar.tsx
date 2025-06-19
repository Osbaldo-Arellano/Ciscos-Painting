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
  Modal,
  Typography,
  TextField,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
  'Contact',
];

export default function MobileNavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

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
        <Button
          sx={{
            color: 'white',
            fontWeight: 'bold',
            textDecoration: 'underline',
            '&:hover': { color: '#ffcdd2' },
          }}
          onClick={() => setModalOpen(true)}
        >
          FREE QUOTE HERE
        </Button>

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

      {/* Modal Estimate Form */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            bgcolor: '#111',
            color: '#eee',
            width: '90%',
            maxWidth: 420,
            mx: 'auto',
            my: '10%',
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            Request Your Quote
          </Typography>
          <EstimateForm onClose={() => setModalOpen(false)} />
        </Box>
      </Modal>

      {/* Main navbar */}
      <AppBar
        position="sticky"
        elevation={4}
        sx={{
          background: 'radial-gradient(circle at right, #111 10%, #333 50%)',
          px: 2,
        }}
      >
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="/" style={{ display: 'inline-block' }}>
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={120}
                height={100}
                priority
              />
            </Link>
          </Box>
          <IconButton onClick={toggleDrawer} aria-label="menu">
            <MenuIcon sx={{ color: '#ccc' }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        ModalProps={{
          BackdropProps: {
            sx: {
              backdropFilter: drawerOpen ? 'blur(8px)' : 'none',
              backgroundColor: drawerOpen ? 'rgba(0,0,0,0.4)' : 'transparent',
            },
          },
        }}
        sx={{
          zIndex: 1500,
          '& .MuiDrawer-paper': {
            background: 'linear-gradient(135deg, #111, #222)',
            color: '#eee',
            width: 300,
            borderLeft: '1px solid black',
            boxShadow: '0 0 20px rgba(0,0,0,0.6)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          {/* Banner with Company Logo */}
          <Box
            sx={{
              background: 'linear-gradient(45deg, #666, #222 100%, #111)',
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              borderBottom: '1px solid #b71c1c',
            }}
          >

            <Image
              src="/images/logo.png"
              alt="Company Logo"
              width={120}
              height={80}
              style={{ objectFit: 'contain' }}
              priority
            />
            <IconButton
              onClick={toggleDrawer}
              aria-label="close drawer"
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: '#fff',
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

          {/* Nav Links */}
          <List>
            <NavLink label="Home" href="/" toggleDrawer={toggleDrawer} />
            <NavLink label="Gallery" href="/gallery" toggleDrawer={toggleDrawer} />
            <NavLink label="About Us" href="/about" toggleDrawer={toggleDrawer} />
            <NavLink label="Contact" href="/contact" toggleDrawer={toggleDrawer} />

            <ListItem
              onClick={() => setServicesOpen(!servicesOpen)}
              sx={{
                color: '#eee',
                cursor: 'pointer',
                px: 2,
                py: 1,
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.05)',
                },
              }}
            >
              <ListItemText primary="Services" />
              {servicesOpen ? <ExpandLess sx={{ color: '#eee' }} /> : <ExpandMore sx={{ color: '#eee' }} />}
            </ListItem>

            <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {['Interior', 'Exterior'].map((service) => (
                  <ListItem
                    key={service}
                    onClick={toggleDrawer}
                    sx={{
                      pl: 4,
                      py: 0.5,
                      cursor: 'pointer',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.05)',
                      },
                    }}
                  >
                    <NavLink label={service} href="/services" toggleDrawer={toggleDrawer} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </List>
        </Box>

        {/* CTA Button */}
        <Box sx={{ p: 2 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => {
              setModalOpen(true);
              setDrawerOpen(false);
            }}
            sx={{
              backgroundColor: '#b71c1c',
              color: 'white',
              borderRadius: '25px',
              fontWeight: 'bold',
              py: 1.2,
              fontSize: '1rem',
              boxShadow: '0 4px 12px rgba(183, 28, 28, 0.5)',
              '&:hover': {
                backgroundColor: '#a31818',
              },
            }}
          >
            Get Estimate
          </Button>
        </Box>
      </Drawer>

    </>
  );
}

function NavLink({ label, href, toggleDrawer }: any) {
  return (
    <Link href={href} style={{ textDecoration: 'none', color: 'inherit' }} onClick={toggleDrawer}>
      <ListItem
        sx={{
          '&:hover': { backgroundColor: 'rgba(255,255,255,0.05)' },
          cursor: 'pointer',
          px: 2,
          py: 1,
        }}
      >
        <ListItemText primary={label} />
      </ListItem>
    </Link>
  );
}

function EstimateForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    description: '',
  });

  const handleChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
        InputProps={{ sx: { bgcolor: '#222', color: '#eee' } }}
        InputLabelProps={{ sx: { color: '#aaa' } }}
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
        InputProps={{ sx: { bgcolor: '#222', color: '#eee' } }}
        InputLabelProps={{ sx: { color: '#aaa' } }}
      />
      <TextField
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
        required
        InputProps={{ sx: { bgcolor: '#222', color: '#eee' } }}
        InputLabelProps={{ sx: { color: '#aaa' } }}
      />
      <TextField
        select
        label="Service"
        name="service"
        value={formData.service}
        onChange={handleChange}
        fullWidth
        required
        InputProps={{ sx: { bgcolor: '#222', color: '#eee' } }}
        InputLabelProps={{ sx: { color: '#aaa' } }}
      >
        {services.map((service) => (
          <MenuItem key={service} value={service}>
            {service}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Short Description"
        name="description"
        multiline
        rows={3}
        value={formData.description}
        onChange={handleChange}
        fullWidth
        InputProps={{ sx: { bgcolor: '#222', color: '#eee' } }}
        InputLabelProps={{ sx: { color: '#aaa' } }}
      />
      <Button type="submit" variant="contained" sx={{ bgcolor: '#b71c1c', '&:hover': { bgcolor: '#a31818' } }}>
        Submit
      </Button>
    </Box>
  );
}
