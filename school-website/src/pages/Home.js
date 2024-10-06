import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';

function Home() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Our School
          </Typography>
          <Typography variant="body1" paragraph>
            Explore our courses and find the right fit for your future!
          </Typography>
          <Button variant="contained" color="primary">
            Explore Courses
          </Button>
        </Grid>
        {/* Image or additional content for larger screens */}
        <Grid item xs={12} md={4}>
          {/* Placeholder for background image */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
