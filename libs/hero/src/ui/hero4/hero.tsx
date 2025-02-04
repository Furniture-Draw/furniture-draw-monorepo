'use client';

import Image from 'next/image';

type ActionButton = {
  label: string;
  onClick: () => void;
  variant?: 'contained' | 'outlined';
};

export type HeroProps = {
  title: string;
  description: string;
  image: string;
  actionButtons?: ActionButton[];
};

export default function HeroWork({
  title,
  description,
  image,
  actionButtons = [],
}: HeroProps) {
  return (
    <section
      className="relative flex flex-col items-center justify-center h-[574px] text-white text-center px-8"
      style={{
        backgroundColor: '#043873',
        backgroundImage: "url('./images/BACKGROUND.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* İçerik */}
      <div className="relative z-10 max-w-2xl flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight relative">
          {title}
          {/* "You are" yazısının altına Element.svg ekleme */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-20px]">
            <Image
              src="./images/Element.svg"
              alt="Pattern"
              width={300}
              height={50}
            />
          </div>
        </h1>

        <p className="mt-10 text-lg md:text-xl text-gray-300">{description}</p>

        {/* Eğer actionButtons varsa göster */}
        {actionButtons.length > 0 && (
          <div className="mt-6 flex gap-4 justify-center">
            {actionButtons.map((button, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg shadow-lg transition ${
                  button.variant === 'outlined'
                    ? 'border border-white text-white'
                    : 'bg-blue-400 text-white hover:bg-blue-400'
                }`}
                onClick={button.onClick}
              >
                {button.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
