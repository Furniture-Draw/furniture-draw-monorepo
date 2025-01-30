import { render, screen, fireEvent } from '@testing-library/react';
import { Register } from './register';
import '@testing-library/jest-dom';

const mockHandleSubmit = jest.fn();
const mockGoogleClick = jest.fn();
const mockFacebookClick = jest.fn();
const mockGithubClick = jest.fn();

describe('Register Component', () => {
  it('renders successfully', () => {
    render(
      <Register
        onHandleSubmit={mockHandleSubmit}
        onGoogleClick={mockGoogleClick}
        onFacebookClick={mockFacebookClick}
        onGithubClick={mockGithubClick}
      />
    );

    expect(screen.getByText('Create Account')).toBeInTheDocument();
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(
      screen.getByText('Gizlilik politikasını kabul ediyorum')
    ).toBeInTheDocument();
    expect(screen.getByText('Kayıt Ol')).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    render(<Register onHandleSubmit={mockHandleSubmit} />);

    fireEvent.click(screen.getByText('Kayıt Ol'));

    expect(await screen.findByText('Username boş olamaz.')).toBeInTheDocument();
    expect(await screen.findByText('Email boş olamaz.')).toBeInTheDocument();
    expect(await screen.findByText('Şifre boş olamaz.')).toBeInTheDocument();
  });

  it('validates email format', async () => {
    render(<Register onHandleSubmit={mockHandleSubmit} />);

    fireEvent.input(screen.getByLabelText('Email address'), {
      target: { value: 'invalid-email' },
    });

    fireEvent.click(screen.getByText('Kayıt Ol'));

    expect(
      await screen.findByText('invalid email address')
    ).toBeInTheDocument();
  });

  it('requires privacy policy agreement', async () => {
    render(<Register onHandleSubmit={mockHandleSubmit} />);

    fireEvent.click(screen.getByText('Kayıt Ol'));

    expect(
      await screen.findByText('Lütfen gizlilik politikasını kabul edin.')
    ).toBeInTheDocument();
  });

  it('toggles password visibility', () => {
    render(<Register onHandleSubmit={mockHandleSubmit} />);

    const passwordInput = screen.getByLabelText('Password');
    const toggleButton = screen.getByLabelText('toggle password visibility');

    expect(passwordInput).toHaveAttribute('type', 'password');

    fireEvent.click(toggleButton);

    expect(passwordInput).toHaveAttribute('type', 'text');

    fireEvent.click(toggleButton);

    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('calls Google login handler', () => {
    render(
      <Register
        onHandleSubmit={mockHandleSubmit}
        onGoogleClick={mockGoogleClick}
      />
    );
    fireEvent.click(screen.getByLabelText('google ikon'));
    expect(mockGoogleClick).toHaveBeenCalled();
  });

  it('calls Facebook login handler', () => {
    render(
      <Register
        onHandleSubmit={mockHandleSubmit}
        onFacebookClick={mockFacebookClick}
      />
    );
    fireEvent.click(screen.getByLabelText('facebook ikon'));
    expect(mockFacebookClick).toHaveBeenCalled();
  });

  it('calls Github login handler', () => {
    render(
      <Register
        onHandleSubmit={mockHandleSubmit}
        onGithubClick={mockGithubClick}
      />
    );
    fireEvent.click(screen.getByLabelText('github ikon'));
    expect(mockGithubClick).toHaveBeenCalled();
  });

  it('submits form successfully when all fields are valid', async () => {
    render(<Register onHandleSubmit={mockHandleSubmit} />);

    fireEvent.input(screen.getByLabelText('Username'), {
      target: { value: 'testuser' },
    });
    fireEvent.input(screen.getByLabelText('Email address'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.input(screen.getByLabelText('Password'), {
      target: { value: 'password123' },
    });
    fireEvent.click(screen.getByText('Gizlilik politikasını kabul ediyorum'));

    fireEvent.click(screen.getByText('Kayıt Ol'));

    expect(mockHandleSubmit).toHaveBeenCalledWith({
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
    });
  });
});
