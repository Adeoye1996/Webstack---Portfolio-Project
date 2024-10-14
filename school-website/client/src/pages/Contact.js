import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';

const Contact = () => {
    // State to handle form inputs
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    // Handle input change
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });  // Reset form on success
            } else {
                alert('Error: ' + result.message);
            }
        } catch (error) {
            console.error('Submission error', error);
        }
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4 }}>
                {/* Title */}
                <Typography variant="h4" gutterBottom>
                    Contact Us
                </Typography>

                {/* Google Map Embed */}
                <Box sx={{ my: 4 }}>
                    <iframe
                        title="School Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096575!2d144.95592631531588!3d-37.81720957975151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577a3b8f0dbf0b8!2sVictoria%20State%20Library!5e0!3m2!1sen!2sus!4v1619468952499!5m2!1sen!2sus"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </Box>

                {/* Contact Form */}
                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <TextField
                        label="Your Name"
                        name="name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />

                    {/* Email Field */}
                    <TextField
                        label="Your Email"
                        name="email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />

                    {/* Message Field */}
                    <TextField
                        label="Your Message"
                        name="message"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    />

                    {/* Submit Button */}
                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                        Send Message
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Contact;
