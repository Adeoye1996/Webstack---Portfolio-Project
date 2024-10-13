const express = require('express');
const router = express.Router();

// Import the controllers for handling requests
const { getAllCourses, createCourse } = require('../controllers/courseController');
const { getAllAdmissions, createAdmission } = require('../controllers/admissionController');

// Route to fetch all courses
router.get('/courses', getAllCourses);

// Route to create a new course
router.post('/courses', createCourse);

// Route to fetch all admissions
router.get('/admissions', getAllAdmissions);

// Route to create a new admission
router.post('/admissions', createAdmission);

[[I

module.exports = router;
