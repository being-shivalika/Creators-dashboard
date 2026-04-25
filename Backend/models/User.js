const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  verifyOTP:{
    type: String,
    default: '',
  },
  verifyOTPexpireAt:{
    type: Number,
    default: 0,
  },
  isAccountVerified: {
    type: Boolean,
    default: false,
  },
  resetOTP:{
    type: String,
    default: '',
  },
  resetOTPexpiryAt:{
    type: Number,
    default: 0,
  }
}, { timestamps: true });


const UserModel = mongoose.models.user || mongoose.model("User", userSchema);
module.exports = UserModel;