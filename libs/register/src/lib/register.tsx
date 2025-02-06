import { useForm } from 'react-hook-form';
import { RegisterFormInput, RegisterPageProps } from './types';
import {
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  Input,
  InputLabel,
  Stack,
  Typography,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GithubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility'; 
import VisibilityOff from '@mui/icons-material/VisibilityOff'; 
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';
export const AUTH_ENDPOINTS = {
  register: `${API_BASE_URL}/auth/register`,
  googleRegister: `${API_BASE_URL}/auth/google-register`,
};

export const Register = ({
  onHandleSubmit,
  onFacebookClick,
  onGithubClick,
}: RegisterPageProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInput>();

  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = async (data: RegisterFormInput) => {
    if (!isChecked) {
      alert('Lütfen gizlilik politikasını kabul edin.');
      return;
    }

    try {
      const response = await fetch(AUTH_ENDPOINTS.register, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password,
        }),
      });

      if (response.status === 409) {
        alert('Email already registered.');
        return;
      }

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const result = await response.text();
      console.log('Registration successful:', result);
      alert('Registration successful');
      onHandleSubmit(data);
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  const handleGoogleSuccess = async (response: any) => {
    const credentialResponse = response.credential;
    try {
      const userInfo = JSON.parse(atob(credentialResponse.split('.')[1]));
      const userData = {
        name: userInfo.name,
        email: userInfo.email,
      };

      const res = await fetch(AUTH_ENDPOINTS.googleRegister, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (res.ok) {
        alert('Google ile kayıt başarılı!');
      } else {
        alert('Google ile kayıt başarısız.');
      }
    } catch (error) {
      console.error('Google Login Error:', error);
    }
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack
          component="form"
          onSubmit={handleSubmit(handleFormSubmit)}
          spacing={4}
          sx={{ minWidth: 350 }}
          alignItems="center"
        >
          <Typography variant="h5">Create Account</Typography>
          <Stack spacing={2} width={'100%'}>
            <FormControl>
              <InputLabel htmlFor="username">Username</InputLabel>
              <Input
                id="username"
                {...register('username', { required: 'Username boş olamaz.' })}
                error={!!errors.username?.message}
              />
              {errors.username && (
                <FormHelperText error>{errors.username.message}</FormHelperText>
              )}
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="email">Email address</InputLabel>
              <Input
                id="email"
                {...register('email', {
                  required: 'Email boş olamaz.',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                error={!!errors.email?.message}
              />
              {errors.email && (
                <FormHelperText error>{errors.email.message}</FormHelperText>
              )}
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                {...register('password', { required: 'Şifre boş olamaz.' })}
                error={!!errors.password?.message}
                endAdornment={
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                }
              />
              {errors.password && (
                <FormHelperText error>{errors.password.message}</FormHelperText>
              )}
            </FormControl>
          </Stack>
          <FormControlLabel
            control={
              <Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
            }
            label="Gizlilik politikasını kabul ediyorum"
          />
          <Button fullWidth variant="contained" type="submit">
            Kayıt Ol
          </Button>
          <Typography textAlign="center" variant="body1">
            Yada
          </Typography>
          <GoogleLogin 
            onSuccess={handleGoogleSuccess} 
            onError={() => alert('Google Login Failed')} 
            locale="en" 
          />

        </Stack>
      </Container>
    </GoogleOAuthProvider>
  );
};
