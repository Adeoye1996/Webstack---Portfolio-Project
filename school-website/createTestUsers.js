// createTestUsers.js

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./backend/models/User'); // Adjust path if needed

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/school-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Create test users
const createTestUsers = async () => {
    const hashedPassword = await bcrypt.hash('password123', 10);

    const users = [
        { username: 'parent1', password: hashedPassword, role: 'parent' },
        { username: 'student1', password: hashedPassword, role: 'student' },
        { username: 'admin1', password: hashedPassword, role: 'admin' },
    ];

    try {
        for (const user of users) {
            await User.create(user);
        }
        console.log('Test users created successfully!');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error creating users:', error);
        mongoose.connection.close();
    }
};

createTestUsers();
