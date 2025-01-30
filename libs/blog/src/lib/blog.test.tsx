import { render, screen } from '@testing-library/react';
import Blog from './Blog';
import '@testing-library/jest-dom';

describe('Blog Component', () => {
  it('should render at least one blog title', () => {
    render(<Blog />);
    const titles = screen.getAllByText(
      /The Impact of Technology on the Workplace/i
    );
    expect(titles.length).toBeGreaterThan(0);
  });
});
