'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import { EXCULDE_PATHS } from './constants';
import { Navigation } from '@furniture-draw/navigation';

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const currentPathName = usePathname();
  const isInExcludedPaths = EXCULDE_PATHS.find(
    (path) => path === currentPathName
  );

  return (
    <div>
      {!isInExcludedPaths && <Navigation />}
      {children}
    </div>
  );
};
