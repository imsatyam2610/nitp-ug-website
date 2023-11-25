const express = require("express");
const studentRouter = express.Router();
const {
  registerStudent,
  studentAttendanceList,
  getStudentFaculty,
} = require("../controller/studentCtrl");

// Create a new student
studentRouter.post("/register", registerStudent);
studentRouter.get("/attendance", studentAttendanceList);
studentRouter.get("/get-student-faculty", getStudentFaculty);

module.exports = studentRouter;
