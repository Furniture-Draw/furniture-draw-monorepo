'use client';

import HeroWork from './hero';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  return (
    <main>
      <HeroWork
        title="Your work, everywhere you are"
        description="Access your notes from your computer, phone or tablet by synchronizing with various services, including whitepace, Dropbox, and OneDrive."
        image="/images/BACKGROUND.svg"
        actionButtons={[
          {
            label: 'Try Taskey',
            onClick: () => router.push('https://prod.mobilyaplan.app/'),
            variant: 'contained',
          },
        ]}
      />
    </main>
  );
}
