import React from 'react';
import Link from 'next/link';
import { Box, Card, CardMedia, CardContent, Typography, Button, SxProps, Theme } from '@mui/material';

type ServiceCardProps = {
  image: string;
  title: string;
  description: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  style?: SxProps<Theme>;
  gradient: string;
};

export default function ServiceCard({
  image,
  title,
  description,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  style,
  gradient,
}: ServiceCardProps) {
  return (
    <Card
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      sx={{
        width: { xs: '90vw', sm: '30vw' },
        cursor: 'pointer',
        borderRadius: 5,
        boxShadow: isHovered ? 8 : 3,
        transform: isHovered ? 'scale(1.2)' : 'scale(1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          background: gradient,
        },
        ...style,
      }}
    >
      {/* Background gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: gradient,
          opacity: 0.08,
          zIndex: 0,
        }}
      />

      {/* Vertical title label */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 8,
          right: 8,
          writingMode: 'vertical-rl', 
          transform: 'rotate(180deg)', 
          fontSize: 14,
          color: '#fff',
          background: 'rgba(0,0,0,0.8)', 
          px: 1,
          py: 1,
          borderRadius: 1,
          zIndex: 2,
          letterSpacing: 2.5,
          textTransform: 'uppercase',
          fontWeight: 500,
          userSelect: 'none',
        }}
      >
        {title}
      </Box>

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            width: '100%',
            height: 250,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            filter: isHovered ? 'brightness(1.05)' : 'brightness(1)',
            transition: 'filter 0.3s ease',
          }}
        />

        <CardContent>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            {description}
          </Typography>

          <Link
            href="/contact"
            aria-label={`Learn more about ${title} services and contact us`}
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{
                borderRadius: '999px',
                background: gradient,
                color: 'white',
                fontWeight: 600,
                textTransform: 'none',
                px: 3,
                '&:hover': {
                  background: gradient,
                  opacity: 0.85,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                },
              }}
            >
              Learn More
            </Button>
          </Link>
        </CardContent>
      </Box>
    </Card>
  );
}
