import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Tab, Tabs, Alert } from '@mui/material';
import axios from '../utils/axios'; // Ensure this points to your axios instance
import { useNavigate } from 'react-router-dom';

function LoginPortal() {
  const [tabIndex, setTabIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle tab change for different user roles
  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  // Handle login form submission
  const handleLogin = async () => {
    // Basic validation
    if (!email || !password) {
      setError('Email and Password are required!');
      return;
    }

    try {
      const role = tabIndex === 0 ? 'parent' : tabIndex === 1 ? 'staff' : 'admin';
      const res = await axios.post('/auth/login', { email, password, role });  // Ensure this is the correct endpoint

      // Store the token in localStorage
      localStorage.setItem('token', res.data.token);

      setError(''); // Clear any previous errors

      // Redirect the user based on role
      if (role === 'parent') {
        navigate('/parent-dashboard');
      } else if (role === 'staff') {
        navigate('/staff-dashboard');
      } else if (role === 'admin') {
        navigate('/admin-dashboard');
      }
    } catch (err) {
      // Check if there's a response error
      const errorMessage = err.response?.data?.msg || 'Invalid credentials, please try again.';
      setError(errorMessage);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Login Portal
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 2 }}>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="Parent" />
          <Tab label="Staff" />
          <Tab label="Admin" />
        </Tabs>
      </Box>

      {error && <Alert severity="error">{error}</Alert>} {/* Display any login errors */}

      <TextField
        label="Email"
        type="email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        sx={{ mt: 2 }}
      >
        Login
      </Button>
    </Container>
  );
}

export default LoginPortal;
