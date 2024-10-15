// authNewUser.js

const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const NewUser = require('../models/NewUser'); // Adjust the path if necessary

const router = express.Router();

// @route POST /api/new-auth/register
// @desc Register a new user
router.post(
  '/register',
  [
    check('username', 'Username is required').notEmpty(),
    check('password', 'Password is required').notEmpty(),
    check('role', 'Role is required').notEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password, role } = req.body;

    try {
      // Check if the user already exists
      let user = await NewUser.findOne({ username });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      // Create a new user
      user = new NewUser({
        username,
        password,
        role,
      });

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save the user
      await user.save();

      res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
