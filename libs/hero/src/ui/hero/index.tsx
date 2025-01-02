'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import type { HeroProps, ActionButton } from '../types';

export function Hero({
  title = "Modern Furniture Design",
  description = "Create and customize your perfect living space with our innovative furniture design platform.",
  image = "https://hemmingandwills.co.uk/cdn/shop/articles/featured_image_-_living_room_furniture_layout_1600x@2x.jpg?v=1692692232",
  actionButtons = [
    {
      label: "Get Started",
      onClick: () => console.log("Get Started clicked"),
      variant: "contained"
    },
    {
      label: "Learn More",
      onClick: () => console.log("Learn More clicked"),
      variant: "outline"
    }
  ],
  imageAlt = 'Hero section image',
  containerWidth = 'lg'
}: HeroProps) {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: { xs: 4, md: 0 } }}>
      <Container maxWidth={containerWidth}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            alignItems: 'center',
          }}
        >
          {/* Content Section */}
          <Box sx={{ flex: 1 }}>
            <Stack spacing={3}>
              <Typography
                component="h1"
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  color: 'text.primary'
                }}
              >
                {title}
              </Typography>

              <Typography
                variant="h6"
                sx={{ color: 'text.secondary' }}
              >
                {description}
              </Typography>

              {actionButtons.length > 0 && (
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                >
                  {actionButtons.map((button: ActionButton, index: number) => (
                    <Button
                      key={index}
                      variant={button.variant === 'outline' ? 'outlined' : 'contained'}
                      color={button.variant === 'secondary' ? 'secondary' : 'primary'}
                      onClick={button.onClick}
                      size="large"
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
                '& img': {
                  width: '100%',
                  maxHeight: 500,
                  height: 'auto',
                  borderRadius: 2,
                  objectFit: 'cover'
                }
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