'use client';

import HeroWork from './hero';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  return (
    <main>
      <HeroWork
        title="Design & Manage Your Furniture Projects"
        description="Plan, customize, and bring your furniture ideas to life. Collaborate with designers and manage your projects seamlessly with Mobilyaplan."
        image="/images/BACKGROUND.svg"
        actionButtons={[
          {
            label: 'Get Started',
            onClick: () => router.push('https://prod.mobilyaplan.app/'),
            variant: 'contained',
          },
        ]}
      />
    </main>
  );
}
