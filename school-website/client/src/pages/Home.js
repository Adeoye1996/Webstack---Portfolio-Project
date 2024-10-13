import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css';

// Background images for the slideshow
const images = [
  `${process.env.PUBLIC_URL}/assets/go.jpg`,
  `${process.env.PUBLIC_URL}/assets/let.jpg`,
  `${process.env.PUBLIC_URL}/assets/hope.jpg`
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Change background image every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-page">
      <Container maxWidth="lg">
        {/* Background image section with heading */}
        <div className="background-section" style={{ backgroundImage: `url(${images[currentImage]})` }}>
          <Typography variant="h2" className="heading">Welcome to Our School</Typography>
          <Button variant="contained" color="primary" href="/about">Learn More</Button>
        </div>

        {/* Introduction Section */}
        <section className="introduction">
          <Typography variant="h3" gutterBottom>
            Welcome to Yetma Ict School
          </Typography>
          <Typography variant="body1">
            At Yetma ICT School, we are dedicated to nurturing young minds and empowering the leaders of tomorrow.<br /><br /> 
            Our institution is built on the foundation of innovation, creativity, and excellence, providing a stimulating environment that fosters intellectual curiosity and growth.<br /><br />
            {/* Content truncated for brevity */}
          </Typography>
        </section>

        {/* School Information Section */}
        <Grid container spacing={4} className="school-info-section">
          <Grid item xs={12} sm={4}>
            <div className="info-card">
              <Typography variant="h4" className="info-title">Early Years</Typography>
              <Typography variant="body1" className="info-description">Nurturing young minds with care and curiosity.</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="info-card">
              <Typography variant="h4" className="info-title">Primary Years</Typography>
              <Typography variant="body1" className="info-description">Building strong foundations for lifelong learning.</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="info-card">
              <Typography variant="h4" className="info-title">Secondary Years</Typography>
              <Typography variant="body1" className="info-description">Preparing students for the challenges of tomorrow.</Typography>
            </div>
          </Grid>
        </Grid>

        {/* Features Section */}
        <section className="features">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom>Latest News</Typography>
              <Typography variant="body2">Stay updated with the latest happenings in our school.</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom>Upcoming Events</Typography>
              <Typography variant="body2">Check out the upcoming school events and participate!</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom>Testimonials</Typography>
              <div className="testimonials">
                <div className="testimonial">
                  <Typography variant="body1">
                    {/* Testimonial content */}
                  </Typography>
                  <Typography variant="caption">- Parent of Grade 5 student</Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </section>

        {/* Welcome Speech Section */}
        <div className="welcome-section">
          <Typography variant="h3" className="welcome-title">A Message from the School Head</Typography>
          <img src={`${process.env.PUBLIC_URL}/assets/schoolhead.jpg`} alt="School Head" className="school-head-image" />
          <Typography variant="body1" className="welcome-text">
            {/* Content truncated for brevity */}
          </Typography>
          <Button variant="contained" color="secondary" href="/admissions">Apply Now</Button>
        </div>

        {/* Latest News Section */}
        <div className="news-section">
          <Typography variant="h3">Latest News</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <div className="news-card">
                <Typography variant="h5">School Reopening</Typography>
                <Typography variant="body2">
                  {/* News content */}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="news-card">
                <Typography variant="h5">New Extracurricular Programs</Typography>
                <Typography variant="body2">
                  {/* News content */}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>

        {/* Call to Action Links */}
        <section className="cta-section">
          <Typography variant="h4" gutterBottom>Get Involved Today</Typography>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item>
              <Button variant="contained" color="primary" component={Link} to="/about">Learn More About Us</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" component={Link} to="/admissions">Admissions</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" component={Link} to="/events">View Upcoming Events</Button>
            </Grid>
          </Grid>
        </section>

        {/* Quick Links Section */}
        <div className="quick-links-section">
          <Button variant="contained" className="quick-link" component={Link} to="/about">About Us</Button>
          <Button variant="contained" className="quick-link" component={Link} to="/admissions">Admissions</Button>
          <Button variant="contained" className="quick-link" component={Link} to="/contact">Contact Us</Button>
          <Button variant="contained" className="quick-link" component={Link} to="/events">Events</Button>
          <Button variant="contained" className="quick-link" component={Link} to="/gallery">Gallery</Button>
        </div>
      </Container>
    </div>
  );
};

export default Home;
