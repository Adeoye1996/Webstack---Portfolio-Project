const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');

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
    check('role', 'Role is required').exists()  // Validate that role is sent
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, role } = req.body;  // Extract email, password, and role

    try {
      // 1. Check if the user exists in the database
      let user = await User.findOne({ email, role });

      // 2. If no user found in the database, check dummy data
      if (!user) {
        const testUser = users.find(
          (user) => user.email === email && user.password === password && user.role === role
        );

        if (testUser) {
          // If found in dummy data, return token
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
