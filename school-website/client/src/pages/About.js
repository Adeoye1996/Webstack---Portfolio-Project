import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import './About.css';

const About = () => {
  return (
    <Container className="about-container">
      {/* School History Section */}
      <Typography variant="h3" className="about-title">Our History</Typography>
      <Typography variant="body1" className="about-text">
        Established in 2024, our school has a long-standing tradition of academic excellence...
      </Typography>

      {/* Mission and Vision */}
      <Typography variant="h4" className="about-title">Mission and Vision</Typography>
      <Typography variant="body1" className="about-text">
        Our mission is to provide quality education that nurtures the next generation and provide more advance environment for technology education...
      </Typography>

      {/* Leadership Team Section */}
      <Typography variant="h4" className="about-title">Leadership Team</Typography>
      <Grid container spacing={4} className="leadership-section">
        <Grid item xs={12} sm={4}>
          <div className="leadership-card">
            <img src="assets/team1.jpg" alt="Leader 1" className="leader-image" />
            <Typography variant="h5">Abdulrazak Abdulazeez</Typography>
            <Typography variant="body2">School Principal</Typography>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="leadership-card">
            <img src="assets/team2.jpg" alt="Leader 2" className="leader-image" />
            <Typography variant="h5">Jane Smith</Typography>
            <Typography variant="body2">Vice Principal</Typography>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="leadership-card">
            <img src="assets/team3.jpg" alt="Leader 3" className="leader-image" />
            <Typography variant="h5">Muniroh Eniola</Typography>
            <Typography variant="body2">Director of Education</Typography>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
