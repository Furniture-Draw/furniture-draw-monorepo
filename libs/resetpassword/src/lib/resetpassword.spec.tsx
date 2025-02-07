import { render } from '@testing-library/react';

import Resetpassword from './resetpassword';

describe('Resetpassword', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Resetpassword />);
    expect(baseElement).toBeTruthy();
  });
});
