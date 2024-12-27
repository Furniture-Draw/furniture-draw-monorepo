'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import type { TestimonialProps } from '../types';
import TestimonialCard from './TestimonialCard';

const NavigationButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: theme.shadows[1],
  width: 40,
  height: 40,
  '&:hover': {
    backgroundColor: theme.palette.grey[100],
  },
  '& .MuiSvgIcon-root': {
    fontSize: 24,
    color: theme.palette.text.primary,
  },
}));

export function Testimonial({
  heading = 'See what our trusted users Say',
  testimonials = [],
  variant = 'light',
  cardsPerView = 3,
  containerWidth = 'lg',
}: TestimonialProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - cardsPerView : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - cardsPerView ? 0 : prev + 1
    );
  };

  return (
    <Box
      sx={{
        bgcolor: variant === 'dark' ? 'grey.900' : 'background.paper',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth={containerWidth}>
        <Typography
          component="h2"
          variant="h2"
          align="center"
          sx={{
            mb: 8,
            fontWeight: 'bold',
            color: variant === 'dark' ? 'common.white' : 'text.primary',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 120,
              height: 4,
              bgcolor: 'primary.main',
              borderRadius: 2,
            },
          }}
        >
          {heading}
        </Typography>

        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: `repeat(${cardsPerView}, 1fr)`,
              gap: 4,
              transition: 'transform 0.3s ease-in-out',
              overflow: 'hidden',
            }}
          >
            {testimonials
              .slice(currentIndex, currentIndex + cardsPerView)
              .map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  {...testimonial}
                  variant={variant}
                />
              ))}
          </Box>

          {testimonials.length > cardsPerView && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                mt: 4,
              }}
            >
              <NavigationButton
                onClick={handlePrevious}
                aria-label="Previous testimonial"
              >
                <ChevronLeft />
              </NavigationButton>
              <NavigationButton
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <ChevronRight />
              </NavigationButton>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default Testimonial;
