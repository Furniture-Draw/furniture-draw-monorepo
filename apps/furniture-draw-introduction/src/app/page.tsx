'use client';

import { Navigation } from '@furniture-draw/navigation';
import { Hero } from '@furniture-draw/hero';
import {Sponsors} from '@furniture-draw/sponsors';
import WhatDoWeOffer from '../components/sections/hero3';

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main>
        <Hero
          title="Modern Furniture Design"
          description="Create and customize your perfect living space with our innovative furniture design platform."
          image="https://img.freepik.com/free-photo/natures-beauty-reflected-tranquil-mountain-waters-generative-ai_188544-7867.jpg"
          actionButtons={[
            {
              label: "Get Started",
              onClick: () => console.log("Get Started clicked"),
              variant: "contained"
            },
            {
              label: "Learn More",
              onClick: () => console.log("Learn More clicked"),
              variant: "outline"
            }
          ]}
        />
      </main>
      
      <Sponsors/>
      <WhatDoWeOffer/>
    </div>
  );
}