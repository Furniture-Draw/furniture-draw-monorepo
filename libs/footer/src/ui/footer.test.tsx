import { render, screen } from '@testing-library/react';
import Footer from './footer';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    render(<Footer />);
    expect(screen.getByText(/©/i)).toBeInTheDocument(); // Footer içinde © işareti var mı kontrol et
  });
});
