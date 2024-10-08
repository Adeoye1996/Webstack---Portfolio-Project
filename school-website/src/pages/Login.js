import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Container, Typography, Box } from '@mui/material'; // Importing MUI components

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });

      if (response.data.success) {
        const { role } = response.data;

        // Redirect based on user role
        if (role === 'parent') history.push('/parent-dashboard');
        if (role === 'staff') history.push('/staff-dashboard');
        if (role === 'admin') history.push('/admin-dashboard');
      }
    } catch (err) {
      setError('Invalid login credentials');
    }
  };

  return (
    <Container maxWidth="xs"> {/* Centered and constrained width */}
      <Box sx={{ mt: 8 }}> {/* Margin at the top */}
        <Typography variant="h4" align="center">Login</Typography>
        {error && <Typography color="error">{error}</Typography>} {/* Error message */}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
