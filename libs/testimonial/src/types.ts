export interface TestimonialProps {
    heading?: string;
    testimonials: {
      avatarSrc: string;
      name: string;
      title: string;
      company: string;
      content: string;
      rating: number;
    }[];
    variant?: 'light' | 'dark';
    cardsPerView?: number;
    containerWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  }
  
  export interface TestimonialCard {
    avatarSrc: string;
    name: string;
    title: string;
    company: string;
    content: string;
    rating: number;
  }
  