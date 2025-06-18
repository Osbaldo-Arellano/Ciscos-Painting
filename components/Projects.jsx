import { Typography, Paper, Box, GlobalStyles } from '@mui/material';
import Slider from 'react-slick';
import ProjectSlide from './ProjectSlide';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    title: 'Salem, Oregon – Modern Suburban Homes',
    description: 'A 12-unit residential development featuring energy-efficient designs, open floor plans, and sustainable materials. Completed on schedule despite challenging winter conditions.',
    images: ['/images/home1.png', '/images/site1.png', '/images/worker1.png', '/images/worker1-2.png']
  },
  {
    title: 'Portland Urban Loft Renovation',
    description: 'Transformed a historic downtown warehouse into luxury loft apartments while preserving its industrial character. Features exposed brick, steel beams, and smart home integration.',
    images: ['/images/home1.png', '/images/site1.png', '/images/worker1.png', '/images/worker1-2.png']
  },
  {
    title: 'Bend, OR – Mountain View Custom Home',
    description: 'A 3,500 sq ft custom-built home with panoramic Cascade Mountain views. Designed for extreme weather resilience with high-performance insulation and solar-ready roofing.',
    images: ['/images/home1.png', '/images/site1.png', '/images/worker1.png', '/images/worker1-2.png']
  },
  {
    title: 'Eugene Community Center Expansion',
    description: 'Added a 10,000 sq ft multi-purpose hall, playground, and ADA-compliant facilities to a local community center. Completed with 30% recycled materials.',
    images: ['/images/home1.png', '/images/site1.png', '/images/worker1.png', '/images/worker1-2.png']
  },
  {
    title: 'Coastal Retreat – Cannon Beach',
    description: 'A beachfront property built to withstand Pacific storms, featuring reinforced foundations, cedar siding, and floor-to-ceiling oceanview windows.',
    images: ['/images/home1.png', '/images/site1.png', '/images/worker1.png', '/images/worker1-2.png']
  }
];

export default function Projects() {
  const projectSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    pauseOnFocus: true,
    cssEase: 'cubic-bezier(0.77, 0, 0.175, 1)',
    centerMode: false,
    swipeToSlide: true,
    focusOnSelect: true,
    draggable: true,
  };

  return (
    <>
      <GlobalStyles
        styles={{
          '.slick-dots li button:before': {
            color: '#ccc !important',
            opacity: 1,
            fontSize: '12px',
          },
          '.slick-dots li.slick-active button:before': {
            color: '#fff !important',
            opacity: 1,
          },
        }}
      />

      <Paper
        elevation={3}
        sx={{
          p: 4,
          background: `radial-gradient(circle at center, #3a3a3a 0%, #1a1a1a 100%)`, // 👈 Radial gradient added here
          mt: 8,
          width: '100%',
        }}
      >
        <Typography
          variant="h5"
          sx={{ ml: 9, color: '#fff', alignSelf: 'flex-start', mb: 1 }}
        >
          01/ Gallery
        </Typography>
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: '2.5rem', sm: '4rem', md: '4rem' },
            fontFamily: '"Inter", sans-serif',
            lineHeight: 1.3,
            letterSpacing: '0.3px',
            fontWeight: 700,
            color: '#fff',
            alignSelf: 'flex-start',
            ml: 9,
          }}
        >
          Our Projects
        </Typography>
        <Box
          sx={{
            mt: 4,
            ml: 9,
          }}
        >
          <Slider {...projectSettings}>
            {projects.map((project, index) => (
              <div key={index}>
                <ProjectSlide project={project} />
              </div>
            ))}
          </Slider>
        </Box>
      </Paper>
    </>
  );
}
