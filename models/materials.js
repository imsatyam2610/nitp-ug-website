const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    class: {
      type: String,
    },
    section: {
      type: String,
    },
    subject: {
      type: String,
    },
    material: {
      type: String,
      enum: [
        "PYQs",
        "Faculty Material",
        "Study Material",
        "Book",
        "PYQ",
        "Senior Material",
      ],
    },
    fileUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Materials", materialSchema);
