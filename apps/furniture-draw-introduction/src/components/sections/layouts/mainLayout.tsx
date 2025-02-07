import '../styles/global.css';
import { Footer } from '@furniture-draw/footer';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

const MainLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const excludedRoutes = [
    '/login',
    '/register',
    '/resetpassword',
    '/forgot-password',
  ];

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        {!excludedRoutes.includes(pathname) && <Footer />}
      </body>
    </html>
  );
};

export default MainLayout;
