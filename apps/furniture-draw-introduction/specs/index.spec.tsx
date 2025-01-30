import { render } from '@testing-library/react';
import Page from '../src/app/page';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

// Router Mock'unu Yükle
jest.mock('next/navigation', () => require('next-router-mock'));

describe('Page', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouterProvider>
        <Page />
      </MemoryRouterProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
