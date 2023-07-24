const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      index: true,
      required: true,
      unique: true,
      uniqueCaseInsensitive: false,
    },
    password: { type: String, index: true },
    firstName: { type: String },
    lastName: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', schema)
