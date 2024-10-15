const mongoose = require('mongoose');

// Define the schema for new users
const NewUserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['parent', 'staff', 'admin'], // Define the allowed roles
  },
});

// Check if the 'NewUser' model already exists before defining it
module.exports = mongoose.models.NewUser || mongoose.model('NewUser', NewUserSchema);
