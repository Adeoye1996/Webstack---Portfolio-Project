import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import Login from './Login';

const AdminPortal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to handle authentication

  // Handle successful login
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  // Render login page if not authenticated
  if (!isAuthenticated) {
    return <Login userRole="Admin" onLoginSuccess={handleLoginSuccess} />;
  }

  // Render portal content if authenticated
  return (
    <Container maxWidth="lg">
      <Box mt={4}>
        <Typography variant="h3" align="center" gutterBottom>
          Admin Portal
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Welcome to the Admin Portal! Manage students, staff, school events, and view reports.
        </Typography>

        <Grid container spacing={4} mt={4}>
          {/* Manage Students Section */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Manage Students
                </Typography>
                <Typography variant="body1">
                  Add, update, and remove student information.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Manage Students
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Manage Staff Section */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Manage Staff
                </Typography>
                <Typography variant="body1">
                  Add, update, and remove staff information.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Manage Staff
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Manage Events Section */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Manage School Events
                </Typography>
                <Typography variant="body1">
                  Organize and manage upcoming school events.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Manage Events
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Reports Section */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  View Reports
                </Typography>
                <Typography variant="body1">
                  Access school performance and other administrative reports.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  View Reports
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AdminPortal;
