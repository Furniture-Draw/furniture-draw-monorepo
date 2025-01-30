'use client';

import React from 'react';
import { Navigation } from '@furniture-draw/navigation';
import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  CardContent,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Kartların tasarımı
const StyledCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius * 2,
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
    borderColor: theme.palette.primary.main,
  },
}));

// Planlara ait özellikler
const features = {
  free: ['Basic design tools', 'Up to 3 projects', 'Community support'],
  personal: [
    'Advanced tools',
    'Unlimited projects',
    'Priority support',
    'Cloud storage 50GB',
  ],
  organization: [
    'Enterprise security',
    'Team collaboration',
    'Custom templates',
    'Unlimited storage',
  ],
};

// Fiyatlandırma planları
const pricingPlans = [
  { title: 'Free', price: '0', features: features.free, isPopular: false },
  {
    title: 'Personal',
    price: '19.99',
    features: features.personal,
    isPopular: true,
  },
  {
    title: 'Organization',
    price: '49.99',
    features: features.organization,
    isPopular: false,
  },
];

// Fiyatlandırma tablosu
const PricingComparisonTable = () => {
  const featureComparison = [
    { feature: 'Basic Tools', free: true, personal: true, organization: true },
    {
      feature: 'Unlimited Projects',
      free: false,
      personal: true,
      organization: true,
    },
    {
      feature: 'Cloud Storage',
      free: false,
      personal: true,
      organization: true,
    },
    {
      feature: 'Team Collaboration',
      free: false,
      personal: false,
      organization: true,
    },
  ];

  return (
    <TableContainer component={Paper} sx={{ my: 5 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Features</TableCell>
            <TableCell align="center">Free</TableCell>
            <TableCell align="center">Personal</TableCell>
            <TableCell align="center">Organization</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {featureComparison.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.feature}</TableCell>
              <TableCell align="center">{row.free ? '✔' : '✖'}</TableCell>
              <TableCell align="center">{row.personal ? '✔' : '✖'}</TableCell>
              <TableCell align="center">
                {row.organization ? '✔' : '✖'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// Kullanıcı yorumları
const Testimonials = () => (
  <Box sx={{ mt: 8, textAlign: 'center' }}>
    <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
      What Our Users Say
    </Typography>
    <Stack spacing={4} alignItems="center">
      <Paper sx={{ p: 3, maxWidth: '600px' }}>
        <Typography variant="body1">
          "This tool changed my workflow!"
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 1, fontWeight: 600 }}>
          - John Doe
        </Typography>
      </Paper>
    </Stack>
  </Box>
);

// SSS (FAQs)
const FAQSection = () => (
  <Box sx={{ mt: 10 }}>
    <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
      FAQs
    </Typography>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Can I upgrade my plan later?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Yes, you can upgrade anytime from your account settings.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Box>
);

const PricingCardsPage = () => {
  const theme = useTheme();

  return (
    <>
      {/* Üst kısımda Navigation */}
      <Navigation />

      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.grey[100]} 0%, ${theme.palette.grey[200]} 100%)`,
          py: { xs: 8, md: 12 },
          minHeight: '100vh',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{ textAlign: 'center', fontWeight: 800, mb: 3 }}
          >
            Choose Your Plan
          </Typography>

          {/*
            Stack yerine Box + flex kullanıyoruz.
            flexWrap="wrap" -> Kartlar satır dolunca alta geçer
            alignItems="stretch" -> Yükseklik eşitle
            justifyContent="center" -> Ortala
            gap={4} -> Aralarda boşluk
          */}
          <Box
            display="flex"
            flexWrap="wrap"
            alignItems="stretch"
            justifyContent="center"
            gap={4}
          >
            {pricingPlans.map((plan) => (
              <Box
                key={plan.title}
                // Her kart, en az 280-300px ve en fazla 360-400px genişlikte olsun
                sx={{
                  flex: '1 1 300px',
                  maxWidth: '400px',
                  display: 'flex', // Kartı dikeyde esnetebilmek için
                }}
              >
                <StyledCard
                  sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}
                >
                  {plan.isPopular && (
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
                        boxShadow: theme.shadows[4],
                      }}
                    >
                      Popular
                    </Typography>
                  )}

                  <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      flexGrow: 1,
                    }}
                  >
                    <Box>
                      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                        {plan.title}
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{ fontWeight: 700, color: 'primary.main' }}
                      >
                        ${plan.price}/month
                      </Typography>
                    </Box>

                    <List sx={{ my: 4 }}>
                      {plan.features.map((feature, idx) => (
                        <ListItem key={idx} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircleIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>

                    <Button
                      variant={plan.isPopular ? 'contained' : 'outlined'}
                      color="primary"
                      fullWidth
                      sx={{ py: 1.5, fontWeight: 600 }}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </StyledCard>
              </Box>
            ))}
          </Box>

          {/* İsteğe bağlı kısımlar */}
          <PricingComparisonTable />
          <Testimonials />
          <FAQSection />
        </Container>
      </Box>
    </>
  );
};

export default PricingCardsPage;
