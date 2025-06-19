"use client";

import { useState } from "react";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ success: null, message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: null, message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      setStatus({ success: result.success, message: result.message });
      if (result.success) setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ success: false, message: "Something went wrong. Please try again." });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography
            component="h2"
            sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3rem' },
                fontFamily: '"Inter", sans-serif',
                lineHeight: 1.3,
                letterSpacing: '0.3px',
                fontWeight: 700,
                mb: 4,
                color: '#ccc',
            }}  
            >
    Contact Us                  
    </Typography>

      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        multiline
        rows={4}
        fullWidth
      />

      {status.message && (
        <Alert severity={status.success ? "success" : "error"}>{status.message}</Alert>
      )}

      <Button type="submit" variant="contained" size="large" sx={{ alignSelf: "flex-start" }}>
        Send Message
      </Button>
    </Box>
  );
}
