const express = require("express");
const {
  createAttendance,
  attendanceReport,
} = require("../controller/attendanceCtrl");
const studentRouter = express.Router();

studentRouter.post("/add-attendance", createAttendance);
studentRouter.get("/attendance-report", attendanceReport);

module.exports = studentRouter;
