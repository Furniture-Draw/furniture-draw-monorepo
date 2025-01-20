// apps/furniture-draw-introduction/src/app/contact/page.tsx
'use client';

import { Suspense, useState, useEffect } from 'react';
import { Navigation } from '@furniture-draw/navigation';
import { Contact, ContactFormData } from '@furniture-draw/contact';

function ContactContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleSubmit = (data: ContactFormData) => {
    // Handle form submission
    console.log('Form submitted:', data);
  };

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Yükleniyor...
      </div>
    );
  }

  return (
    <Contact
      key="contact-page"
      onSubmit={handleSubmit}
      address={{
        district: 'Çankaya District',
        city: 'Ankara',
        country: 'Turkey',
      }}
      phone="+90 555 555 55 55"
      email="info@furnituredraw.com"
      mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.0584279854!2d32.62170327973414!3d39.90329227930007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2zw4dhbmtheWEvQW5rYXJh!5e0!3m2!1str!2str!4v1705780000000!5m2!1str!2str"
    />
  );
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <Suspense
        fallback={
          <div className="w-full h-screen flex items-center justify-center">
            Yükleniyor...
          </div>
        }
      >
        <ContactContent />
      </Suspense>
    </>
  );
}
