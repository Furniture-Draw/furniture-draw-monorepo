'use client';

import { Navigation } from '@furniture-draw/navigation';
import { Sponsors } from '@furniture-draw/sponsors';
import { TestimonialSection } from '@furniture-draw/testimonial';

import HeadHero from '../components/sections/heroes/hero1';
import WhatDoWeOffer from '../components/sections/heroes/hero3';
import VideoHero from '../components/sections/heroes/videohero';
import PricingCards from './pricingCards/page';

export default function Index() {
  return (
    <div className="index">
      <Navigation />
      <HeadHero />
      <Sponsors />
      <VideoHero />
      <WhatDoWeOffer />
      <PricingCards />
      <TestimonialSection />
    </div>
  );
}
