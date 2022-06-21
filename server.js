const express = require("express");
const dotenv = require("dotenv");

// route files
const bootcamps = require("./routes/bootcamps");

//load env variables
dotenv.config();

const app = express();

//mount routes
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log("server running"));
