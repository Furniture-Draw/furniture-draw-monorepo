'use client';

import { Navigation } from '@furniture-draw/navigation';
import { Sponsors } from '@furniture-draw/sponsors';
import { TestimonialCards } from '@furniture-draw/testimonial';
import { HeroWork } from '@furniture-draw/hero';
import { HeroComponent } from '@furniture-draw/hero';
import { HeroVideo } from '@furniture-draw/hero';
import { FeaturesCards } from '@furniture-draw/hero';
import { PricingCards } from '@furniture-draw/pricingCards';

export default function Index() {
  return (
    <div className="index">
      <Navigation />
      <HeroComponent />
      <HeroWork />
      <Sponsors />
      <HeroVideo />
      <FeaturesCards />
      <PricingCards />
      <TestimonialCards />
    </div>
  );
}
