const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage'); // Assuming you have a ContactMessage model

// POST route to handle contact form submissions
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;  // Destructuring the request body

    try {
        // Create a new contact message document using the ContactMessage model
        const newMessage = new ContactMessage({ name, email, message });

        // Save the message to the database
        await newMessage.save();

        // Respond with success message if saving is successful
        res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
        // Catch any errors and respond with a failure message
        res.status(500).json({ message: 'Error sending message' });
    }
});

module.exports = router;
