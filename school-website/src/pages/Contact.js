import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';

const Contact = () => {
  return (
    <Box>
      <Typography variant="h2">Contact Us</Typography>

      <Box mt={3}>
        <TextField label="Your Name" fullWidth margin="normal" />
        <TextField label="Your Email" fullWidth margin="normal" />
        <TextField label="Message" fullWidth margin="normal" multiline rows={4} />
        <Button variant="contained" color="primary">Submit</Button>
      </Box>

      <Box mt={3}>
        <Typography variant="h4">Map and Directions</Typography>
        <Typography variant="body1">
          Find us on the map...
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
