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
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Me
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
