const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

//Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));





module.exports = app;