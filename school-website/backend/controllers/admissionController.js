const Admission = require('../models/Admission');

// Get all admissions
const getAllAdmissions = async (req, res) => {
  try {
    const admissions = await Admission.find();
    res.status(200).json(admissions);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch admissions' });
  }
};

// Add a new admission
const createAdmission = async (req, res) => {
  const { studentName, age, course } = req.body;
  try {
    const newAdmission = new Admission({ studentName, age, course });
    await newAdmission.save();
    res.status(201).json(newAdmission);
  } catch (error) {
    res.status(400).json({ message: 'Failed to add admission' });
  }
};

module.exports = { getAllAdmissions, createAdmission };
