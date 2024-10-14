import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';

const ParentPortal = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/auth/parent-login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (response.ok) {
                alert(data.message);
                setIsAuthenticated(true);
                // You can store token here if needed: localStorage.setItem('token', data.token);
            } else {
                alert('Login failed: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (!isAuthenticated) {
        return (
            <Container maxWidth="sm">
                <Box mt={4}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Parent Portal Login
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Login
                        </Button>
                    </form>
                </Box>
            </Container>
        );
    }

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
