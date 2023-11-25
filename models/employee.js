const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    employee_role: {
      type: String,
      enum: ["Admin", "Faculty"],
    },
    email: {
      type: String,
      unique: true,
    },
    department: {
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
    employee_image: {
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

employeeSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

employeeSchema.methods.isPasswordMatched = async function (enteredpassword) {
  return await bcrypt.compare(enteredpassword, this.password);
};

module.exports = mongoose.model("Employee", employeeSchema);
