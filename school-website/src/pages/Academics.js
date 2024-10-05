import React from 'react';
import { Typography, Box } from '@mui/material';

const Academics = () => {
  return (
    <Box>
      <Typography variant="h2">Academics</Typography>

      <Box mt={3}>
        <Typography variant="h4">Courses and Programs</Typography>
        <Typography variant="body1">
          We offer a wide variety of courses...
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="h4">Curriculum</Typography>
        <Typography variant="body1">
          Our curriculum focuses on...
        </Typography>
      </Box>

      <Box mt={3}>
        <Typography variant="h4">Academic Calendar</Typography>
        <Typography variant="body1">
          The academic year runs from...
        </Typography>
      </Box>
    </Box>
  );
};

export default Academics;
