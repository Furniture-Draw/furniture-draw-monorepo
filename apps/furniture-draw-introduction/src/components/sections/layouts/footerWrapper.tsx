'use client';

import { usePathname } from 'next/navigation';
import { Footer } from '@furniture-draw/footer';

const FooterWrapper = () => {
  const pathname = usePathname();
  const excludedRoutes = ['/login', '/register'];

  return !excludedRoutes.includes(pathname) ? <Footer /> : null;
};

export default FooterWrapper;
