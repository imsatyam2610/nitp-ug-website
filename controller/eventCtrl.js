const Event = require("../models/event");

const createEvent = async (req, res) => {
  const { title, date, status } = req.body;

  try {
    // Create a new Event instance
    const newEvent = new Event({
      title,
      date,
      status,
    });

    // Save the Event to the database
    const savedEvent = await newEvent.save();

    // Send the saved Event as a response
    res.status(201).json(savedEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllEvent = async (req, res) => {
  try {
    const events = await Event.find();

    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching notices" });
  }
};

module.exports = { createEvent, getAllEvent };
