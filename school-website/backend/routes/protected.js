const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

// @route GET /api/protected/admin
// @desc Admin-only route
// @access Private
router.get('/admin', auth, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Access denied' });
  }
  res.send('Admin Access Granted');
});

// @route GET /api/protected/parent
// @desc Parent-only route
// @access Private
router.get('/parent', auth, (req, res) => {
  if (req.user.role !== 'parent') {
    return res.status(403).json({ msg: 'Access denied' });
  }
  res.send('Parent Access Granted');
});

// @route GET /api/protected/staff
// @desc Staff-only route
// @access Private
router.get('/staff', auth, (req, res) => {
  if (req.user.role !== 'staff') {
    return res.status(403).json({ msg: 'Access denied' });
  }
  res.send('Staff Access Granted');
});

module.exports = router;
