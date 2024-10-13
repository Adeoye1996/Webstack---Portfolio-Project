import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import Login from './Login';

const ParentPortal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to handle authentication

  // Handle successful login (you can update this logic based on your authentication method)
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  // Render login page if not authenticated
  if (!isAuthenticated) {
    return <Login userRole="Parent" onLoginSuccess={handleLoginSuccess} />;
  }

  // Render portal content if authenticated
  return (
    <Container maxWidth="lg">
      <Box mt={4}>
        <Typography variant="h3" align="center" gutterBottom>
          Parent Portal
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Welcome to the Parent Portal! Access your child's information, view announcements, and more.
        </Typography>

        <Grid container spacing={4} mt={4}>
          {/* Announcements Section */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Latest Announcements
                </Typography>
                <Typography variant="body1">
                  Stay updated with the latest school news and events.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  View Announcements
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Profile Section */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Parent Profile
                </Typography>
                <Typography variant="body1">
                  View and update your profile information.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Update Profile
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Child's Progress Section */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Your Child's Progress
                </Typography>
                <Typography variant="body1">
                  Track your child's academic performance.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  View Progress
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Resources Section */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Parent Resources
                </Typography>
                <Typography variant="body1">
                  Access school policies, guides, and helpful links.
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

export default ParentPortal;
