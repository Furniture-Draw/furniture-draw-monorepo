import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { FeatureCard } from '../types';
import HeroFeatureCard from './HeroFeatureCard';

interface HeroFeatureGridProps {
  features: FeatureCard[];
  backgroundVariant?: 'light' | 'dark';
  columns?: 2 | 3 | 4;
}

const GridContainer = styled(Box, {
  shouldForwardProp: (prop) => !['columns'].includes(prop as string),
})<{ columns?: number }>(({ theme, columns = 4 }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${columns}, 1fr)`,
  flexWrap: 'wrap',
  gap: theme.spacing(4),
  width: '100%',
  
  '& > *': {
    flexBasis: `calc(${100 / columns}% - ${theme.spacing(4)})`,
    flexGrow: 0,
    flexShrink: 0,
  },

  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: `repeat(${Math.min(columns, 3)}, 1fr)`,
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: `repeat(${Math.min(columns, 2)}, 1fr)`,
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const HeroFeatureGrid: React.FC<HeroFeatureGridProps> = ({
  features,
  backgroundVariant = 'light',
  columns = 4,
}) => {
  return (
    <GridContainer columns={columns}>
      {features.map((feature, index) => (
        <HeroFeatureCard
          key={index}
          {...feature}
          backgroundVariant={backgroundVariant}
        />
      ))}
    </GridContainer>
  );
};

export default HeroFeatureGrid;