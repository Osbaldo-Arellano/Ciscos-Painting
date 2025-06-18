import { Box, Typography, Button, TextField, Grid, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: '#111', color: 'white', py: 8, px: { xs: 2, md: 10 } }}>
      


      {/* Main Footer Content */}
      <Grid container spacing={4} justifyContent="space-between" sx={{ borderTop: '1px solid #333', pt: 4 }}>
            <Grid item xs={12} md={5}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                Cisco's Painting
            </Typography>
            <Typography variant="body2" sx={{ color: 'gray' }}>
                General Contractor
            </Typography>
            <Typography variant="body2" sx={{ color: 'gray' }}>
                Licensed, bonded, and insured. CCB# 199769. 
                <br /> We exceed OSHA regulations and meet PDCA standards.
            </Typography>
            </Grid>



            <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'white', mb: 1 }}>
                Company
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Link href="#" underline="hover" sx={{ color: 'gray', '&:hover': { color: '#b71c1c' } }}>About Us</Link>
                <Link href="#" underline="hover" sx={{ color: 'gray', '&:hover': { color: '#b71c1c' } }}>Contact Us</Link>
            </Box>
            </Grid>

        

            <Grid item xs={6} md={2}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'white', mb: 1 }}>
                Services
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
                    {/* Column 1 */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                        <Typography sx={{ color: 'gray' }}>Painting</Typography>
                        <Typography sx={{ color: 'gray' }}>Siding</Typography>
                        <Typography sx={{ color: 'gray' }}>Fences</Typography>
                    </Box>

                    {/* Column 2 */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                        <Typography sx={{ color: 'gray' }}>Roofing</Typography>
                        <Typography sx={{ color: 'gray' }}>Drywall</Typography>
                        <Typography sx={{ color: 'gray' }}>Carpentry</Typography>
                    </Box>

                    {/* Column 3 */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                        <Typography sx={{ color: 'gray' }}>Janitorial</Typography>
                        <Typography sx={{ color: 'gray' }}>Cabinet re-paint and finishing</Typography>
                        <Typography sx={{ color: 'gray' }}>Restoration</Typography>
                    </Box>        
                </Box>
            </Grid>
        </Grid>  
        <Grid item xs={12} md={2} sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'white', mb: 1 }}>
            Contact
            </Typography>
            <Typography variant="body2" sx={{ color: 'gray' }}>
            <Link href="tel:5032367003" underline="hover" sx={{ color: 'gray', '&:hover': { color: '#b71c1c' } }}>
                (503) 999-9060
            </Link>
            </Typography>
            <Typography variant="body2" sx={{ color: 'gray' }}>
            1489 Arabian Ave SE.<br />Salem, OR 97317
            </Typography>
        </Grid>
        <Grid item xs={12} md={2}>
                <Box            
                    sx={{
                    width: '100%',
                    height: 250,
                    borderRadius: 2,
                    overflow: 'hidden',
                    border: '1px solid #333',
                    }}
                >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d305.70235284408085!2d-122.96589721982008!3d44.91212612412854!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54bff9c99930614f%3A0x6b740620a338b1ff!2sCisco&#39;s%20Painting%20LLC!5e0!3m2!1sen!2sus!4v1749782529823!5m2!1sen!2sus" 
                        width="100%" 
                        height="250" 
                        style={{border: 0}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>                
                </Box>
            </Grid>
      {/* Copyright */}
    <Box sx={{ borderTop: '1px solid #333', textAlign: 'center', pt: 3, mt: 4, color: 'gray', fontSize: '0.8rem' }}>
        © 2024 Cisco's Painting. All rights reserved.
      </Box>
    </Box>
  );
}
