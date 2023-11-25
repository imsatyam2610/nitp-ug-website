const Syllabus = require("../models/syllabus");

const createSyllabus = async (req, res) => {
  const { department, section, title, subject, fileUrl } = req.body;

  try {
    // Create a new Syllabus instance
    const newSyllabus = new Syllabus({
      department,
      section,
      title,
      subject,
      fileUrl,
    });

    // Save the Syllabus to the database
    const savedSyllabus = await newSyllabus.save();

    // Send the saved Syllabus as a response
    res.status(201).json(savedSyllabus);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllSyllabus = async (req, res) => {
  try {
    const Syllabuss = await Syllabus.find();

    res.status(200).json(Syllabuss);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching notices" });
  }
};

module.exports = { createSyllabus, getAllSyllabus };
