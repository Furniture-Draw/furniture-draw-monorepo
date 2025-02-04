// TestimonialSection.test.tsx
import { render, screen } from '@testing-library/react';
import { TestimonialCards } from './TestimonialSection';
import '@testing-library/jest-dom';

describe('TestimonialSection', () => {
  it('renders without crashing', () => {
    render(<TestimonialCards />);

    // Tüm level 2 heading öğelerini alıyoruz.
    const headings = screen.getAllByRole('heading', { level: 2 });

    // Aradığımız metni içeren heading öğesini buluyoruz.
    const title = headings.find((heading) =>
      /see what our trusted users say/i.test(heading.textContent || '')
    );

    expect(title).toBeDefined();
    expect(title).toBeInTheDocument();
  });

  it('should display at least one testimonial', () => {
    render(<TestimonialCards />);

    // Testimonial kartlarından birinde "jessie owner" metni bulunmalı.
    const testimonialUser = screen.getByText(/jessie owner/i);
    expect(testimonialUser).toBeInTheDocument();
  });
});
