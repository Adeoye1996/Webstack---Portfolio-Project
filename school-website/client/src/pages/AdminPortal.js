import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';

const AdminPortal = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/auth/admin-login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (response.ok) {
                alert(data.message);
                setIsAuthenticated(true);
                // Store token here if needed: localStorage.setItem('token', data.token);
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
                        Admin Portal Login
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
