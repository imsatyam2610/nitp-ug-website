const express = require("express");
const { createHoliday, getAllHoliday } = require("../controller/holidayCtrl");
const holidayRouter = express.Router();

holidayRouter.post("/create", createHoliday);
holidayRouter.get("/get-all-holidays", getAllHoliday);

module.exports = holidayRouter;
