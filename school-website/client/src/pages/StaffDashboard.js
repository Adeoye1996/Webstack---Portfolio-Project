import React from 'react';
import { Container, Typography } from '@mui/material';

function StaffDashboard() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Staff Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome to the Staff Dashboard! Here you can manage courses, track student progress, and handle school resources.
      </Typography>
    </Container>
  );
}

export default StaffDashboard;
