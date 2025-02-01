import React, { useState } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import TestimonialCard from './TestimonialCard';
import { TestimonialProps } from '../types';

const NavigationButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
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
  cardsPerView = 3,
  containerWidth = 'lg',
}) {
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

  // Split heading to target "trusted" word
  const words = heading.split(' ');
  const trustedIndex = words.findIndex(
    (word) => word.toLowerCase() === 'trusted'
  );

  return (
    <Box sx={{ bgcolor: 'background.default', py: { xs: 8, md: 12 } }}>
      <Container maxWidth={'lg' as 'xs' | 'sm' | 'md' | 'lg' | 'xl'}>
        <Box sx={{ position: 'relative', textAlign: 'center', mb: 8 }}>
          <Typography
            component="h2"
            sx={{
              fontWeight: 'bold',
              color: 'text.primary',
              fontSize: '72px',
              lineHeight: 1.2,
              position: 'relative',
              display: 'inline-block',
              '& .trusted-word': {
                position: 'relative',
                display: 'inline-block',
              },
            }}
          >
            {words.map((word, index) => (
              <React.Fragment key={index}>
                {index === trustedIndex ? (
                  <span className="trusted-word">
                    {word}
                    <Box
                      component="img"
                      src="/images/Element2.svg"
                      alt="Decoration"
                      sx={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        bottom: '-25px',
                        width: '258.1px', // Exact width
                        height: '49.95px', // Exact height
                        marginTop: '10px',
                      }}
                    />
                  </span>
                ) : (
                  word
                )}
                {index < words.length - 1 ? ' ' : ''}
              </React.Fragment>
            ))}
          </Typography>
        </Box>

        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: `repeat(${cardsPerView}, 1fr)`,
              },
              gap: 4,
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            {testimonials
              .slice(currentIndex, currentIndex + cardsPerView)
              .map(
                (
                  testimonial: TestimonialProps['testimonials'][number],
                  index
                ) => (
                  <TestimonialCard
                    key={index}
                    {...testimonial}
                    elevation={0}
                    sx={{
                      bgcolor: index === 0 ? 'white' : '#4A90E2',
                      color: index === 0 ? 'text.primary' : 'white',
                      borderRadius: '20px',
                      p: 4,
                      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                    }}
                    isWhiteCard={index === 0}
                  />
                )
              )}
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
              <NavigationButton onClick={handlePrevious} aria-label="Previous">
                <ChevronLeft />
              </NavigationButton>
              <NavigationButton onClick={handleNext} aria-label="Next">
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
