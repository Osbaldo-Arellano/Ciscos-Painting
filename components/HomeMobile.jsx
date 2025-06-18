import { Box, Typography, Button, Grid, Paper, Card, CardContent } from '@mui/material';
import BrushIcon from '@mui/icons-material/Brush';

export default function HomeMobile() {
  return (
    <Box sx={{ bgcolor: '#111', color: '#eee', width: '100%', overflowX: 'hidden' }}>
      
      {/* Top CTA */}
      <Box sx={{ display: 'flex', justifyContent: 'center', px: 2, py: 3 }}>
        <Button
          variant="outlined"
          size="small"
          startIcon={<BrushIcon sx={{ color: '#f44336' }} />}
          sx={{
            color: '#eee',
            borderColor: '#555',
            borderRadius: '999px',
            textTransform: 'none',
            fontSize: '0.85rem',
            px: 2,
            '&:hover': { backgroundColor: '#222', borderColor: '#777' },
          }}
        >
          Get a free estimate&nbsp;
          <a href="/estimate" style={{ color: '#f44336', textDecoration: 'underline' }}>
            here!
          </a>
        </Button>
      </Box>

      {/* Heading */}
      <Box sx={{ textAlign: 'center', py: 4, px: 2 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            letterSpacing: '-0.5px',
            fontSize: { xs: '1.8rem', sm: '2rem' },
            color: '#fff',
          }}
        >
          Transform or Restore your space with our painting and carpentry experts.
        </Typography>
      </Box>

      {/* Hero Image */}
      <Box
        sx={{
          position: 'relative',
          height: '50vh',
          width: '100vw',
          maxWidth: '100%',
          backgroundImage: 'url(images/home1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            bgcolor: 'rgba(0,0,0,0.6)',
            zIndex: 1,
          }}
        />
        {/* Overlay content */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: 0,
            right: 0,
            px: 2,
            maxWidth: 400,
            mx: 'auto',
            boxSizing: 'border-box',
            zIndex: 2,
          }}
        >
          <Box
            sx={{
              bgcolor: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(6px)',
              borderRadius: 2,
              p: 2,
              mb: 2,
            }}
          >
            <Typography variant="body2" sx={{ color: '#ddd' }}>
              Cisco's Painting is one of Salem's premier painting, repair, light remodel, and finish contractors.
            </Typography>
          </Box>

          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: '#f44336',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '999px',
              px: 3,
              '&:hover': { backgroundColor: '#d32f2f' },
            }}
          >
            Get Estimate
          </Button>
        </Box>
      </Box>

      {/* About */}
      <Box sx={{ py: 6, px: 2 }}>
        <Typography variant="h6" sx={{ color: '#aaa', mb: 1 }}>
         02/ About Us
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: '#fff' }}>
          Reviving Homes, Restoring Trust
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box
              component="img"
              src="images/home1.png"
              alt="About"
              sx={{ width: '100%', borderRadius: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              sx={{
                color: '#ccc',
                lineHeight: 1.7,
                fontSize: '0.95rem',
              }}
            >
              Cisco's Painting is one of Salem's premier painting, siding, fencing, roofing, drywall, carpentry,
              janitorial, cabinet re-paint and finishing, and restoration finish contractors. Our skilled craftsmen
              deliver top-tier results with a focus on clean execution and quality workmanship.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                mt: 2,
                borderColor: '#555',
                color: '#eee',
                px: 3,
                borderRadius: '999px',
                fontSize: '0.85rem',
                '&:hover': { backgroundColor: '#222', borderColor: '#777' },
              }}
            >
              About Us
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Stats */}
      <Box sx={{ px: 2, bgcolor: '#181818', py: 4 }}>
        <Grid container spacing={2}>
          {[
            ['20+ Years', 'Of Professional Experience'],
            ['10+ Years', 'Serving Salem and Portland since 2013'],
            ['Customer Satisfaction', 'We strive to please our customers'],
            ['100+ Projects', 'Completed since we began'],
          ].map(([title, text], idx) => (
            <Grid item xs={12} sm={6} key={idx}>
              <Paper
                sx={{
                  p: 2,
                  bgcolor: '#222',
                  color: '#ddd',
                  textAlign: 'center',
                  borderRadius: 2,
                }}
                elevation={0}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {title}
                </Typography>
                <Typography variant="body2">{text}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Services */}
      <Box sx={{ bgcolor: '#1a1a1a', py: 6, px: 2 }}>
        <Typography variant="h6" sx={{ color: '#aaa', mb: 1 }}>
          03/ Our Services
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, color: '#fff' }}>
          Our Various Services Are Provided For You
        </Typography>
        <Grid container spacing={3}>
          {[
            ['Interior Painting', 'High-quality interior finishes for your home or business.'],
            ['Carpentry Services', 'Custom carpentry for renovations, repairs, and remodels.'],
            ['Restoration Work', 'Bringing historic and damaged properties back to life.'],
          ].map(([title, text], idx) => (
            <Grid item xs={12} key={idx}>
              <Card sx={{ borderRadius: 2, boxShadow: 2, bgcolor: '#222', color: '#eee' }}>
                <CardContent>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#fff' }}>
                    {title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, color: '#bbb' }}>
                    {text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
