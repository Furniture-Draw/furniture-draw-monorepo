'use client';
import { Navigation } from '@furniture-draw/navigation';

export const AboutPage = () => {
  return (
    <div>
      <Navigation />
      <div style={{ textAlign: 'center',color: 'red' }}>Mobilplan's story</div>
      

      <div style={{ alignItems:'center', padding: '20px' }}>
        {/* Üstte resim */}
        <img
          src="../images/image1.jpg"
          alt="Sample"
          style={{ width: '100%', maxWidth: '700px', borderRadius: '60px' }}
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
