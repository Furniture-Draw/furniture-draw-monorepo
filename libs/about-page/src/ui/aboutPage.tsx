'use client';
import { Navigation } from '@furniture-draw/navigation';
import { Button, Container, Typography } from '@mui/material';
import './aboutPage.css';

export const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Navigasyon */}
      <Navigation />

      {/* Hero Section */}
      <div className="hero-section">
        <img className="hero-image" src="../images/image1.jpg" alt="About Us" />
        <div className="hero-overlay">
          <Typography variant="h2" className="hero-title">
            Our Story
          </Typography>
          <Typography variant="body1" className="hero-text">
            Discover our journey through the world of furniture, from
            manufacturing to design innovation.
          </Typography>
        </div>
      </div>

      {/* İçerik Bölümü */}
      <Container className="content-section">
        <Typography variant="h4" className="content-title">
          Who We Are
        </Typography>
        <Typography variant="body1" className="content-text">
          We have worked in all production, manufacturing, and sales departments
          in the furniture industry for years. Our story started with a design
          and production program that reflects the experiences we have gained.
        </Typography>

        {/* MUI Butonu */}
        <div className="button-container">
          <Button
            variant="contained"
            size="large"
            className="mui-button"
            sx={{
              background: 'linear-gradient(90deg, #1E90FF, #007BFF)',
              borderRadius: '0px',
              padding: '12px 24px',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              textTransform: 'none',
              transition: 'all 0.3s ease-in-out',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                background: 'linear-gradient(90deg, #007BFF, #1E90FF)',
                transform: 'scale(1.05)',
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.3)',
              },
            }}
          >
            Learn More →
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;