import React from 'react';
import { Container, Typography } from '@mui/material';

function ParentDashboard() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Parent Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome to the Parent Dashboard! Here you can view your child’s progress, access reports, and stay informed about school activities.
      </Typography>
    </Container>
  );
}

export default ParentDashboard;
