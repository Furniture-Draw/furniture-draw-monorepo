export interface ActionButton {
  label: string;
  onClick: () => void;
  variant?: 'outline' | 'contained' | 'secondary';
}

export interface HeroProps {
  /**
   * Main title of the hero section
   */
  title: string;

  /**
   * Descriptive text below the title
   */
  description: string;

  /**
   * Optional array of action buttons
   */
  actionButtons?: ActionButton[];

  /**
   * Optional image URL for the hero section
   */
  image?: string;

  /**
   * Alt text for the image
   * @default 'Hero section image'
   */
  imageAlt?: string;

  /**
   * Optional container width
   * @default 'lg'
   */
  containerWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}