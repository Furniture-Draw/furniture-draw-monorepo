'use client';

import { Navigation } from '@furniture-draw/navigation';
import { Sponsors } from '@furniture-draw/sponsors';
import HeadHero from '../components/sections/heroes/hero1';
import WhatDoWeOffer from '../components/sections/heroes/hero3';
import { TestimonialSection } from '../components/sections/testimonials';
import VideoHero from '../components/sections/heroes/videohero';
import PricingCards from './pricingCards/page';

export default function Index() {
  return (
    <div className="index">
      <Navigation />
      <HeadHero />
      <VideoHero />
      <Sponsors />
      <WhatDoWeOffer />
      <PricingCards />
      <TestimonialSection />
    </div>
  );
}
