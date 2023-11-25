const mongoose = require("mongoose");

const noticeboardSchems = new mongoose.Schema(
  {
    department: {
      type: String,
    },
    subject: {
      type: String,
    },
    topic: {
      type: String,
    },
    assignment: {
      type: String,
    },
    submissionDate: {
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

module.exports = mongoose.model("Noticeboard", noticeboardSchems);
