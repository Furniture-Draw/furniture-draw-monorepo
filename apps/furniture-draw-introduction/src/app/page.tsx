'use client';

import { Navigation } from '@furniture-draw/navigation';
import Hero1 from '../components/sections/hero1';
import Hero3 from '../components/sections/hero3';

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero1 />
      <Hero3 />
    </div>
  );
}