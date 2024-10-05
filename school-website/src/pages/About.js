import React from 'react';
import { Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Box>
      <Typography variant="h2">About Our School</Typography>

      <Box mt={3}>
        <Typography variant="h4">Mission and Vision</Typography>
        <Typography variant="body1">
          Our mission is to educate future leaders...
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="h4">History</Typography>
        <Typography variant="body1">
          Our school was established in...
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="h4">Leadership</Typography>
        <Typography variant="body1">
          Meet our leadership team...
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="h4">Faculty and Staff</Typography>
        <Typography variant="body1">
          Our dedicated staff...
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
