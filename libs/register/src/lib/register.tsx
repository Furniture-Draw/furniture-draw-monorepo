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

export const Register = ({
  onHandleSubmit,
  onFacebookClick,
  onGithubClick,
  onGoogleClick,
}: RegisterPageProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInput>();

  
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 

  
  const handleFormSubmit = (data: RegisterFormInput) => {
    if (!isChecked) {
      alert('Lütfen gizlilik politikasını kabul edin.');
      return;
    }
    onHandleSubmit(data);
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
        <Typography variant="h5">Create Account</Typography>
        <Stack spacing={2} width={'100%'}>
          
          <FormControl>
            <InputLabel htmlFor="my-input">Username</InputLabel>
            <Input
              id="my-input"
              aria-describedby="my-helper-text"
              {...register('username', {
                required: 'Username boş olamaz.',
              })}
              error={!!errors.username?.message}
            />
            {errors.username && (
              <FormHelperText error id="my-helper-text">
                {errors.username.message}
              </FormHelperText>
            )}
          </FormControl>

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
              type={showPassword ? 'text' : 'password'} 
              aria-describedby="my-helper-text"
              {...register('password', {
                required: 'Şifre boş olamaz.',
              })}
              error={!!errors.password?.message}
              endAdornment={
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)} 
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
            />
            {errors.password && (
              <FormHelperText error id="my-helper-text">
                {errors.password.message}
              </FormHelperText>
            )}
          </FormControl>
        </Stack>

        <FormControlLabel
          control={
            <Checkbox
              id="my-provicy"
              checked={isChecked}
            
              onChange={(e) => setIsChecked(e.target.checked)}
              
            />
          }
          label="Gizlilik politikasını kabul ediyorum"
        />
        {errors.isPrivacyPolicyAccepted && (
          <FormHelperText error>
            {errors.isPrivacyPolicyAccepted.message}
          </FormHelperText>
        )}

        <Button fullWidth variant="contained" type="submit">
          Kayıt Ol
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
