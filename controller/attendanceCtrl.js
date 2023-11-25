const Attendance = require("../models/attendance");
const Student = require("../models/students");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const createAttendance = async (req, res) => {
  try {
    const { date, department, section, group, attendanceList } = req.body;
    const newAttendance = new Attendance({
      date,
      department,
      section,
      group,
      attendanceList,
    });

    const savedAttendance = await newAttendance.save();
    res.status(201).json(savedAttendance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const attendanceReport = async (req, res) => {
  try {
    // Fetch data based on query parameters (month, year, department, section, group)
    const { date, month, year, department, section, group } = req.query;
    const startDate = new Date(`${year}-${months.indexOf(month) + 1}-${date}`);
    console.log("Start Date:", startDate);
    const endDate = new Date(
      new Date(startDate).setMonth(startDate.getMonth() + 1) - 1
    );
    console.log("End Date:", endDate);

    const attendanceData = await Attendance.find({
      date: { $gte: startDate, $lte: endDate },
      department,
      section,
      group,
    }).populate({
      path: "attendanceList.student",
      model: "Student",
    });

    const formattedData = attendanceData.flatMap((record) => {
      return record.attendanceList.map((attendance) => ({
        studentName: attendance.student.name, // Assuming 'name' is a field in the Student model
        studentRoll: attendance.student.roll,
        date: record.date.toISOString(), // Ensure date is in ISO format
        isPresent: attendance.isPresent,
      }));
    });
    console.log(formattedData);

    res.json(formattedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createAttendance, attendanceReport };
