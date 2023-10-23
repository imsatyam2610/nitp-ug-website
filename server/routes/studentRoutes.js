const express = require("express");
const studentRouter = express.Router();
const {
  registerStudent,
  studentAttendanceList,
} = require("../controller/studentCtrl");

// Create a new student
studentRouter.post("/register", registerStudent);
studentRouter.get("/attendance", studentAttendanceList);

module.exports = studentRouter;
