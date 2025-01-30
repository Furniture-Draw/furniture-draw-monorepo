import { render } from '@testing-library/react';
import { TestimonialSection } from './TestimonialSection';

describe('TestimonialSection', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<TestimonialSection />);
    expect(getByText('See what our trusted users Say')).toBeTruthy();
  });
});
