'use client';

import { Hero } from './index';
import { useRouter } from 'next/navigation';

export default function HeroComponent() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('https://prod.mobilyaplan.app/login');
  };

  const handleLearnMore = () => {
    router.push('http://localhost:3000/about');
  };

  return (
    <main>
      <Hero
        title="Modern Furniture Design"
        description="Create and customize your perfect living space with our innovative furniture design platform."
        image="https://t4.ftcdn.net/jpg/09/66/48/35/360_F_966483587_MriURsq1UFrnqmAc1Wd27GJLTWA5G74A.jpg"
        actionButtons={[
          {
            label: 'Get Started',
            onClick: handleGetStarted,
            variant: 'contained',
          },
          {
            label: 'Learn More',
            onClick: handleLearnMore,
            variant: 'outline',
          },
        ]}
      />
    </main>
  );
}
