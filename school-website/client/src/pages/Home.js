import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css';

// Background images for the slideshow
const images = ['assets/go.jpg', 'assets/let.jpg', 'assets/hope.jpg'];

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
            Welcome to [Yetma Ict School]
          </Typography>
          <Typography variant="body1">
            At [Yetma Ict School], we are dedicated to nurturing young minds and empowering the leaders of tomorrow through holistic education and modern learning,we have a long track record that keep us up to new adabtation to the renew world of technology and balance with school life.
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
            {/* News Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom>Latest News</Typography>
              <Typography variant="body2">Stay updated with the latest happenings in our school.</Typography>
            </Grid>

            {/* Events Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom>Upcoming Events</Typography>
              <Typography variant="body2">Check out the upcoming school events and participate!</Typography>
            </Grid>

            {/* Testimonials Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom>Testimonials</Typography>
              <div className="testimonials">
                <div className="testimonial">
                  <Typography variant="body1">"The school provided an excellent learning environment!"</Typography>
                  <Typography variant="caption">- Parent of Grade 5 student</Typography>
                </div>
                <div className="testimonial">
                  <Typography variant="body1">"Amazing faculty and staff. Loved my time here."</Typography>
                  <Typography variant="caption">- Alumni Student</Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </section>

        {/* Welcome Speech Section */}
        <div className="welcome-section">
          <Typography variant="h3" className="welcome-title">A Message from the School Head</Typography>
          <img src="assets/schoolhead.jpg" alt="School Head" className="school-head-image" />
          <Typography variant="body1" className="welcome-text">
            We are proud to offer a nurturing and academically challenging environment...
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
                <Typography variant="body2">Our school will reopen on September 20th...</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="news-card">
                <Typography variant="h5">New Extracurricular Programs</Typography>
                <Typography variant="body2">We are excited to introduce new extracurricular activities...</Typography>
              </div>
            </Grid>
          </Grid>
        </div>

        {/* Call to Action Links */}
        <section className="cta-section">
          <Typography variant="h4" gutterBottom>Get Involved Today</Typography>
          <Grid container spacing={2} justifyContent="center">
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
          <Button href="/about" className="quick-link">About Us</Button>
          <Button href="/admissions" className="quick-link">Admissions</Button>
          <Button href="/contact" className="quick-link">Contact Us</Button>
          <Button href="/events" className="quick-link">Events</Button>
          <Button href="/gallery" className="quick-link">Gallery</Button>
        </div>
      </Container>
    </div>
  );
};

export default Home;
