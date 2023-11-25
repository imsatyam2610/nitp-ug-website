const express = require("express");
const { createRoutine, getAllRoutine } = require("../controller/routineCtrl");
const routineRouter = express.Router();

routineRouter.post("/create", createRoutine);
routineRouter.get("/get-all-routine", getAllRoutine);

module.exports = routineRouter;
