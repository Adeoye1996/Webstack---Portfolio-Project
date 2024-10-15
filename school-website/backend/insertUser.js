// insertUser.js

const mongoose = require('mongoose');
const User = require('./models/NewUser'); // Adjust the path if necessary

async function insertUsers() {
    const users = [
        { username: 'Adeoye1996', password: 'Abdulazeez1', role: 'admin' },
        { username: 'parent123', password: 'password123', role: 'parent' },
        { username: 'staff123', password: 'password123', role: 'staff' },
        { username: 'student123', password: 'password123', role: 'student' }
    ];

    for (const userData of users) {
        try {
            console.log(`Checking if user ${userData.username} exists...`);
            const existingUser = await User.findOne({ username: userData.username });
            if (existingUser) {
                console.log(`User ${userData.username} already exists, skipping insertion.`);
                continue; // Skip to the next user
            }

            console.log(`Inserting user ${userData.username}...`);
            const user = new User(userData);
            await user.save(); // This will hash the password
            console.log(`User ${user.username} inserted successfully`);
        } catch (error) {
            console.error(`Error inserting user ${userData.username}:`, error.message);
        }
    }

    mongoose.connection.close(); // Close the connection after insertion
}

// Call the function to insert users (make sure to connect to MongoDB before calling this function)
(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    await insertUsers();
})();
