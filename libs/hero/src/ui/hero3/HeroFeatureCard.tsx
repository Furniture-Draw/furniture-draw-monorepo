import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { FeatureCard } from '../types';

interface HeroFeatureCardProps extends FeatureCard {
  backgroundVariant?: 'light' | 'dark';
}

const StyledCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'backgroundVariant',
})<{ backgroundVariant?: 'light' | 'dark' }>(({ theme, backgroundVariant }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: backgroundVariant === 'dark' 
    ? theme.palette.grey[800] 
    : theme.palette.background.paper,
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: theme.shadows[1],
  
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[4],
    
    '&::after': {
      transform: 'translateY(0)',
    },
  },
  
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '4px',
    backgroundColor: theme.palette.primary.main,
    transform: 'translateY(4px)',
    transition: 'transform 0.3s ease-in-out',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& svg': {
    width: 48,
    height: 48,
    color: theme.palette.primary.main,
    transition: 'transform 0.3s ease-in-out',
  },
  '&:hover svg': {
    transform: 'scale(1.1)',
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 220,
  marginBottom: theme.spacing(2),
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius,
  
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
}));

export const HeroFeatureCard: React.FC<HeroFeatureCardProps> = ({
  icon,
  title,
  description,
  imageSrc,
  backgroundVariant = 'light',
}) => {
  return (
    <StyledCard backgroundVariant={backgroundVariant}>
      {icon && (
        <IconWrapper>
          {icon}
        </IconWrapper>
      )}
      
      {imageSrc && (
        <ImageWrapper>
          <img src={imageSrc} alt={title} />
        </ImageWrapper>
      )}
      
      <Typography
        variant="h6"
        component="h3"
        gutterBottom
        sx={{
          color: backgroundVariant === 'dark' ? 'common.white' : 'text.primary',
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
      
      <Typography
        sx={{
          color: backgroundVariant === 'dark' ? 'grey.300' : 'text.secondary',
          flex: 1,
        }}
      >
        {description}
      </Typography>
    </StyledCard>
  );
};

export default HeroFeatureCard;