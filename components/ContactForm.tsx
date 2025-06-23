// components/ContactForm.tsx
'use client';

import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
} from '@mui/material';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);


    console.log(formData)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), 
      });
      const result = await res.json();

      if (result.success) {
        // clear form on success
        setFormData({ name: '', email: '', phone_number: '', message: '' });
        setToastOpen(true);
      } else {
        setError(result.message || 'Please fill out all required fields!');
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 600,
          mx: 'auto',
          p: { xs: 2, md: 4 },
          backgroundColor: '#111',
          borderRadius: 2,
          boxShadow: 3,
          color: '#eee',
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          sx={{ mb: 3, color: '#ccc', fontWeight: 700 }}
        >
          Contact Us
        </Typography>

        <TextField
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
          name="phone_number"            
          label="Phone Number"
          value={formData.phone_number}  
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          InputProps={{ sx: { bgcolor: '#222', color: '#eee' } }}
          InputLabelProps={{ sx: { color: '#aaa' } }}
        />

        <TextField
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputProps={{ sx: { bgcolor: '#222', color: '#eee' } }}
          InputLabelProps={{ sx: { color: '#aaa' } }}
        />

        <TextField
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

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={submitting}
          sx={{
            mt: 3,
            bgcolor: '#c62828',
            '&:hover': { bgcolor: '#b71c1c' },
            fontWeight: 600,
          }}
        >
          {submitting ? 'Sending…' : 'Send Message'}
        </Button>
      </Box>

      <Snackbar
        open={toastOpen}
        autoHideDuration={2000}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setToastOpen(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Message sent successfully!
        </Alert>
      </Snackbar>
    </>
  );
}
