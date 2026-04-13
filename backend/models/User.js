const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['owner', 'student', 'newcomer'], required: true },
  college: { type: String },
  phone: { type: String },
  isEmailVerified: { type: Boolean, default: false },
  emailOTP: { type: String },
  emailOTPExpiry: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);