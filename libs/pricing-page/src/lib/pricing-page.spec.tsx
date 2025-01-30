import { render } from '@testing-library/react';

import PricingPage from './pricing-page';

describe('PricingPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PricingPage />);
    expect(baseElement).toBeTruthy();
  });
});
