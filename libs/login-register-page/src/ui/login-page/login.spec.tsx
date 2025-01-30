import { render, screen, fireEvent } from '@testing-library/react';
import { LoginPage } from './index';
import '@testing-library/jest-dom';

const mockHandleSubmit = jest.fn();
const mockGoogleClick = jest.fn();
const mockFacebookClick = jest.fn();
const mockGithubClick = jest.fn();

describe('LoginPage Component', () => {
  it('renders successfully', () => {
    render(
      <LoginPage
        logo="/logo.png"
        onHandleSubmit={mockHandleSubmit}
        onGoogleClick={mockGoogleClick}
        onFacebookClick={mockFacebookClick}
        onGithubClick={mockGithubClick}
      />
    );

    expect(screen.getByText('Welcome Back')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('LOG IN')).toBeInTheDocument();
    expect(screen.getByText("Don't have an account?")).toBeInTheDocument();
  });

  it('displays validation errors when fields are empty', async () => {
    render(
      <LoginPage
        logo="/logo.png"
        onHandleSubmit={mockHandleSubmit}
        onGoogleClick={mockGoogleClick}
        onFacebookClick={mockFacebookClick}
        onGithubClick={mockGithubClick}
      />
    );

    fireEvent.click(screen.getByText('LOG IN'));

    expect(
      await screen.findByText('Email cannot be empty.')
    ).toBeInTheDocument();
    expect(
      await screen.findByText('Password cannot be empty.')
    ).toBeInTheDocument();
  });

  it('calls onHandleSubmit when valid form is submitted', async () => {
    render(
      <LoginPage
        logo="/logo.png"
        onHandleSubmit={mockHandleSubmit}
        onGoogleClick={mockGoogleClick}
        onFacebookClick={mockFacebookClick}
        onGithubClick={mockGithubClick}
      />
    );

    fireEvent.change(screen.getByLabelText('Email Address'), {
      target: { value: 'test@example.com' },
    });

    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByText('LOG IN'));

    expect(mockHandleSubmit).toHaveBeenCalled();
  });

  it('calls onGoogleClick when Google button is clicked', () => {
    render(
      <LoginPage
        logo="/logo.png"
        onHandleSubmit={mockHandleSubmit}
        onGoogleClick={mockGoogleClick}
        onFacebookClick={mockFacebookClick}
        onGithubClick={mockGithubClick}
      />
    );

    fireEvent.click(screen.getByText('Sign in with Google'));
    expect(mockGoogleClick).toHaveBeenCalled();
  });

  it('calls onFacebookClick when Facebook button is clicked', () => {
    render(
      <LoginPage
        logo="/logo.png"
        onHandleSubmit={mockHandleSubmit}
        onGoogleClick={mockGoogleClick}
        onFacebookClick={mockFacebookClick}
        onGithubClick={mockGithubClick}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /facebook/i }));
    expect(mockFacebookClick).toHaveBeenCalled();
  });

  it('calls onGithubClick when Github button is clicked', () => {
    render(
      <LoginPage
        logo="/logo.png"
        onHandleSubmit={mockHandleSubmit}
        onGoogleClick={mockGoogleClick}
        onFacebookClick={mockFacebookClick}
        onGithubClick={mockGithubClick}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /github/i }));
    expect(mockGithubClick).toHaveBeenCalled();
  });
});
