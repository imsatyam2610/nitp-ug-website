const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv").config();
const helmet = require("helmet");
const morgan = require("morgan");

//imports
const connectDB = require("./config/db.js");
const studentRoutes = require("./routes/studentRoutes.js");

/* CONFIGURATION */
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/student", studentRoutes);

/* MongoDB */
connectDB();

app.listen(process.env.PORT || "9001", () => {
  console.log("Server is running successfully");
});
