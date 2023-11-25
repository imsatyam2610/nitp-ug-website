const mongoose = require("mongoose");

const holidaySchems = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    date: {
      type: Date,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Holiday", holidaySchems);
