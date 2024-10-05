// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Import routes
const schoolRoutes = require('./routes/schoolRoutes');

// Initialize dotenv to load environment variables
dotenv.config();

// Create an instance of the Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Middleware to use routes
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
