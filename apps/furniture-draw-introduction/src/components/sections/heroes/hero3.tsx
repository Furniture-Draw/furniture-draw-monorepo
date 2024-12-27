import { Hero3 } from '@furniture-draw/hero';

export default function Example() {
  return (
    <Hero3
      mainTitle="What do we offer?"
      mainDescription="Furniture Main is dedicated to providing the best software to design and visualize furniture online. Our features include:"
      backgroundVariant="light"
      alignment="center"
      features={[
        {
          imageSrc: "/images/easy-use.jpg",
          title: "Easy to Use",
          description: "Our platform is designed for simple and intuitive use, making furniture design accessible to everyone."
        },
        {
          imageSrc: "/images/work-anywhere.jpg",
          title: "Work from Anywhere",
          description: "Access your designs from any device and continue working on your projects wherever you are."
        },
        {
          imageSrc: "/images/continuous-updates.jpg",
          title: "Continuous Updates",
          description: "We regularly update our features and tools to provide you with the best furniture design experience."
        },
        {
          imageSrc: "/images/design-production.jpg",
          title: "Design to Production",
          description: "Transform your designs into reality with our comprehensive production pipeline integration."
        }
      ]}
    />
  );
}