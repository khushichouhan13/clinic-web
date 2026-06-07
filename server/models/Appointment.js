const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Patient name is required'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
    },
    date: {
      type: String, // String representation or Date
      required: [true, 'Preferred date is required'],
    },
    time: {
      type: String,
      required: [true, 'Preferred time is required'],
    },
    message: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true, // Auto-creates createdAt and updatedAt
  }
);

module.exports = mongoose.model('Appointment', appointmentSchema);
