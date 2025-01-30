import { render, screen } from '@testing-library/react';
import Features from './features';
import '@testing-library/jest-dom';

describe('Features Component', () => {
  it('renders successfully', () => {
    render(<Features />);
    expect(screen.getByText('DOWNLOADING PROGRAM')).toBeInTheDocument();
  });

  it('renders all steps', () => {
    render(<Features />);
    const steps = [
      'Login',
      'Click Start Drawing',
      'Sign in with Google',
      'choose an Account',
      'Register',
      'Start Project',
      'Create Project',
      'Start Drawing',
    ];

    steps.forEach((step) => {
      expect(screen.getByText(step)).toBeInTheDocument();
    });
  });

  it('renders step images', () => {
    render(<Features />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0); // En az bir görsel yüklenmeli
  });

  it('renders inline images inside descriptions', () => {
    render(<Features />);
    const inlineImages = screen.getAllByAltText('Inline Image');
    expect(inlineImages.length).toBeGreaterThan(0);
  });
});
