import { render, screen } from '@testing-library/react';
import PricingCardsPage from './index';
import '@testing-library/jest-dom';

describe('PricingCardsPage Component', () => {
  it('renders successfully', () => {
    render(<PricingCardsPage />);

    expect(screen.getByText('Choose Your Plan')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Whether you want to get organized, keep your personal life on track, or boost workplace productivity, we have the right plan for you.'
      )
    ).toBeInTheDocument();
  });

  it('renders all pricing cards correctly', () => {
    render(<PricingCardsPage />);

    expect(screen.getByText('Free')).toBeInTheDocument();
    expect(screen.getByText('Personal')).toBeInTheDocument();
    expect(screen.getByText('Organization')).toBeInTheDocument();

    expect(screen.getByText('$0 /month')).toBeInTheDocument();
    expect(screen.getByText('$19.99 /month')).toBeInTheDocument();
    expect(screen.getByText('$49.99 /month')).toBeInTheDocument();
  });

  it('marks the correct plan as popular', () => {
    render(<PricingCardsPage />);

    const popularBadge = screen.getByText('Popular');
    expect(popularBadge).toBeInTheDocument();
    expect(popularBadge).toHaveStyle({
      position: 'absolute',
      transform: 'rotate(45deg)',
    });

    expect(screen.getByText('Personal')).toBeInTheDocument();
  });

  it('renders features correctly', () => {
    render(<PricingCardsPage />);

    expect(
      screen.getByText('Basic furniture design tools')
    ).toBeInTheDocument();
    expect(screen.getByText('Advanced design tools')).toBeInTheDocument();
    expect(screen.getByText('Enterprise-grade security')).toBeInTheDocument();
  });

  it('renders Get Started buttons for each plan', () => {
    render(<PricingCardsPage />);

    const buttons = screen.getAllByText('Get Started');
    expect(buttons.length).toBe(3);
  });
});
