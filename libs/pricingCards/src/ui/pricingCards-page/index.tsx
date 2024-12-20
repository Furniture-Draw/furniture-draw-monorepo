import React from 'react';
import { Card,Container, Box, CardActions, CardContent, Button, Typography, Stack } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import {CardContentTemplateProps} from './types';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const CardContentTemplate: React.FC<CardContentTemplateProps>= ({ title, description, example }) => (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        {title}
      </Typography>
      <Typography variant="h5" component="div">
        {example}
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
      <Typography variant="body2">
        {description}
        <br />
        {'"a benevolent smile"'}
      </Typography>
   
    </CardContent>
    <CardActions>
      <Button size="small" variant="outlined">Get Started</Button>
    </CardActions>
  </React.Fragment>
);

export const PricingCardsPage = () => {
  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Box sx={{ p: 3 }}>
      {/* Genel Başlık */}
      <Typography variant="h4" gutterBottom align="center">
        Choose Your Plan
      </Typography>
      <Typography>
      Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has their right plan for you.
      </Typography>

      {/* Kartlar */}
      <Stack spacing={3} direction="row" justifyContent="center">
  <Box sx={{ width: '100%', maxWidth: 360 }}>
    <Card variant="outlined">
      <CardContentTemplate
        title="Free"
        example="$0"
        description="Well meaning and kindly."
      />
    </Card>
  </Box>
  <Box sx={{ width: '100%', maxWidth: 360 }}>
    <Card variant="outlined">
      <CardContentTemplate
        title="Personal"
        example="$19.99"
        description="The quality of being honest and having strong moral principles."
      />
    </Card>
  </Box>
  <Box sx={{ width: '100%', maxWidth: 360 }}>
    <Card variant="outlined">
      <CardContentTemplate
        title="Organization"
        example="$49.99"
        description="Relating to a job that requires special skills or training."
      />
    </Card>
  </Box>
</Stack>

    </Box>
    
    </Container> );
};

export default PricingCardsPage;
