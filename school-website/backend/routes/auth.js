const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User'); // Assuming you have a User model for real users

const router = express.Router();

// Dummy user data for testing
const users = [
  { email: 'parent@example.com', password: 'password123', role: 'parent' },
  { email: 'staff@example.com', password: 'password123', role: 'staff' },
  { email: 'admin@example.com', password: 'password123', role: 'admin' }
];

// @route POST /api/auth/login
// @desc Login User and get token
router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, role } = req.body;  // Extract email, password, and role from request

    try {
      // 1. Check if the user exists in the database
      let user = await User.findOne({ email, role });

      // 2. If no user found in the database, check dummy data for testing purposes
      if (!user) {
        const testUser = users.find(
          (user) => user.email === email && user.password === password && user.role === role // Check both password and role
        );

        if (testUser) {
          // If found in dummy data, return success and dummy token without DB password check
          const payload = { user: { email: testUser.email, role: testUser.role }};
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

      // 4. Create a token payload with user ID and role
      const payload = {
        user: {
          id: user.id,
          role: user.role,
        },
      };

      // 5. Generate JWT token and respond with the token
      jwt.sign(
        payload,
        process.env.JWT_SECRET,  // Make sure JWT_SECRET is in your .env file
        { expiresIn: '1h' },  // Token expires in 1 hour
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
