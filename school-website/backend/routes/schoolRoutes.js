const express = require('express');
const router = express.Router();
const { getAllCourses, createCourse } = require('../controllers/courseController');
const { getAllAdmissions, createAdmission } = require('../controllers/admissionController');

// Courses routes
router.get('/courses', getAllCourses);
router.post('/courses', createCourse);

// Admissions routes
router.get('/admissions', getAllAdmissions);
router.post('/admissions', createAdmission);

module.exports = router;
