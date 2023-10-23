const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  date: Date,
  attendanceList: [
    {
      student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
      isPresent: Boolean,
    },
  ],
});

module.exports = mongoose.model("Attendance", attendanceSchema);
