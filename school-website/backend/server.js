// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // To allow cross-origin requests
const bodyParser = require('body-parser'); // For parsing request bodies

// Import routes
const schoolRoutes = require('./routes/schoolRoutes');
const authRoutes = require('./routes/auth'); // Your authentication route

// Initialize dotenv to load environment variables
dotenv.config();

// Create an instance of the Express application
const app = express();

// Middleware for CORS to handle cross-origin requests
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(bodyParser.json()); // Using bodyParser to handle request body as JSON

// Use the authentication route for login
app.use('/api/auth', authRoutes); // Authentication routes

// Use the school routes
app.use('/api/school', schoolRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Simple route to test the server
app.get('/', (req, res) => {
  res.send('Welcome to the School Website Backend');
});

// Define the server port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
