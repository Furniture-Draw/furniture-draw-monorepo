'use client';
import { Navigation } from '@furniture-draw/navigation';

export const AboutPage = () => {
  return (
    <div>
      <Navigation />
      <div style={{ color: 'red' }}>Mobilplan's story</div>
      

      <div style={{ textAlign: 'center', padding: '20px' }}>
        {/* Üstte resim */}
        <img
          src="libs\about-page\src\assets\image1.jpg"
          alt="Sample"
          style={{ width: '100%', maxWidth: '300px', borderRadius: '10px' }}
        />

        {/* Altta metin */}
        <p style={{ marginTop: '10px', fontSize: '18px', color: '#333' }}>
        We have worked in all production, manufacturing and sales departments in
        the furniture industry for years. Our story started with a design and
        production program that reflects the experiences we have gained.
        </p>
        
      </div>
    </div>
  );
};
