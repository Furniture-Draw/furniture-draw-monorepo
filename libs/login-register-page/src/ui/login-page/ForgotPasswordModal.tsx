import React, { useState } from 'react';
import { 
  Modal, 
  Box, 
  Typography, 
  Button, 
  TextField, 
  Stack 
} from '@mui/material';

// Props için bir arayüz tanımlayın
interface ForgotPasswordModalProps {
  open: boolean;
  onClose: () => void;
}

const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [step, setStep] = useState<'email' | 'reset-password' | 'success'>('email');

  
  const handleForgotPassword = async () => {
    try {
      const response = await fetch('http://localhost:8080/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(email),
      });
  
      const result = await response.text();
      console.log('Received token:', result); 
  
      if (response.ok) {
        setResetToken(result);
        setMessage('Reset link has been sent to your email.');
        setStep('reset-password');
      } else {
        console.error('Server response:', result);
        setMessage(result);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error generating reset token');
    }
  };
  
      


  const handleResetPassword = async () => {
    try {
      const response = await fetch('http://localhost:8080/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          token: resetToken,
          newPassword
        })
      });

      const result = await response.text();
      
      if (response.ok) {
        setMessage('Password reset successful');
        setStep('success');
      } else {
        setMessage(result);
      }
    } catch (error) {
      setMessage('Error resetting password');
    }
  };

  const renderContent = () => {
    switch(step) {
      case 'email':
        return (
          <Stack spacing={2}>
            <Typography>Enter your email to reset password</Typography>
            <TextField 
              label="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
            <Button 
              variant="contained" 
              onClick={handleForgotPassword}
            >
              Send Reset Token
            </Button>
          </Stack>
        );
      case 'reset-password':
        return (
          <Stack spacing={2}>
            <Typography>Enter new password</Typography>
            <TextField 
              label="New Password" 
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              fullWidth
            />
            <Button 
              variant="contained" 
              onClick={handleResetPassword}
            >
              Reset Password
            </Button>
          </Stack>
        );
      case 'success':
        return (
          <Typography>
            Password reset successful. You can now log in.
          </Typography>
        );
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
        {renderContent()}
        {message && (
          <Typography 
            color={message.includes('Error') || message.includes('No user found') ? 'error' : 'primary'}
            mt={2}
          >
            {message}
          </Typography>
        )}
      </Box>
    </Modal>
  );
};

export default ForgotPasswordModal;
