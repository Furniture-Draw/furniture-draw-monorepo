'use client';

import { Hero } from '@furniture-draw/hero';

export default function Index() {
  const handleGetStarted = () => {
    console.log("Get Started clicked");
  };

  const handleLearnMore = () => {
    console.log("Learn More clicked");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <Hero
          title="Modern Furniture Design"
          description="Create and customize your perfect living space with our innovative furniture design platform."
          image="https://t4.ftcdn.net/jpg/09/66/48/35/360_F_966483587_MriURsq1UFrnqmAc1Wd27GJLTWA5G74A.jpg"
          actionButtons={[
            {
              label: "Get Started",
              onClick: handleGetStarted,
              variant: "contained"
            },
            {
              label: "Learn More",
              onClick: handleLearnMore,
              variant: "outline"
            }
          ]}
        />
        
      </main>
    </div>
  );
}