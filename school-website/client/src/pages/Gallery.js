import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

const Gallery = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>Gallery</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <img src="assets/gallery1.jpeg" alt="Gallery Image 1" style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src="assets/gallery2.jpeg" alt="Gallery Image 2" style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src="assets/gallery3.jpeg" alt="Gallery Image 3" style={{ width: '100%' }} />
        </Grid>
        {/* Add more images as needed */}
      </Grid>
    </Container>
  );
};

export default Gallery;

