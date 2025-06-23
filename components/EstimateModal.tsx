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
  Snackbar,
  Alert,
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

export default function EstimateModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobs: [] as string[],
    description: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleJobChange = (job: string) => {
    setFormData(prev => ({
      ...prev,
      jobs: prev.jobs.includes(job)
        ? prev.jobs.filter(j => j !== job)
        : [...prev.jobs, job],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    try {
      const res = await fetch('/api/contact/modal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const json = await res.json();
      if (json.success) {
        setToastOpen(true);
        setTimeout(() => 
        onClose(), 1200)
      } else {
        // handle validation/server error
        alert(json.message);
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      scroll="paper"
      aria-labelledby="estimate-dialog-title"
      aria-describedby="estimate-dialog-description"
    >
      <DialogTitle id="estimate-dialog-title" sx={{ bgcolor: '#1a1a1a', color: '#fff' }}>
        Get an Estimate
      </DialogTitle>

      <DialogContent id="estimate-dialog-description" sx={{ bgcolor: '#1a1a1a', color: '#fff' }}>
        <Typography variant="body2" sx={{ mb: 2, color: '#ccc' }}>
          Fill out the form below, and we’ll get back to you with an estimate!
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            id="estimate-name"
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
            id="estimate-email"
            name="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            required
            sx={{ mb: 2 }}
            InputProps={{ sx: { bgcolor: '#222', color: '#fff' } }}
            InputLabelProps={{ sx: { color: '#aaa' } }}
          />

          <TextField
            id="estimate-phone"
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
            {jobOptions.map(job => (
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
            id="estimate-description"
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

          <DialogActions>
            <Button onClick={onClose} sx={{ color: '#ccc' }} disabled={submitting}>
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={submitting}
              sx={{
                bgcolor: '#c62828',
                ':hover': { bgcolor: '#b71c1c' },
                color: '#fff',
                fontWeight: 600,
              }}
            >
              {submitting ? 'Sending…' : 'Submit'}
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>

     {/* Success Toast */}
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
)}
