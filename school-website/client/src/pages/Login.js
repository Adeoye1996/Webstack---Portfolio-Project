import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Replaced useHistory with useNavigate
import axios from 'axios';
import { Container, TextField, Button, Typography, Box, Grid } from '@mui/material';
import './Login.css'; // Assuming some CSS styling

const Login = ({ userRole }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Replaced useHistory with useNavigate

  // Dummy credentials for testing login
  const dummyCredentials = {
    Parent: { username: 'parent123', password: 'password123' },
    Staff: { username: 'staff123', password: 'password123' },
    Admin: { username: 'admin123', password: 'password123' }
  };

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation to check if fields are empty
    if (!credentials.username || !credentials.password) {
      setError('Both fields are required!');
      return;
    }

    try {
      // Perform login via backend
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: credentials.username,
        password: credentials.password,
        role: userRole // Pass the user role here
      });

      // Check if the response contains a token
      if (response.data.token) {
        const { role } = response.data.user; // Assuming the response contains user info
        if (role === 'parent') navigate('/parent-dashboard');
        if (role === 'staff') navigate('/staff-dashboard');
        if (role === 'admin') navigate('/admin-dashboard');
      }
    } catch (err) {
      // Dummy login check for testing without backend
      if (
        credentials.username === dummyCredentials[userRole].username &&
        credentials.password === dummyCredentials[userRole].password
      ) {
        setError('');
        alert(`${userRole} Login Successful!`);
        navigate(`/${userRole.toLowerCase()}-dashboard`); // Redirect to the respective dashboard
      } else {
        setError('Invalid username or password');
      }
    }
  };

  return (
    <div className="login-page">
      <Container maxWidth="sm">
        <Box className="login-container" boxShadow={3} p={3}>
          <Typography variant="h4" align="center" gutterBottom>
            {userRole} Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* Username Field */}
              <Grid item xs={12}>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                />
              </Grid>

              {/* Password Field */}
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                />
              </Grid>

              {/* Error Message */}
              {error && (
                <Grid item xs={12}>
                  <Typography color="error">{error}</Typography>
                </Grid>
              )}

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit" fullWidth>
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
