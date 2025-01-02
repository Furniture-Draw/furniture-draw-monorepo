// libs/hero/src/ui/videohero/VideoHero.tsx
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { styles } from './styles';
import type { VideoHeroProps } from './types';
import { getVideoType, getYouTubeEmbedUrl } from './utils';

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
}) => {
  const videoType = getVideoType(videoSrc);

  const renderVideo = () => {
    if (videoType === 'youtube') {
      const embedUrl = getYouTubeEmbedUrl(videoSrc);
      const urlParams = new URLSearchParams({
        autoplay: autoPlay ? '1' : '0',
        mute: muted ? '1' : '0',
        loop: loop ? '1' : '0',
        controls: '1',
        rel: '0',
      });

      return (
        <Box
          component="iframe"
          src={`${embedUrl}?${urlParams.toString()}`}
          title={imageAlt}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          sx={(theme) => ({
            width: '100%',
            height: { xs: '300px', md: '500px' },
            borderRadius: '16px',
            boxShadow: theme.shadows[8],
          })}
        />
      );
    }

    return (
      <video
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        controls
        poster={fallbackImageSrc}
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '500px',
          borderRadius: '16px',
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  };

  return (
    <Box sx={(theme) => styles(theme).root}>
      <Container maxWidth="lg">
        <Box sx={(theme) => styles(theme).contentWrapper}>
          <Box sx={(theme) => styles(theme).textContent}>
            <Typography
              component="h1"
              variant="h1"
              sx={(theme) => styles(theme).title}
            >
              {title}
            </Typography>

            <Typography sx={(theme) => styles(theme).description}>
              {description}
            </Typography>

            {ctaButton && (
              <Button
                variant="contained"
                color="primary"
                onClick={ctaButton.onClick}
                sx={(theme) => styles(theme).ctaButton}
              >
                {ctaButton.label}
              </Button>
            )}
          </Box>

          <Box sx={(theme) => styles(theme).videoContainer}>
            {renderVideo()}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
