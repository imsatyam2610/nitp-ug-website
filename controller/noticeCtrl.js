const Notice = require("../models/noticeboard");

const createNotice = async (req, res) => {
  const { department, subject, topic, submissionDate, assignment, status } =
    req.body;
  try {
    const newNotice = new Notice({
      department,
      subject,
      topic,
      submissionDate,
      assignment,
      status,
    });

    const savedNotice = await newNotice.save();

    return res.status(201).json(savedNotice);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllNotice = async (req, res) => {
  try {
    const notices = await Notice.find();

    res.status(200).json(notices);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching notices" });
  }
};

const getNoticesByDepartment = async (req, res) => {
  const { department } = req.params;

  try {
    // Fetch notices based on the department
    const notices = await Notice.find({ department }).select("-status");

    // Check if any notices were found
    if (notices.length === 0) {
      return res
        .status(404)
        .json({ message: "No notices found for the given department" });
    }

    // Send the notices as a response
    res.status(200).json({ notices });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { createNotice, getAllNotice, getNoticesByDepartment };
