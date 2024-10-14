const User = require('../models/User'); // Adjust the path as necessary
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // If you're using JWT for token generation

// Login function
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user by username
        const user = await User.findOne({ username });
        if (!user) return res.status(401).json({ message: 'Invalid Credentials' });

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid Credentials' });

        // Generate JWT token (if using JWT)
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: '1h', // Set token expiration time
        });

        // Respond with success
        res.json({ token, user: { id: user._id, username: user.username, role: user.role } });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Other authentication functions (e.g., registration) can go here
