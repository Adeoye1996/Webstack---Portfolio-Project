import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ py: 3, textAlign: 'center', bgcolor: 'primary.main', color: 'white', mt: 'auto' }}>
      <Typography variant="h6">Follow Us on Social Media</Typography>
      <Box>
        <IconButton href="https://facebook.com" target="_blank" color="inherit">
          <Facebook />
        </IconButton>
        <IconButton href="https://twitter.com" target="_blank" color="inherit">
          <Twitter />
        </IconButton>
        <IconButton href="https://instagram.com" target="_blank" color="inherit">
          <Instagram />
        </IconButton>
        <IconButton href="https://linkedin.com" target="_blank" color="inherit">
          <LinkedIn />
        </IconButton>
      </Box>
      <Typography variant="body2" sx={{ mt: 2 }}>
        &copy; 2024 School Website. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
