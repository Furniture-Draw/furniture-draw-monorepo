import React from 'react';
import './index.css';
import { Link, Stack } from '@mui/material';
import { Facebook, Google } from '@mui/icons-material';

export const SocialMediaConnect = () => {
  return (
    <Stack spacing={4} className="container-social-connect">
      <Link href="https://www.facebook.com">
        <Facebook
          sx={{
            width: 40,
            height: 40,
          }}
        />
      </Link>
      <Google
        sx={{
          width: 40,
          height: 40,
        }}
      />
    </Stack>
  );
};
