const Student = require("../models/students");

/* Add a New Student */
const registerStudent = async (req, res) => {
  const { email, roll } = req.body;
  const findStudent = await Student.findOne({
    $or: [{ email: email }, { roll: roll }],
  });
  if (findStudent) {
    return res.status(409).json({
      status: false,
      message: "A Student Already Exists with this Email",
    });
  }
  if (!findStudent) {
    const createStudent = await Student.create(req.body);
    res.status(200).json({
      status: true,
      message: "Student Added Successfully!",
      createStudent,
    });
  } else {
    res.status(500).json({
      status: false,
      message: "Failed to Add Student",
    });
  }
};

/* Get Student details based on Class Section Group */
const studentAttendanceList = async (req, res) => {
  try {
    const { studentClass, section, group } = req.query;
    // Create a filter object based on the provided options
    const filter = {};
    if (studentClass) filter.class = studentClass;
    if (section) filter.section = section;
    if (group) filter.group = group;

    // Query the database with the filter
    const students = await Student.find(filter).select("name roll");

    if (!students) {
      return res
        .status(404)
        .json({ message: "No students found for the given criteria" });
    }

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getStudentFaculty = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json(students);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching students" });
  }
};
module.exports = {
  registerStudent,
  studentAttendanceList,
  getStudentFaculty,
};
