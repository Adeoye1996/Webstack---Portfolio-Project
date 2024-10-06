import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);  // Placeholder for backend integration
  };

  return (
    <Container>
      {/* Page heading */}
      <Typography variant="h3" gutterBottom>
        Contact Us
      </Typography>
      {/* Contact form */}
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          margin="normal"
        />
        {/* Submit button */}
        <Button variant="contained" color="primary" type="submit">
          Send Message
        </Button>
      </form>
    </Container>
  );
}

export default Contact;
