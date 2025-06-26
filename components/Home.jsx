import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Typography, Button, Grid } from '@mui/material';
import StackedServiceCards from '@/components/StackedServiceCards';
import { useState } from 'react';
import EstimateModal from '@/components/EstimateModal'; 
import ContactForm from '@/components/ContactForm'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  
  
  const servicesData = [
    {
      image: '/images/painting.webp',
      title: 'Painting',
      description: 'Professional painting services to refresh and beautify your property.',
    },
    {
      image: '/images/siding.webp',
      title: 'Siding',
      description: 'Durable siding installation and repair to protect and enhance your exterior.',
    },
    {
      image: '/images/fences.webp',
      title: 'Fences',
      description: 'Custom fence design and installation for privacy and security.',
    },
    {
      image: '/images/roofing.webp',
      title: 'Roofing',
      description: 'Reliable roofing solutions to keep your home safe and weatherproof.',
    },
    {
      image: '/images/drywall.webp',
      title: 'Drywall',
      description: 'Expert drywall installation, finishing, and repair services.',
    },
    {
      image: '/images/carpentry.webp',
      title: 'Carpentry',
      description: 'Skilled carpentry work tailored to your construction or renovation needs.',
    },
    {
      image: '/images/janitorial.webp',
      title: 'Janitorial',
      description: 'Comprehensive janitorial services for commercial and residential spaces.',
    },
    {
      image: '/images/cabinet-repaint.webp',
      title: 'Cabinet Re-paint and Finishing',
      description: 'Transform your cabinets with professional repainting and finishing.',
    },
    {
      image: '/images/restoration.webp',
      title: 'Restoration',
      description: 'Quality restoration services to bring your property back to life.',
    },
    {
      image: '/images/logo-bg.jpg',
      title: 'Contact',
      description: 'Get in touch with us for inquiries and service requests.',
    },
  ];

  return (
    <>
      <main>
        <EstimateModal open={modalOpen} onClose={() => setModalOpen(false)} />

        <Box sx={{ marginBottom: 10, overflow:'hidden'}}>
          {/* Hero Section */}
          <section>
            
            <Box
              sx={{
                position: 'relative',
                height: {
                  xs: '75vh',
                  md: 'calc(100vh - 64px)', // leaves room for sticky/fixed nav
                  xl: '100vh',
                },
                width: '100%',
                backgroundImage: 'url(/images/nice-house.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                
              }}
            >
              {/* Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  bgcolor: 'rgba(0, 0, 0, 0.6)',
                  zIndex: 1,
                }}
              />

              {/* Main Hero Text */}
              <Box
                component="header"
                sx={{
                  position: 'absolute',
                  top: '30%',
                  left: 0,
                  transform: 'translateY(-60%)',
                  zIndex: 2,
                  width: { xs: '90%', sm: '70%', md: '55%' },
                  p: { xs: 2, sm: 6, md: 5, xl: 9 },
                  backgroundColor: 'rgba(0,0,0,0.4)',
                  backdropFilter: 'blur(6px)',
                  borderRadius: 2,
                  color: '#eee',
                  mt: { xs: 0, md: 12, xl: 25 }, 
                }}
              >
                
               
                  <Typography variant="h6" sx={{ color: '#ccc', mb: 1 }}>
                    00/ Welcome
                  </Typography>
                  <Typography
                    component="h1"
                    sx={{
                      fontSize: { xs: '1.8rem', sm: '2.5rem', md: '2rem', xl:'4rem' },
                      fontFamily: '"Inter", sans-serif',
                      lineHeight: 1.2,
                      fontWeight: 700,
                    }}
                  >
                    With 20+ Years of Experience, We Are Here To Serve You
                  </Typography>
                
              </Box>

              {/* CTA Box */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: 40, md: 100 },
                  left: { xs: '5%', md: '5%' },
                  color: '#fff',
                  maxWidth: { xs: '90%', sm: 400 },
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    
                    bgcolor: 'rgba(0,0,0,0.4)',
                    backdropFilter: 'blur(6px)',
                    borderRadius: 2,
                    p: 2,
                    mb: 3,
                    color: '#eee',
                  }}
                >
                  <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                    Get in touch with one of Salem&apos;s premier contractors.
                  </Typography>
                </Box>

                {/* MODAL TRIGGER BUTTON */}
                <Button
                  variant="contained"
                  size="medium"
                  onClick={() => setModalOpen(true)}
                  sx={{
                    backgroundColor: '#f44336',
                    color: '#fff',
                    fontWeight: 'bold',
                    borderRadius: '999px',
                    px: 3,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    '&:hover': { backgroundColor: '#d32f2f' },
                  }}
                >
                  Get Estimate
                </Button>
              </Box>
            </Box>
          </section>

        {/* Services Section */}
        <section>
          <Box
              sx={{
                background: '#1a1a1a',
                py: { xs: 6, md: 8 },
                px: { xs: 2, sm: 4, md: 6 },
                mt: 8,
                width: '100%',
                mr: { xs: 0, md: 5 },
                borderRadius: 3,
              }}
            >
            <Typography variant="h5" sx={{ color: '#ccc', mb: 1 }}>
              01/ Our Services
            </Typography>
            <Typography
                component="h2"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '4rem', md: '5rem' },
                  fontFamily: '"Inter", sans-serif',
                  lineHeight: 1.3,
                  letterSpacing: '0.3px',
                  fontWeight: 700,
                  color: '#ccc',
                  alignSelf: 'flex-start',
                }}
              >
                We Have a Solution
              </Typography>
                          <Typography variant="h6" sx={{ color: '#ccc', mb: 1 }}>
               Painting, Siding, Fences, Roofing, Drywall, Carpentry, Janitorial, Cabinet re-paint and finishing, and Restoration
            </Typography>
              <Box  sx={{
                      display: 'flex',
                      justifyContent: 'center',
                    }}
              >
                <StackedServiceCards services={servicesData} />
              </Box>
          </Box>
        </section>

          {/* About Section */}
          <section>
            <Box
              sx={{
                width: '100%',
                minHeight: { xs: 'auto', md: '100vh' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                px: { xs: 3, sm: 6, md: 9 },
                py: { xs: 6, md: 9 },
                position: 'relative',
                bgcolor: '#181818',
                m: { xs: 2, md: 10 },
                borderRadius: 2,
                color: '#ccc',
                textAlign: 'left',
                overflow:'hidden'
              }}
            >
              <Typography variant="h5" sx={{ color: '#ccc', alignSelf: 'flex-start', mb: 1 }}>
                02/ About Us
              </Typography>
              
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '4rem', md: '5rem' },
                  fontFamily: '"Inter", sans-serif',
                  lineHeight: 1.3,
                  letterSpacing: '0.3px',
                  fontWeight: 700,
                  mb: 4,
                  color: '#ccc',
                  alignSelf: 'flex-start',
                }}
              >
                Reviving Homes, Restoring Trust
              </Typography>

               <Grid container spacing={4} sx={{ width: '100%' }}>
                  {/* Image Column - Forced Left Alignment */}
                  <Grid item xs={12} md={6}>
                    <Box sx={{ 
                      width: '100%',
                      maxWidth: 900,
                      marginRight: 'auto',
                    }}>
                      <Image
                        src="/images/home2.webp"
                        alt="A grey new home"
                        width={900}
                        height={600}
                        style={{ 
                          width: '100%', 
                          height: 'auto', 
                          borderRadius: '8px',
                          display: 'block'
                        }}
                        priority
                      />
                    </Box>
                  </Grid>

                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
                >
                  <Box sx={{ mb: 6, maxWidth: { xs: '100%', md: '100%' }, mx: { xs: 'auto', md: 'unset' }, position: 'relative' }}>
                    <Box
                      sx={{
                        background: `linear-gradient(
                          90deg,
                          #b71c1c,
                          #880e4f,
                          #4a148c,
                          #1a237e,
                          #0d47a1
                        )`,
                        px: 2,
                        py: { xs: 3, md: 5 },
                        borderRadius: 2,
                        mb: 4,
                        textAlign: 'left',
                        color: '#fff',
                        fontSize: { xs: '2rem', md: '3.5rem' },
                        fontWeight: '700',
                        fontFamily: '"Inter", sans-serif',
                        lineHeight: 1.2,
                        letterSpacing: '0.3px',
                        textShadow: '2px 2px 6px rgba(0,0,0,0.8)',
                        width: '100%',
                        maxWidth: { xs: '100%', sm: '100%', md: '100%' },
                      }}
                    >
                      Cisco's General Contractor Painting
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 2,
                        maxWidth: '100%',
                      }}
                    >
                      {/* Paragraph */}
                      <Box
                        sx={{
                          fontSize: { xs: '1rem', md: '1.15rem' },
                          lineHeight: 1.8,
                          color: '#ccc',
                          fontFamily: '"Inter", sans-serif',
                          letterSpacing: '0.35px',
                          maxWidth: '50%',
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            lineHeight: 1.7,
                            color: '#ccc',
                            fontFamily: '"Inter", sans-serif',
                            letterSpacing: '0.3px',
                          }}
                        >
                          Cisco's GC Painting is one of Salem's premier painting, siding, fencing, roofing, drywall, carpentry,
                          janitorial, cabinet repaint and finishing, and restoration finish contractors. Our skilled craftsmen
                          deliver top-tier results with a focus on quality workmanship.
                        </Typography>
                      </Box>
                      {/* Small logo visible only on md screens */}
                      <Box
                        sx={{
                          display: { xs: 'none', md: 'flex', xl: 'flex' },
                          // alignItems: 'center',
                          // justifyContent: 'center',
                          // flexShrink: 0,
                        }}
                      >
                        <Image
                          src="/images/logo-bg.jpg" // 🔁 replace with your logo path
                          alt="Cisco's GC Logo"
                          width={300}
                          height={225}
                        />
                      </Box>
                    </Box>

                    
                  </Box>
                  <Link href="/gallery" >
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: '#ccc',
                        color: '#eee',
                        px: 4,
                        borderRadius: '999px',
                        width: { xs: '100%', sm: 'auto' },
                        '&:hover': { backgroundColor: '#d32f2f', borderColor: '#aaa' },
                        alignSelf: { xs: 'center', md: 'flex-start' },
                      }}
                    >
                      Project Gallery
                    </Button>
                  </Link>
                </Grid>
                
              </Grid>

              

              {/* Stats Cards Container */}
              <Box
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    gap: 2,
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                    mt: 8,
                    width: '100%',
                    px: { xs: 2, md: 0 },
                  }}
                >
                {[
                  ['20+ Years', 'Of Professional Experience', 'linear-gradient(90deg, #b71c1c, #880e4f)'], 
                  ['10+ Years', 'Serving Salem and Portland since 2013.', 'linear-gradient(90deg, #4a148c, #1a237e)'],
                  ['Customer Satisfaction', 'We Strive to Please Our Customers.', 'linear-gradient(90deg, #00695c, #004d40)'],
                ].map(([title, text, gradient], index) => (
                  
                  <Box
                    key={index}
                    sx={{
                      flex: '1 1 120px',
                      py: { xs: 4, md: 5 },
                      px: { xs: 2, md: 2 },
                      background: gradient,
                      color: '#fff',
                      textAlign: 'center',
                      position: 'relative',
                      borderRadius: 2,
                      overflow: 'hidden',
                      cursor: 'default',
                      '&:hover .bgShape': {
                        transform: 'scale(1.1)',
                        opacity: 0.15,
                      },
                      transition: 'all 0.4s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      minWidth: 0,
                    }}
                  >
                    <Box
                      className="bgShape"
                      sx={{
                        position: 'absolute',
                        top: '-20%',
                        left: '-20%',
                        width: '150%',
                        height: '150%',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.2), transparent)',
                        transform: 'scale(1)',
                        opacity: 0.1,
                        transition: 'all 0.5s ease',
                        zIndex: 0,
                        borderRadius: 2,
                      }}
                    />
                    <Typography
                      variant="h3"
                      sx={{
                        position: 'relative',
                        zIndex: 1,
                        fontSize: { xs: '2.2rem', md: '2rem' },
                        fontWeight: 900,
                        textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        position: 'relative',
                        zIndex: 1,
                        mt: 2,
                        fontWeight: 400,
                        color: 'rgba(255,255,255,0.85)',
                        fontSize: { xs: '1rem', md: '1.2rem' },
                        maxWidth: '280px',
                        margin: '0 auto',
                        lineHeight: 1.5,
                      }}
                    >
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </section>

          <section>
            <Box
              sx={{
                background: '#1a1a1a',
                py: { xs: 8, md: 9 },
                px: { xs: 2, md: 9 },
                mt: 8,
                borderRadius: 3,
                color: '#eee',
                mr: { xs: 0, md: 5, lg: 8 }              
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  gap: 6,
                }}
              >
                {/* Left side: Heading */}
                <Box sx={{ flex: '0 0 400px', maxWidth: 500 }}>
                  <Typography variant="h5" sx={{ color: '#ccc', mb: 1 }}>
                    03 / Contact Us
                  </Typography>
                  <Typography
                    component="h2"
                    sx={{
                      fontSize: { xs: '2.5rem', sm: '4rem', md: '5rem' },
                      fontFamily: '"Inter", sans-serif',
                      lineHeight: 1.3,
                      letterSpacing: '0.3px',
                      fontWeight: 700,
                      mb: 4,
                      color: '#ccc',
                    }}
                  >
                    From House to Home, with Care.
                  </Typography>
                </Box>
              {/* Contact */}
              <Box
                sx={{
                  flex: 1,
                  p: 2,
                  borderRadius: '16px',
                  position: 'relative',
                  overflow: 'hidden',
                  color: '#eee',
                  background:
                    'linear-gradient(25deg, #2e2e2e, #1a1a1a, #1a1231)',

                  boxShadow: '0 8px 30px rgba(0,0,0,0.9)',

                  // Glow effect circles for depth and softness
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: '280px',
                    height: '280px',
                    background:
                      'radial-gradient(circle at center, rgb(216, 6, 6) 0%, transparent 70%)', // red glow
                    opacity: 0.3,
                    borderRadius: '50%',
                    filter: 'blur(70px)',
                    zIndex: 0,
                    transform: 'rotate(15deg)',
                  },

                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '320px',
                    height: '320px',
                    background:
                      'radial-gradient(circle at center, #000000 0%, transparent 80%)',
                    opacity: 0.3,
                    borderRadius: '50%',
                    filter: 'blur(90px)',
                    zIndex: 0,
                    transform: 'rotate(-10deg)',
                  },

                  '& > div': {
                    position: 'relative',
                    zIndex: 1,
                    backgroundColor: 'rgba(20, 20, 30, 0.8)',
                    borderRadius: '12px',
                    padding: 3,
                    boxShadow: 'inset 0 0 20px rgba(255, 255, 255, 0.05)',
                  },

                  '& .MuiTextField-root input, & textarea': {
                    color: '#eee',
                  },
                  '& .MuiInputLabel-root': {
                    color: '#bbb',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#555',
                    },
                    '&:hover fieldset': {
                      borderColor: '#d80606', // bright red on hover
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#d80606',
                      boxShadow: '0 0 8px #d80606', // red glow on focus
                    },
                  },
                }}
              >
                <ContactForm />
              </Box>



              </Box>
            </Box>
          </section>

        </Box>
      </main>
    </>
  );
}
