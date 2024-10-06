import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function Admissions() {
  return (
    // Container to wrap the Admissions page content
    <Container>
      {/* Page heading */}
      <Typography variant="h3" component="h1" gutterBottom>
        Admissions
      </Typography>
      {/* Information about the application process */}
      <Typography variant="body1" paragraph>
        Find out how to apply to our school. We offer several scholarships and financial aid options.
      </Typography>
      {/* Call-to-action button for application */}
      <Button variant="contained" color="primary">
        Start Your Application
      </Button>
    </Container>
  );
}

export default Admissions;
