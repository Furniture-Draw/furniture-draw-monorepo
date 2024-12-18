'use client';

import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import type { Hero3Props } from '../types';
import { HeroFeatureGrid } from './HeroFeatureGrid';

export function Hero3({
  mainTitle,
  mainDescription,
  features,
  actionButtons = [],
  backgroundVariant = 'light',
  alignment = 'center',
}: Hero3Props) {
  return (
    <Box sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            textAlign: alignment,
            mb: 8
          }}
        >
          <Typography
            component="h2"
            variant="h2"
            sx={{
              mb: 3,
              fontWeight: 'bold',
              color: backgroundVariant === 'dark' ? 'common.white' : 'text.primary',
            }}
          >
            {mainTitle}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: backgroundVariant === 'dark' ? 'grey.300' : 'text.secondary',
              maxWidth: 800,
              mx: alignment === 'center' ? 'auto' : 0,
            }}
          >
            {mainDescription}
          </Typography>
          
          {actionButtons.length > 0 && (
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent={alignment === 'center' ? 'center' : 'flex-start'}
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
        </Box>

        <HeroFeatureGrid 
          features={features} 
          backgroundVariant={backgroundVariant} 
        />
      </Container>
    </Box>
  );
}

export default Hero3;