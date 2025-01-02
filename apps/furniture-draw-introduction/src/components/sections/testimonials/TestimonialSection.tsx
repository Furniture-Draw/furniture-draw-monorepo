import { Testimonial } from '../../../../../../libs/testimonial';

// Mock data - gerçek projede bu veri API'den gelebilir
const testimonialData = [
  {
    avatarSrc: 'https://i.pravatar.cc/150?img=1',
    name: 'Jessie Owner',
    title: 'Interior Designer',
    company: 'Design Studio Co.',
    content:
      "I've been using this furniture platform for my client projects, and it's been a game-changer. The quality and attention to detail in every piece is exceptional. My clients are always impressed with the final results.",
    rating: 5,
  },
  {
    avatarSrc: 'https://i.pravatar.cc/150?img=2',
    name: 'Alex Johnson',
    title: 'Home Owner',
    company: 'Remote Work Solutions',
    content:
      'Recently furnished my home office through this platform. The process was incredibly smooth, and the custom sizing options helped me make the most of my small space. The desk I ordered is both beautiful and functional.',
    rating: 5,
  },
  {
    avatarSrc: 'https://i.pravatar.cc/150?img=3',
    name: 'Sarah Williams',
    title: 'Restaurant Owner',
    company: 'The Cozy Corner',
    content:
      'Outstanding furniture and even better service! We ordered 20 custom chairs for our restaurant, and they exceeded our expectations. The team was helpful throughout the entire process, from design to delivery.',
    rating: 5,
  },
  {
    avatarSrc: 'https://i.pravatar.cc/150?img=4',
    name: 'Michael Brown',
    title: 'Architect',
    company: 'Modern Spaces',
    content:
      "As an architect, I'm very particular about furniture quality and design. This platform offers exactly what I need - modern, customizable pieces that complement my architectural projects perfectly.",
    rating: 5,
  },
  {
    avatarSrc: 'https://i.pravatar.cc/150?img=5',
    name: 'Emma Davis',
    title: 'Hotel Manager',
    company: 'Luxury Stays',
    content:
      'We refurnished our entire boutique hotel with pieces from this platform. The durability is impressive, and our guests frequently compliment the furniture. The customer service team was exceptional in handling our large order.',
    rating: 5,
  },
  {
    avatarSrc: 'https://i.pravatar.cc/150?img=6',
    name: 'David Wilson',
    title: 'Real Estate Stager',
    company: 'Perfect Homes',
    content:
      'This platform is my go-to for home staging projects. The furniture pieces are not only stylish but also versatile enough to work in different settings. Fast delivery and great quality make my job so much easier.',
    rating: 5,
  },
];

interface TestimonialSectionProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export function TestimonialSection({
  variant = 'light',
  className,
}: TestimonialSectionProps) {
  return (
    <section className={className}>
      <Testimonial
        heading="See what our trusted users Say"
        testimonials={testimonialData}
        variant={variant}
        cardsPerView={3}
        containerWidth="lg"
      />
    </section>
  );
}
