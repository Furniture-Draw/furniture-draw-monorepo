import React from 'react';
import { Box, Typography, Rating, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import type { TestimonialCard as TestimonialCardType } from '../types';

interface TestimonialCardProps extends TestimonialCardType {
  variant?: 'light' | 'dark';
}

const StyledCard = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'variant',
})<{ variant?: 'light' | 'dark' }>(({ theme, variant }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: variant === 'dark' 
    ? theme.palette.grey[800] 
    : theme.palette.background.paper,
  transition: 'all 0.3s ease-in-out',
  height: '100%',
  boxShadow: theme.shadows[1],
  
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[4],
  },
}));

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  avatarSrc,
  name,
  title,
  company,
  content,
  rating,
  variant = 'light'
}) => {
  return (
    <StyledCard variant={variant}>
      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            color: variant === 'dark' ? 'grey.300' : 'text.secondary',
            fontStyle: 'italic',
            mb: 3,
            lineHeight: 1.6,
          }}
        >
          "{content}"
        </Typography>
        
        <Rating
          value={rating}
          readOnly
          sx={{
            '& .MuiRating-iconFilled': {
              color: variant === 'dark' ? 'primary.light' : 'primary.main',
            },
          }}
        />
      </Box>
      
      <Box sx={{ mt: 'auto', display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar
          src={avatarSrc}
          alt={name}
          sx={{ width: 48, height: 48 }}
        />
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              color: variant === 'dark' ? 'common.white' : 'text.primary',
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: variant === 'dark' ? 'grey.400' : 'text.secondary',
            }}
          >
            {title}, {company}
          </Typography>
        </Box>
      </Box>
    </StyledCard>
  );
};

export default TestimonialCard;