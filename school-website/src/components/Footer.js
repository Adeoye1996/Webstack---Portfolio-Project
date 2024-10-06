import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

function Footer() {
  return (
    <Box sx={{ textAlign: 'center', padding: 2, backgroundColor: '#f5f5f5', marginTop: 'auto' }}>
      <Typography variant="body1">Follow Us</Typography>
      <IconButton href="https://www.facebook.com" target="_blank" color="primary">
        <Facebook />
      </IconButton>
      <IconButton href="https://www.twitter.com" target="_blank" color="primary">
        <Twitter />
      </IconButton>
      <IconButton href="https://www.linkedin.com" target="_blank" color="primary">
        <LinkedIn />
      </IconButton>
      <Typography variant="body2" color="textSecondary">&copy; 2024 School Name. All rights reserved.</Typography>
    </Box>
  );
}

export default Footer;
