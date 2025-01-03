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