import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // For toBeInTheDocument()
import { useRouter } from 'next/navigation';
import HeroComponent from './hero';

// Define minimal router type for testing
interface MockRouterInstance {
  push: (url: string) => void;
}

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('HeroComponent', () => {
  it('should render title and description', () => {
    render(<HeroComponent />);

    expect(screen.getByText('Modern Furniture Design')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Create and customize your perfect living space with our innovative furniture design platform.'
      )
    ).toBeInTheDocument();
  });

  it('should navigate to the correct URLs when buttons are clicked', () => {
    const push = jest.fn();
    // Convert useRouter to unknown first, then cast to a jest.Mock with the desired type.
    (useRouter as unknown as jest.Mock<MockRouterInstance>).mockReturnValue({
      push,
    });

    render(<HeroComponent />);

    const getStartedButton = screen.getByText('Get Started');
    const learnMoreButton = screen.getByText('Learn More');

    fireEvent.click(getStartedButton);
    expect(push).toHaveBeenCalledWith('https://prod.mobilyaplan.app/login');

    fireEvent.click(learnMoreButton);
    expect(push).toHaveBeenCalledWith('http://localhost:3000/about');
  });
});
