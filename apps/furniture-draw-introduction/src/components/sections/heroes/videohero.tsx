import { VideoHero } from '@furniture-draw/hero';

export default function HomePage() {
  return (
    <VideoHero
      title="Design Your Dream Furniture"
      description="Transform your ideas into reality with Furniture Draw. Create, customize, and visualize your perfect furniture pieces in real-time. Whether you're a professional designer or a DIY enthusiast, our powerful tools make furniture design accessible and enjoyable for everyone."
      ctaButton={{
        label: 'Start Creating',
        onClick: () => console.log('CTA clicked'),
      }}
      videoSrc="https://www.youtube.com/watch?v=-N5-BQb2yL8"
    />
  );
}
