export interface ActionButton {
  label: string;
  onClick: () => void;
  variant?: 'outline' | 'contained' | 'secondary';
}

export interface HeroProps {
  title: string;
  description: string;
  actionButtons?: ActionButton[];
  image?: string;
  imageAlt?: string;
  containerWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface Hero3Props {
  mainTitle: string;
  mainDescription: string;
  features: FeatureCard[];
  actionButtons?: ActionButton[];
  backgroundVariant?: 'light' | 'dark';
  alignment?: 'left' | 'center';
}

export interface FeatureCard {
  icon?: React.ReactNode;
  title: string;
  description: string;
  imageSrc?: string;
}

// libs/hero/src/ui/videohero/types.ts
export interface VideoHeroProps {
  title: string;
  description: string;
  ctaButton?: {
    label: string;
    onClick: () => void;
  };
  videoSrc: string;
  imageAlt?: string;
  muted?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  fallbackImageSrc?: string;
}
