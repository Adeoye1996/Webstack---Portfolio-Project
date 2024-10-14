import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

const galleryImages = [
  { src: 'assets/gallery1.jpeg', alt: 'Students working on a project' },
  { src: 'assets/gallery2.jpeg', alt: 'School sports day event' },
  { src: 'assets/gallery3.jpeg', alt: 'Students during a music performance' },
  // Add more images as needed
];

const Gallery = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Gallery
      </Typography>
      <Grid container spacing={4}>
        {galleryImages.map((image, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <img
              src={image.src}
              alt={image.alt}  // Improved alt text for better accessibility
              style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gallery;
