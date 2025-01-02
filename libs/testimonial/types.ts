export interface TestimonialCard {
    /**
     * Avatar image URL of the person giving testimonial
     */
    avatarSrc: string;
    
    /**
     * Name of the person giving testimonial
     */
    name: string;
    
    /**
     * Role or title of the person
     */
    title: string;
    
    /**
     * Company or organization name
     */
    company: string;
    
    /**
     * The testimonial text content
     */
    content: string;
    
    /**
     * Rating out of 5 stars
     */
    rating: number;
  }
  
  export interface TestimonialProps {
    /**
     * Main heading text
     */
    heading?: string;
    
    /**
     * Array of testimonial cards to display
     */
    testimonials: TestimonialCard[];
    
    /**
     * Visual variant of the testimonial section
     * @default 'light'
     */
    variant?: 'light' | 'dark';
    
    /**
     * Number of testimonials to show per slide
     * @default 3
     */
    cardsPerView?: 1 | 2 | 3;
    
    /**
     * Container width from MUI theme
     * @default 'lg'
     */
    containerWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  }