const express = require("express");
const {
  createSyllabus,
  getAllSyllabus,
} = require("../controller/syllabusCtrl");
const syllabusRouter = express.Router();

syllabusRouter.post("/create", createSyllabus);
syllabusRouter.get("/get-all-syllabus", getAllSyllabus);

module.exports = syllabusRouter;
