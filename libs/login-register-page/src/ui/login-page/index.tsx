'use client';
import { useForm } from 'react-hook-form';
import { LoginFormInput, LoginPageProps } from './types';
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Stack,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GithubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
<<<<<<< Updated upstream
import { Navigation } from '@furniture-draw/navigation';
import { useRouter } from 'next/navigation';
import './style.css';

export const LoginPage = ({
  logo,
  onHandleSubmit,
  onGoogleClick,
=======
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';
export const AUTH_ENDPOINTS = {
  login: `${API_BASE_URL}/auth/login`,
};

export const LoginPage = ({
  logo,
>>>>>>> Stashed changes
  onFacebookClick,
  onGithubClick,
}: LoginPageProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>();

<<<<<<< Updated upstream
  const router = useRouter();

  return (
    <div className="page-container">
      <div className="navigation-container">
        <Navigation />
      </div>
=======
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [loginMessage, setLoginMessage] = useState<string | null>(null);

  const handleFormSubmit = async (data: LoginFormInput) => {
    setLoading(true);
    try {
      const response = await fetch(AUTH_ENDPOINTS.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
  
      const result = await response.text(); 
  
      if (response.status === 401) {
        setLoginMessage('Invalid email or password.');
        return;
      }
  
      if (!response.ok) {
        throw new Error('Login failed.');
      }
  
      
      if (result === "Login successful") {
        setLoginMessage('Login successful');
        alert('Login successful');
        router.push('http://localhost:3000');
      } else {
        setLoginMessage(result); 
      }
  
    } catch (error) {
      console.error('Login error:', error);
      setLoginMessage('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Stack
        component="form"
        onSubmit={handleSubmit(handleFormSubmit)} // Use handleFormSubmit directly
        spacing={4}
        sx={{
          minWidth: 350,
        }}
        alignItems="center"
      >
        <img src={logo} alt="company logo" style={{ maxWidth: 300 }} />
>>>>>>> Stashed changes

      <Container className="login-content">
        <Box className="login-card">
          <Stack
            component="form"
            onSubmit={handleSubmit(onHandleSubmit)}
            spacing={4}
            alignItems="center"
          >
            <img src={logo} alt="Company Logo" className="login-logo" />
            <Typography variant="h5" className="login-title">
              Welcome Back
            </Typography>
            <Stack spacing={2} width={'100%'}>
              <FormControl>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  id="email"
                  {...register('email', { required: 'Email cannot be empty.' })}
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
                  type="password"
                  {...register('password', {
                    required: 'Password cannot be empty.',
                  })}
                  error={!!errors.password?.message}
                />
                {errors.password && (
                  <FormHelperText error>
                    {errors.password.message}
                  </FormHelperText>
                )}
              </FormControl>
            </Stack>

            <Button
              fullWidth
              variant="contained"
              className="login-button"
              type="submit"
            >
              LOG IN
            </Button>

            {onGoogleClick && (
              <Button
                fullWidth
                variant="outlined"
                className="google-login-button"
                startIcon={<GoogleIcon />}
                onClick={onGoogleClick}
              >
                Sign in with Google
              </Button>
            )}

            <Stack
              direction="row"
              justifyContent="center"
              spacing={2}
              className="social-buttons"
            >
              {onFacebookClick && (
                <IconButton onClick={onFacebookClick} className="social-icon">
                  <FacebookIcon />
                </IconButton>
              )}
              {onGithubClick && (
                <IconButton onClick={onGithubClick} className="social-icon">
                  <GithubIcon />
                </IconButton>
              )}
            </Stack>

<<<<<<< Updated upstream
            <Typography variant="body2" className="register-text">
              Don't have an account?
              <Button
                className="register-button"
                onClick={() => router.push('/register')}
              >
                Register
              </Button>
            </Typography>
          </Stack>
        </Box>
      </Container>
    </div>
=======
        {loginMessage && <Typography variant="body1">{loginMessage}</Typography>} {/* Display login message */}

        {(onGoogleClick || onFacebookClick || onGithubClick) && (
          <Typography textAlign="center" variant="body1">
            yada
          </Typography>
        )}

        <Stack
          direction="row"
          justifyContent="space-around"
          divider={<Divider orientation="vertical" flexItem />}
        >
          {onGoogleClick && (
            <IconButton
              onClick={onGoogleClick}
              sx={{ maxWidth: 60 }}
              aria-label="google ikon"
            >
              <GoogleIcon />
            </IconButton>
          )}
          {onFacebookClick && (
            <IconButton
              onClick={onFacebookClick}
              sx={{ maxWidth: 60 }}
              aria-label="facebook ikon"
            >
              <FacebookIcon />
            </IconButton>
          )}
          {onGithubClick && (
            <IconButton
              onClick={onGithubClick}
              sx={{ maxWidth: 60 }}
              aria-label="github ikon"
            >
              <GithubIcon />
            </IconButton>
          )}
        </Stack>
      </Stack>
    </Container>
>>>>>>> Stashed changes
  );
};
