import React from 'react';
import { Typography, Box } from '@mui/material';

const Admissions = () => {
  return (
    <Box>
      <Typography variant="h2">Admissions</Typography>

      <Box mt={3}>
        <Typography variant="h4">Application Process</Typography>
        <Typography variant="body1">
          Our application process is simple...
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="h4">Tuition and Fees</Typography>
        <Typography variant="body1">
          We offer competitive tuition rates...
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="h4">Scholarships</Typography>
        <Typography variant="body1">
          We provide scholarship opportunities...
        </Typography>
      </Box>
    </Box>
  );
};

export default Admissions;
