'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';

const jobOptions = [
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

export default function EstimateModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobs: [],
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleJobChange = (job) => {
    setFormData((prev) => ({
      ...prev,
      jobs: prev.jobs.includes(job)
        ? prev.jobs.filter((j) => j !== job)
        : [...prev.jobs, job],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // We’ll connect this to backend next
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" scroll="paper">
      <DialogTitle sx={{ bgcolor: '#111', color: '#fff' }}>Get an Estimate</DialogTitle>
      <DialogContent sx={{ bgcolor: '#1a1a1a', color: '#fff' }}>
        <Typography variant="body2" sx={{ mb: 2, color: '#ccc' }}>
          Fill out the form below, and we’ll get back to you with an estimate.
        </Typography>

        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ mb: 2 }}
          InputProps={{ sx: { bgcolor: '#222', color: '#fff' } }}
          InputLabelProps={{ sx: { color: '#aaa' } }}
        />

        <TextField
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ mb: 2 }}
          InputProps={{ sx: { bgcolor: '#222', color: '#fff' } }}
          InputLabelProps={{ sx: { color: '#aaa' } }}
        />

        <TextField
          name="phone"
          label="Phone"
          value={formData.phone}
          onChange={handleInputChange}
          fullWidth
          required
          sx={{ mb: 2 }}
          InputProps={{ sx: { bgcolor: '#222', color: '#fff' } }}
          InputLabelProps={{ sx: { color: '#aaa' } }}
        />

        <Typography variant="subtitle1" sx={{ mt: 2, mb: 1, color: '#ccc' }}>
          What type of job are you interested in?
        </Typography>

        <FormGroup sx={{ mb: 2 }}>
          {jobOptions.map((job) => (
            <FormControlLabel
              key={job}
              control={
                <Checkbox
                  checked={formData.jobs.includes(job)}
                  onChange={() => handleJobChange(job)}
                  sx={{
                    color: '#bbb',
                    '&.Mui-checked': { color: '#c62828' },
                  }}
                />
              }
              label={<Typography sx={{ color: '#ccc' }}>{job}</Typography>}
            />
          ))}
        </FormGroup>

        <TextField
          name="description"
          label="Short Description"
          value={formData.description}
          onChange={handleInputChange}
          fullWidth
          multiline
          rows={3}
          sx={{ mb: 2 }}
          InputProps={{ sx: { bgcolor: '#222', color: '#fff' } }}
          InputLabelProps={{ sx: { color: '#aaa' } }}
        />
      </DialogContent>

      <DialogActions sx={{ bgcolor: '#111' }}>
        <Button onClick={onClose} sx={{ color: '#ccc' }}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            bgcolor: '#c62828',
            ':hover': { bgcolor: '#b71c1c' },
            color: '#fff',
            fontWeight: 600,
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
