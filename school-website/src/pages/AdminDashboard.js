import React from 'react';
import { Container, Typography } from '@mui/material';

function AdminDashboard() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome to the Admin Dashboard! Here you can manage users, assign roles, and oversee school operations.
      </Typography>
    </Container>
  );
}

export default AdminDashboard;
