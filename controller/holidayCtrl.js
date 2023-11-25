const Holiday = require("../models/holiday");

const createHoliday = async (req, res) => {
  const { title, date, status } = req.body;

  try {
    // Create a new holiday instance
    const newHoliday = new Holiday({
      title,
      date,
      status,
    });

    // Save the holiday to the database
    const savedHoliday = await newHoliday.save();

    // Send the saved holiday as a response
    res.status(201).json(savedHoliday);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllHoliday = async (req, res) => {
  try {
    const holidays = await Holiday.find();

    res.status(200).json(holidays);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching notices" });
  }
};

module.exports = { createHoliday, getAllHoliday };
