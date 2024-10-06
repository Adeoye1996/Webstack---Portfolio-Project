import React from 'react';
import { Container, Typography } from '@mui/material';

function About() {
  return (
    // Main container for the About page content
    <Container>
      {/* Heading for the About page */}
      <Typography variant="h3" component="h1" gutterBottom>
        About Our School
      </Typography>
      {/* Mission and vision section */}
      <Typography variant="body1" paragraph>
        Learn more about our mission, vision, and history.
      </Typography>
      {/* Additional information section (can be extended later) */}
      <Typography variant="body2">
        We strive to provide the best education for our students...
      </Typography>
    </Container>
  );
}

export default About;
