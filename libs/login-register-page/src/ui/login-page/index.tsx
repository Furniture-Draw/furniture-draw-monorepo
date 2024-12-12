'use client';
import { useForm } from 'react-hook-form';
import { LoginFormInput, LoginPageProps } from './types';
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

export const LoginPage = ({
  logo,
  onHandleSubmit,
  onFacebookClick,
  onGithubClick,
  onGoogleClick,
}: LoginPageProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>();

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
        onSubmit={handleSubmit(onHandleSubmit)}
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
  );
};
