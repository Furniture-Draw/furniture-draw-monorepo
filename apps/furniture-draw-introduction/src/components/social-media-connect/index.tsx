import React from 'react';
import './index.css';
import { Link, Stack } from '@mui/material';
import { Facebook, Google } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export const SocialMediaConnect = () => {
  return (
    <Stack spacing={2} className="container-social-connect">
      <Link href="https://www.whatsapp.com">
        <WhatsAppIcon
          sx={{
            width: 40,
            height: 40,
          }}
        />
      </Link>
      <Link href="https://www.facebook.com">
        <Facebook
          sx={{
            width: 40,
            height: 40,
          }}
        />
      </Link>

      <Link href="https://www.instagram.com">
        <InstagramIcon
          sx={{
            width: 40,
            height: 40,
          }}
        />
      </Link>
      <Link href="https://www.google.com">
        <Google
          sx={{
            width: 40,
            height: 40,
          }}
        />
      </Link>
    </Stack>
  );
};
