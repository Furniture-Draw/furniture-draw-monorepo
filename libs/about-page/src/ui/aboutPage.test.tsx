import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutPage from './aboutPage';
test('renders AboutPage successfully', () => {
  render(<AboutPage />);
  expect(screen.getByText('Our Story')).toBeInTheDocument();
});
