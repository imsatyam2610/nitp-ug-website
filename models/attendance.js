const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  date: Date,
  department: String,
  section: String,
  group: String,
  attendanceList: [
    {
      student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
      isPresent: Boolean,
    },
  ],
});

module.exports = mongoose.model("Attendance", attendanceSchema);
