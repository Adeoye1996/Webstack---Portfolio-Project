const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Accepted', 'Rejected'],
    default: 'Pending'
  }
});

const Admission = mongoose.model('Admission', admissionSchema);

module.exports = Admission;
