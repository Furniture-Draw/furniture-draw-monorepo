'use client';
import { useForm } from 'react-hook-form';
import { LoginFormInput, LoginPageProps } from './types';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Button,
  Container,
  Divider,
  FormControl,
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
import ForgotPasswordModal from './ForgotPasswordModal'; // ForgotPasswordModal'ı içe aktar

export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';
export const AUTH_ENDPOINTS = {
  login: `${API_BASE_URL}/auth/login`,
};

export const LoginPage = ({
  logo,
  onFacebookClick,
  onGithubClick,
  onGoogleClick,
}: LoginPageProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>();

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [loginMessage, setLoginMessage] = useState<string | null>(null);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false); // Modal kontrolü

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

      if (result === 'Login successful') {
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
        onSubmit={handleSubmit(handleFormSubmit)}
        spacing={4}
        sx={{
          minWidth: 350,
        }}
        alignItems="center"
      >
        <img src={logo} alt="company logo" style={{ maxWidth: 300 }} />

        <Typography variant="h5">Login</Typography>
        <Stack spacing={2} width={'100%'}>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              {...register('email', {
                required: 'Email boş olamaz.',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
                },
              })}
              error={!!errors.email?.message}
            />
            {errors.email && (
              <FormHelperText error id="my-helper-text">
                {errors.email.message}
              </FormHelperText>
            )}
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="my-password">Password</InputLabel>
            <Input
              id="my-password"
              type="password"
              aria-describedby="my-helper-text"
              {...register('password', {
                required: 'Şifre boş olamaz.',
              })}
              error={!!errors.password?.message}
            />
            {errors.password && (
              <FormHelperText error id="my-helper-text">
                {errors.password.message}
              </FormHelperText>
            )}
          </FormControl>
        </Stack>

        <Button fullWidth variant="contained" type="submit">
          Giriş yap
        </Button>

        {loginMessage && <Typography variant="body1">{loginMessage}</Typography>}

        <Button 
          variant="text" 
          onClick={() => setForgotPasswordOpen(true)} 
          sx={{ textTransform: 'none', fontSize: '0.9rem' }}
        >
          Şifremi unuttum
        </Button>

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

        <Typography variant="body2">
          Don't have an account?{' '}
          <Button variant="text" onClick={() => router.push('http://localhost:3000/register')}>
            Kayıt olun
          </Button>
        </Typography>
      </Stack>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal 
        open={forgotPasswordOpen} 
        onClose={() => setForgotPasswordOpen(false)} 
      />
    </Container>
  );
};
