'use client';

import React from 'react';
import {
  Card,
  Container,
  Box,
  CardContent,
  Button,
  Typography,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { CardContentTemplateProps } from './types';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
    borderColor: theme.palette.primary.main,
    '&::before': {
      transform: 'translateY(0)',
    },
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: theme.palette.primary.main,
    transform: 'translateY(-100%)',
    transition: 'transform 0.3s ease-in-out',
  },
}));

const PriceTypography = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(1),
  display: 'flex',
  alignItems: 'baseline',
  '& .currency': {
    fontSize: '1.5rem',
    marginRight: theme.spacing(0.5),
  },
  '& .period': {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(1),
    fontWeight: 400,
  },
}));

const features = {
  free: [
    'Basic furniture design tools',
    'Up to 3 projects',
    'Community support',
    'Basic templates',
  ],
  personal: [
    'Advanced design tools',
    'Unlimited projects',
    'Priority support',
    'Premium templates',
    'Cloud storage 50GB',
    'Export in multiple formats',
  ],
  organization: [
    'Enterprise-grade security',
    'Team collaboration tools',
    'Custom templates',
    'Dedicated support',
    'Unlimited storage',
    'API access',
    'Advanced analytics',
  ],
};

const CardContentTemplate: React.FC<CardContentTemplateProps> = ({
  title,
  price,
  period = 'month',
  features,
  isPopular,
}) => (
  <CardContent sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
    {isPopular && (
      <Typography
        sx={{
          position: 'absolute',
          top: 20,
          right: -35,
          transform: 'rotate(45deg)',
          backgroundColor: 'primary.main',
          color: 'white',
          py: 0.5,
          px: 4,
          fontSize: '0.875rem',
          fontWeight: 500,
        }}
      >
        Popular
      </Typography>
    )}

    <Typography variant="h5" component="div" sx={{ mb: 2, fontWeight: 600 }}>
      {title}
    </Typography>

    <PriceTypography variant="h3">
      <span className="currency">$</span>
      {price}
      <span className="period">/{period}</span>
    </PriceTypography>

    <List sx={{ mb: 4, flex: 1 }}>
      {features.map((feature, index) => (
        <ListItem key={index} sx={{ px: 0 }}>
          <ListItemIcon sx={{ minWidth: 36 }}>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={feature} />
        </ListItem>
      ))}
    </List>

    <Button
      variant={isPopular ? 'contained' : 'outlined'}
      color="primary"
      size="large"
      fullWidth
      sx={{
        py: 1.5,
        textTransform: 'none',
        fontWeight: 600,
        fontSize: '1rem',
        borderRadius: 2,
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: (theme) => (isPopular ? theme.shadows[4] : 'none'),
        },
        transition: 'all 0.2s ease-in-out',
      }}
    >
      Get Started
    </Button>
  </CardContent>
);

export const PricingCardsPage = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: '#212529',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Choose Your Plan
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
    <img src="/images/Element2.svg" alt="Decorative Element" width="318.75" height="30.11" />
</Box>
<Typography
            variant="h6"
            color="text.secondary"
            sx={{
              maxWidth: 'md',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, we have the right plan for you.
          </Typography>
        </Box>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 4, md: 4 }}
          alignItems="stretch"
          justifyContent="center"
        >
          <Box sx={{ width: { xs: '100%', md: '33.33%' } }}>
            <StyledCard>
              <CardContentTemplate
                title="Free"
                price="0"
                features={features.free}
                isPopular={false}
              />
            </StyledCard>
          </Box>

          <Box sx={{ width: { xs: '100%', md: '33.33%' } }}>
            <StyledCard>
              <CardContentTemplate
                title="Personal"
                price="19.99"
                features={features.personal}
                isPopular={true}
              />
            </StyledCard>
          </Box>

          <Box sx={{ width: { xs: '100%', md: '33.33%' } }}>
            <StyledCard>
              <CardContentTemplate
                title="Organization"
                price="49.99"
                features={features.organization}
                isPopular={false}
              />
            </StyledCard>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default PricingCardsPage;
