const express = require("express");
const { createEvent, getAllEvent } = require("../controller/eventCtrl");
const eventRouter = express.Router();

eventRouter.post("/create", createEvent);
eventRouter.get("/get-all-events", getAllEvent);

module.exports = eventRouter;
