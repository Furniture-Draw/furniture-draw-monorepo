'use client';
import { Navigation } from '@furniture-draw/navigation';
import "./aboutPage.css"

export const AboutPage = () => {
  return (
    <div>
      <Navigation />
      <div
        style={{
          marginTop: '30px',
          marginBottom: '30px',
          textAlign: 'center',
          color: 'red',
          fontSize: '28px',
        }}
      >
        Mobilplan's story
      </div>

      <div className="container">
        <img src="../images/image1.jpg" alt="aboutpage image1" />
      </div>
      
      <div>
        {/* Altta metin */}
        <p
          style={{
            marginTop: '20px',
            marginBottom: '60px',
            fontSize: '18px',
            color: '#333',
            marginLeft: '30px',
            marginRight: '40px',
          }}
        >
          We have worked in all production, manufacturing and sales departments
          in the furniture industry for years. Our story started with a design
          and production program that reflects the experiences we have gained.
        </p>
      </div>
    </div>
  );
};