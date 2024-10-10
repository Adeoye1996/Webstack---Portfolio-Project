import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css'; // Link to custom styles

const Home = () => {
  return (
    <div className="home-page">
      <Container maxWidth="lg">
        
        {/* Introduction Section */}
        <section className="introduction">
          <Typography variant="h3" gutterBottom>
            Welcome to [School Name]
          </Typography>
          <Typography variant="body1">
            At [School Name], we are dedicated to nurturing young minds and empowering the leaders of tomorrow through holistic education and modern learning.
          </Typography>
        </section>

        {/* Features Section */}
        <section className="features">
          <Grid container spacing={4}>
            {/* News Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom>
                Latest News
              </Typography>
              <Typography variant="body2">
                Stay updated with the latest happenings in our school.
              </Typography>
            </Grid>

            {/* Events Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom>
                Upcoming Events
              </Typography>
              <Typography variant="body2">
                Check out the upcoming school events and participate!
              </Typography>
            </Grid>

            {/* Testimonials Section */}
            <Grid item xs={12} md={4}>
              <Typography variant="h5" gutterBottom>
                Testimonials
              </Typography>
              <Typography variant="body2">
                Hear from our students and parents!
              </Typography>
              <div className="testimonials">
                <div className="testimonial">
                  <Typography variant="body1">
                    "The school provided an excellent learning environment!"
                  </Typography>
                  <Typography variant="caption">
                    - Parent of Grade 5 student
                  </Typography>
                </div>
                <div className="testimonial">
                  <Typography variant="body1">
                    "Amazing faculty and staff. Loved my time here."
                  </Typography>
                  <Typography variant="caption">
                    - Alumni Student
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </section>

        {/* Call to Action Links */}
        <section className="cta-section">
          <Typography variant="h4" gutterBottom>
            Get Involved Today
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary" component={Link} to="/about">
                Learn More About Us
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" component={Link} to="/admissions">
                Admissions
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" component={Link} to="/events">
                View Upcoming Events
              </Button>
            </Grid>
          </Grid>
        </section>
      </Container>
    </div>
  );
};

export default Home;
