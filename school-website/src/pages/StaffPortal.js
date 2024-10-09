import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import Login from './Login';

const StaffPortal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to handle authentication

  // Handle successful login (update this logic based on your authentication method)
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  // Render login page if not authenticated
  if (!isAuthenticated) {
    return <Login userRole="Staff" onLoginSuccess={handleLoginSuccess} />;
  }

  // Render portal content if authenticated
  return (
    <Container maxWidth="lg">
      <Box mt={4}>
        <Typography variant="h3" align="center" gutterBottom>
          Staff Portal
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Welcome to the Staff Portal! Manage your classes, view your schedule, and access important staff resources.
        </Typography>

        <Grid container spacing={4} mt={4}>
          {/* Announcements Section */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Staff Announcements
                </Typography>
                <Typography variant="body1">
                  Stay updated with the latest staff announcements and news.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  View Announcements
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Class Management Section */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Manage Classes
                </Typography>
                <Typography variant="body1">
                  View and manage your assigned classes.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Manage Classes
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Staff Schedule Section */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Staff Schedule
                </Typography>
                <Typography variant="body1">
                  View your teaching schedule and upcoming meetings.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  View Schedule
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Resources Section */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Staff Resources
                </Typography>
                <Typography variant="body1">
                  Access lesson plans, guidelines, and other helpful resources.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  View Resources
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default StaffPortal;
