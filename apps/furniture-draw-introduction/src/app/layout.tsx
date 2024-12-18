import './global.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Navigation } from '@furniture-draw/navigation';

export const metadata = {
  title: 'Welcome to furniture-draw-introduction',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
    children: React.ReactNode;
  
}) {
  return (
    <html lang="en">
      <body>
        
        {children}</body>
    </html>
  );
}
