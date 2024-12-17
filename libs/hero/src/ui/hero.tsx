'use client';

import { Box, Container, Typography, Button, Stack } from '@mui/material';
import type { HeroProps } from './types';

export function Hero({
  title,
  description,
  actionButtons = [],
  image,
  imageAlt = 'Hero section image',
  containerWidth = 'lg'
}: HeroProps) {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 12 } }}>
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
                  {actionButtons.map((button, index) => (
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