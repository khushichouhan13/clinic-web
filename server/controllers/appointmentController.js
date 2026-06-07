const Appointment = require('../models/Appointment');

// @desc    Create new appointment
// @route   POST /api/appointments
// @access  Public
const createAppointment = async (req, res) => {
  try {
    const { name, phone, email, date, time, message } = req.body;

    if (!name || !phone || !email || !date || !time) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    const appointment = await Appointment.create({
      name,
      phone,
      email,
      date,
      time,
      message,
    });

    res.status(201).json({
      success: true,
      message: 'Appointment scheduled successfully!',
      data: appointment,
    });
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error. Please try again later.',
      error: error.message,
    });
  }
};

// @desc    Get all appointments
// @route   GET /api/appointments
// @access  Public (or Protected, but public per requirements)
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: appointments.length,
      data: appointments,
    });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({
      success: false,
      message: 'Server Error. Please try again later.',
      error: error.message,
    });
  }
};

module.exports = {
  createAppointment,
  getAppointments,
};
