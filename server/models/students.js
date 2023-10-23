const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    roll: {
      type: Number,
      unique: true,
    },
    class: {
      type: String,
    },
    section: {
      type: String,
      enum: ["A", "B"],
    },
    group: {
      type: String,
      enum: ["A1", "A2", "B1", "B2"],
    },
    student_image: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    isblocked: {
      type: Boolean,
      default: false,
    },
    tokens: [{ type: Object }],
    passwordChangedAt: Date,
  },
  {
    timestamps: true,
  }
);

studentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

studentSchema.methods.isPasswordMatched = async function (enteredpassword) {
  return await bcrypt.compare(enteredpassword, this.password);
};

module.exports = mongoose.model("Student", studentSchema);
