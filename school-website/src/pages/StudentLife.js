import React from 'react';
import { Typography, Box } from '@mui/material';

const StudentLife = () => {
  return (
    <Box>
      <Typography variant="h2">Student Life</Typography>

      <Box mt={3}>
        <Typography variant="h4">Extracurricular Activities</Typography>
        <Typography variant="body1">
          We offer various activities...
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="h4">Clubs and Organizations</Typography>
        <Typography variant="body1">
          Join a club or organization...
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="h4">Student Council</Typography>
        <Typography variant="body1">
          Our student council empowers students...
        </Typography>
      </Box>
    </Box>
  );
};

export default StudentLife;
