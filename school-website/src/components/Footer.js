import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box textAlign="center" p={3} bgcolor="primary.main" color="white">
      <Typography variant="body1">© 2024 School Name</Typography>
      <IconButton color="inherit">
        <Facebook />
      </IconButton>
      <IconButton color="inherit">
        <Twitter />
      </IconButton>
      <IconButton color="inherit">
        <Instagram />
      </IconButton>
    </Box>
  );
};

export default Footer;
