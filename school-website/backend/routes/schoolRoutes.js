const express = require('express');
const router = express.Router();

// Example routes for the school website
router.get('/about', (req, res) => {
  res.json({ message: 'This is the about page information' });
});

router.get('/admissions', (req, res) => {
  res.json({ message: 'This is the admissions information' });
});

router.get('/courses', (req, res) => {
  res.json({ message: 'List of courses and programs' });
});

module.exports = router;
