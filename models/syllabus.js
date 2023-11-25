const mongoose = require("mongoose");

const syllabusSchems = new mongoose.Schema(
  {
    department: {
      type: String,
    },
    section: {
      type: String,
    },
    title: {
      type: String,
    },
    subject: {
      type: String,
    },
    fileUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Syllabus", syllabusSchems);
