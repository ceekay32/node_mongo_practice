const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//load env variables
dotenv.config();

//connect to database
connectDB();

// route files
const bootcamps = require("./routes/bootcamps");

const app = express();

//mount routes
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, console.log("server running"));
