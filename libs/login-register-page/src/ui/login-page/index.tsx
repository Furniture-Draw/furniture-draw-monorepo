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
import { Navigation } from '@furniture-draw/navigation';
import { useRouter } from 'next/navigation';
import './style.css';

export const LoginPage = ({
  logo,
  onHandleSubmit,
  onGoogleClick,
  onFacebookClick,
  onGithubClick,
}: LoginPageProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>();

  const router = useRouter();

  return (
    <div className="page-container">
      <div className="navigation-container">
        <Navigation />
      </div>

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
  );
};
