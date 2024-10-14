const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');

const router = express.Router();

// Dummy user data for testing (now using 'username' instead of 'email')
const users = [
  { username: 'parent123', password: 'password123', role: 'parent' },
  { username: 'staff123', password: 'password123', role: 'staff' },
  { username: 'admin123', password: 'password123', role: 'admin' }
];

// @route POST /api/auth/login
// @desc Login User and get token
router.post(
  '/login',
  [
    check('username', 'Please include a valid username').exists(), // Changed to 'username'
    check('password', 'Password is required').exists(),
    check('role', 'Role is required').exists()  // Validate that role is sent
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password, role } = req.body;  // Extract username, password, and role

    try {
      // 1. Check if the user exists in the database
      let user = await User.findOne({ username, role });  // Changed from 'email' to 'username'

      // 2. If no user found in the database, check dummy data
      if (!user) {
        const testUser = users.find(
          (user) => user.username === username && user.password === password && user.role === role
        );

        if (testUser) {
          // If found in dummy data, return token
          const payload = { user: { username: testUser.username, role: testUser.role }};
          const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
          return res.json({ token });
        } else {
          return res.status(400).json({ msg: 'Invalid Credentials' });
        }
      }

      // 3. Compare passwords if the user is found in the database
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid Credentials' });
      }

      // 4. Create a token payload
      const payload = {
        user: {
          id: user.id,
          role: user.role,
        },
      };

      // 5. Generate JWT token
      jwt.sign(
        payload,
        process.env.JWT_SECRET, 
        { expiresIn: '1h' },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
