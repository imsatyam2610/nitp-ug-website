const mongoose = require("mongoose");

const routineSchems = new mongoose.Schema(
  {
    department: {
      type: String,
    },
    section: {
      type: String,
    },
    day: {
      type: String,
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
    subject: {
      type: String,
    },
    time: {
      type: [String],
    },
    teacher: {
      type: String,
    },
    classroom: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Routine", routineSchems);
