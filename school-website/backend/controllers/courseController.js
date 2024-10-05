const Course = require('../models/Course');

// Get all courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch courses' });
  }
};

// Add a new course
const createCourse = async (req, res) => {
  const { title, description, duration, fee } = req.body;
  try {
    const newCourse = new Course({ title, description, duration, fee });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ message: 'Failed to add course' });
  }
};

module.exports = { getAllCourses, createCourse };
