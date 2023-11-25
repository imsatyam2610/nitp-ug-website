const express = require("express");
const {
  createNotice,
  getAllNotice,
  getNoticesByDepartment,
} = require("../controller/noticeCtrl");
const noticeRouter = express.Router();

noticeRouter.post("/create", createNotice);
noticeRouter.get("/get-all-notices", getAllNotice);
noticeRouter.get("/getnotice/:department", getNoticesByDepartment);

module.exports = noticeRouter;
