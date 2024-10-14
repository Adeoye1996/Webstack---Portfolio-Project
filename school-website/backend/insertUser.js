async function insertUsers() {
    const users = [
        { username: 'Adeoye1996', password: 'Abdulazeez1', role: 'admin', email: 'Abdulazeezbabatunde10@gmail.com' },
        { username: 'parent123', password: 'password123', role: 'parent', email: 'Abdulazeezbabatunde20@yahoo.com' },
        { username: 'staff123', password: 'password123', role: 'staff', email: 'Abdulazeezbabatunde10@gmail.com' },
        { username: 'student123', password: 'password123', role: 'student', email: 'student@example.com' }
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
