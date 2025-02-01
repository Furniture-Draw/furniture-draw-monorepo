'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import type { HeroProps, ActionButton } from '../types';

export function Hero({
  title = 'Modern Furniture Design',
  description = 'Create and customize your perfect living space with our innovative furniture design platform.',
  image = 'https://hemmingwills.co.uk/cdn/shop/articles/featured_image_-_living_room_furniture_layout_1600x@2x.jpg?v=1692692232',
  actionButtons = [
    {
      label: 'Get Started',
      onClick: () => console.log('Get Started clicked'),
      variant: 'contained',
    },
    {
      label: 'Learn More',
      onClick: () => console.log('Learn More clicked'),
      variant: 'outline',
    },
  ],
  imageAlt = 'Hero section image',
  containerWidth = 'lg',
}: HeroProps) {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        mt: { xs: 8, md: 0 }, // Add margin top for spacing from navigation
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'linear-gradient(45deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 100%)',
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth={containerWidth}
        sx={{ position: 'relative', zIndex: 2 }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 6, md: 8 },
            alignItems: 'center',
            py: { xs: 6, md: 10 },
          }}
        >
          {/* Content Section */}
          <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '50%' } }}>
            <Stack spacing={4}>
              <Typography
                component="h1"
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  lineHeight: 1.2,
                  color: '#4F9CF9',
                  letterSpacing: '-0.02em',
                }}
              >
                {title}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: '#4F9CF9',
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.6,
                }}
              >
                {description}
              </Typography>

              {actionButtons.length > 0 && (
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  {actionButtons.map((button: ActionButton, index: number) => (
                    <Button
                      key={index}
                      variant={
                        button.variant === 'outline' ? 'outlined' : 'contained'
                      }
                      color={
                        button.variant === 'secondary' ? 'secondary' : 'primary'
                      }
                      onClick={button.onClick}
                      size="large"
                      sx={{
                        py: 1.5,
                        px: 4,
                        borderRadius: 2,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: (theme) =>
                            button.variant === 'outline'
                              ? 'none'
                              : theme.shadows[4],
                        },
                        transition: 'all 0.2s ease-in-out',
                      }}
                    >
                      {button.label}
                    </Button>
                  ))}
                </Stack>
              )}
            </Stack>
          </Box>

          {/* Image Section */}
          {image && (
            <Box
              sx={{
                flex: 1,
                width: '100%',
                maxWidth: { xs: '100%', md: '50%' },
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '10%',
                  left: '10%',
                  width: '80%',
                  height: '80%',
                  background: (theme) => theme.palette.primary.main,
                  opacity: 0.1,
                  borderRadius: 4,
                  transform: 'rotate(-6deg)',
                  zIndex: 0,
                },
                '& img': {
                  width: '100%',
                  height: 'auto',
                  maxHeight: 600,
                  borderRadius: 4,
                  objectFit: 'cover',
                  boxShadow: (theme) => theme.shadows[8],
                  position: 'relative',
                  zIndex: 1,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                },
              }}
            >
              <img src={image} alt={imageAlt} />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
