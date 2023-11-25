const express = require("express");
const { registerEmployee } = require("../controller/employeeCtrl");
const employeeRouter = express.Router();

employeeRouter.post("/create", registerEmployee);

module.exports = employeeRouter;
