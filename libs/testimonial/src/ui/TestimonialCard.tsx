import React from 'react';
import { Box, Typography, Rating, Avatar } from '@mui/material';
import { TestimonialCardProps } from '../types';

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  avatarSrc,
  name,
  title,
  company,
  content,
  rating,
  sx,
  isWhiteCard = false,
  ...props
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: isWhiteCard ? 'white' : '#4A90E2',
        borderRadius: '20px',
        p: 4,
        color: isWhiteCard ? 'text.primary' : 'white',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
        },
        ...sx,
      }}
      {...props}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mb: 3,
        }}
      >
        <Avatar
          src={avatarSrc}
          alt={name}
          sx={{
            width: 48,
            height: 48,
            border: `2px solid ${isWhiteCard ? '#4A90E2' : 'white'}`,
          }}
        />
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              color: isWhiteCard ? 'text.primary' : 'white',
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: isWhiteCard
                ? 'text.secondary'
                : 'rgba(255, 255, 255, 0.8)',
            }}
          >
            {title}, {company}
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{
          color: isWhiteCard ? 'text.primary' : 'white',
          mb: 3,
          lineHeight: 1.6,
          flex: 1,
        }}
      >
        "{content}"
      </Typography>

      <Rating
        value={rating}
        readOnly
        sx={{
          '& .MuiRating-iconFilled': {
            color: isWhiteCard ? '#FFE492' : '#FFE492',
          },
          '& .MuiRating-iconEmpty': {
            color: isWhiteCard
              ? 'rgba(74, 144, 226, 0.3)'
              : 'rgba(255, 255, 255, 0.3)',
          },
        }}
      />
    </Box>
  );
};

export default TestimonialCard;
