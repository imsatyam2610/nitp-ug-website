const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");

//imports
const connectDB = require("./config/db.js");
const studentRoutes = require("./routes/studentRoutes.js");
const materialRoutes = require("./routes/materialRoutes.js");
const noticeRoutes = require("./routes/noticeRoutes.js");
const employeeRoutes = require("./routes/employeeRoutes.js");
const holidayRoutes = require("./routes/holidayRoutes.js");
const eventRoutes = require("./routes/eventRoutes.js");
const syllabusRoutes = require("./routes/syllabusRoutes.js");
const routineRoutes = require("./routes/routineRoutes.js");
const attendanceRoutes = require("./routes/attendanceRoutes.js");

/* CONFIGURATION */
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/student", studentRoutes);
app.use("/api/material", materialRoutes);
app.use("/api/notice", noticeRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/holiday", holidayRoutes);
app.use("/api/event", eventRoutes);
app.use("/api/syllabus", syllabusRoutes);
app.use("/api/routine", routineRoutes);
app.use("/api/attendance", attendanceRoutes);

/* MongoDB */
connectDB();

app.listen(process.env.PORT || "9001", () => {
  console.log("Server is running successfully");
});
