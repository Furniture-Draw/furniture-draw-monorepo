'use client';

import { Navigation } from '@furniture-draw/navigation';
import { Sponsors } from '@furniture-draw/sponsors';
import HeadHero from '../components/sections/heroes/hero1';
import WhatDoWeOffer from '../components/sections/heroes/hero3';
import { TestimonialSection } from '../components/sections/testimonials';

export default function Index() {
  return (
    <div className="index">
      <Navigation />
      <HeadHero />
      <Sponsors />
      <WhatDoWeOffer />
      <TestimonialSection />
    </div>
  );
}
