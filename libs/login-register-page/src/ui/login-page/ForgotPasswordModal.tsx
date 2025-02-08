

import React, { useState } from 'react';
import { 
  Modal, 
  Box, 
  Typography, 
  Button, 
  TextField, 
  Stack 
} from '@mui/material';

interface ForgotPasswordModalProps {
  open: boolean;
  onClose: () => void;
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async () => {
    if (!email) {
      setMessage('Please enter your email address');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8080/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(email),
      });
  
      const result = await response.text();
  
      if (response.ok) {
        setMessage('Reset link has been sent to your email. Please check your inbox.');
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        setMessage(result);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error sending reset link');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 2
      }}>
        <Stack spacing={2}>
          <Typography variant="h6">Reset Password</Typography>
          <Typography>Enter your email to receive a password reset link</Typography>
          <TextField 
            label="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            disabled={isLoading}
          />
          <Button 
            variant="contained" 
            onClick={handleForgotPassword}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Reset Link'}
          </Button>
          {message && (
            <Typography 
              color={message.includes('Error') || message.includes('not found') ? 'error' : 'primary'}
            >
              {message}
            </Typography>
          )}
        </Stack>
      </Box>
    </Modal>
  );
};

export default ForgotPasswordModal;