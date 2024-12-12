import { HeroProps } from './types';

export const Hero = ({ title, description, image, smallText }: HeroProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
      <img src={image as string} alt="test" />
    </div>
  );
};
