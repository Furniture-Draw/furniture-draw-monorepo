import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

interface VideoHeroProps {
  title: string;
  description: string;
  ctaButton?: {
    label: string;
    onClick: () => void;
  };
  videoSrc: string;
  imageAlt?: string;
  muted?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  fallbackImageSrc?: string;
  furnitureSvg?: string;
}

export const VideoHero: React.FC<VideoHeroProps> = ({
  title,
  description,
  ctaButton,
  videoSrc,
  imageAlt = 'Hero Video',
  muted = true,
  autoPlay = true,
  loop = true,
  fallbackImageSrc = '/api/placeholder/800/600',
  furnitureSvg,
}) => {
  const [firstPart, secondPart] = title.split('Furniture');

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
          }}
        >
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: 'center', md: 'left' },
              mb: { xs: 4, md: 0 },
            }}
          >
            <Box sx={{ position: 'relative', display: 'inline-block' }}>
              <Typography
                component="h1"
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 'bold',
                  lineHeight: 1.2,
                  mb: 0,
                }}
              >
                {firstPart}
                <Box
                  component="span"
                  sx={{ position: 'relative', display: 'inline-block' }}
                >
                  Furniture
                  {furnitureSvg && (
                    <Box
                      component="img"
                      src={furnitureSvg}
                      alt="Furniture Decoration"
                      sx={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        top: '100%',
                        width: '180px',
                        height: 'auto',
                        marginTop: '-5px',
                      }}
                    />
                  )}
                  <Box
                    component="img"
                    src="./images/Element2.svg"
                    alt="Decoration"
                    sx={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      top: '100%',
                      width: '200px',
                      height: 'auto',
                      marginTop: '-5px',
                    }}
                  />
                </Box>
                {secondPart}
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.125rem' },
                color: 'text.secondary',
                mt: 4,
                mb: 4,
                maxWidth: '600px',
                mx: { xs: 'auto', md: 0 },
              }}
            >
              {description}
            </Typography>

            {ctaButton && (
              <Button
                variant="contained"
                color="primary"
                onClick={ctaButton.onClick}
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: '1.125rem',
                  borderRadius: 2,
                }}
              >
                {ctaButton.label}
              </Button>
            )}
          </Box>

          <Box
            sx={{
              flex: 1,
              width: '100%',
              maxWidth: { xs: '100%', md: '600px' },
            }}
          >
            <Box
              component="iframe"
              src={`https://www.youtube.com/embed/${
                videoSrc.split('v=')[1]
              }?autoplay=1&mute=1&loop=1&playlist=${videoSrc.split('v=')[1]}`}
              title={imageAlt}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sx={{
                width: '100%',
                height: { xs: '300px', md: '500px' },
                borderRadius: '16px',
                boxShadow: 8,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
