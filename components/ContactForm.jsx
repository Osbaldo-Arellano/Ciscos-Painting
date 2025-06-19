'use client';

import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  useTheme,
} from '@mui/material';

export default function ContactForm() {
  const theme = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ success: null, message: '' });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: null, message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      setStatus({ success: result.success, message: result.message });
      if (result.success) {
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      setStatus({
        success: false,
        message: 'Something went wrong. Please try again.',
      });
    }
  };

  return (
    <Box
      component="section"
      aria-labelledby="contact-form-heading"
      sx={{
        maxWidth: 600,
        mx: 'auto',
        p: { xs: 2, md: 4 },
        my: 6,
        backgroundColor: '#111',
        borderRadius: 2,
        boxShadow: 3,
        color: '#eee',
      }}
    >
      <form onSubmit={handleSubmit}>
        <Typography
          id="contact-form-heading"
          component="h2"
          variant="h4"
          sx={{
            fontSize: { xs: '2.2rem', md: '2.5rem' },
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700,
            lineHeight: 1.3,
            mb: 3,
            color: '#ccc',
          }}
        >
          Contact Us
        </Typography>

        <TextField
          id="name"
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          InputProps={{ sx: { bgcolor: '#222', color: '#eee' } }}
          InputLabelProps={{ sx: { color: '#aaa' } }}
        />

        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          InputProps={{ sx: { bgcolor: '#222', color: '#eee' } }}
          InputLabelProps={{ sx: { color: '#aaa' } }}
        />

        <TextField
          id="message"
          name="message"
          label="Message"
          value={formData.message}
          onChange={handleChange}
          required
          multiline
          rows={4}
          fullWidth
          margin="normal"
          InputProps={{ sx: { bgcolor: '#222', color: '#eee' } }}
          InputLabelProps={{ sx: { color: '#aaa' } }}
        />

        {status.message && (
          <Alert
            severity={status.success ? 'success' : 'error'}
            sx={{ mt: 2 }}
            role="alert"
          >
            {status.message}
          </Alert>
        )}

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            mt: 3,
            bgcolor: '#c62828',
            ':hover': { bgcolor: '#b71c1c' },
            fontWeight: 600,
          }}
        >
          Send Message
        </Button>
      </form>
    </Box>
  );
}
