const Routine = require("../models/routine");

const createRoutine = async (req, res) => {
  const { department, section, day, subject, time, teacher, classroom } =
    req.body;

  try {
    // Create a new routine instance
    const newRoutine = new Routine({
      department,
      section,
      day,
      subject,
      time,
      teacher,
      classroom,
    });

    // Save the routine to the database
    const savedRoutine = await newRoutine.save();

    // Send the saved routine as a response
    res.status(201).json(savedRoutine);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllRoutine = async (req, res) => {
  try {
    const routine = await Routine.find();

    res.status(200).json(routine);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching notices" });
  }
};

module.exports = { createRoutine, getAllRoutine };
