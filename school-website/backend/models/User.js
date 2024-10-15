const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the schema for the new user
const NewUserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Ensure unique usernames
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure unique emails
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['parent', 'staff', 'admin', 'student'],
        default: 'parent', // Default role if not provided
    },
});

// Hash the password before saving the user
NewUserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next(); // If password isn't changed, skip hashing
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Export the model
module.exports = mongoose.model('NewUser', NewUserSchema);
