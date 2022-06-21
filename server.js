const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
});

app.get("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Get bootcamp ${req.params.id} ` });
});

app.post("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ success: true, msg: "Create bootcamp" });
});

app.put("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id} ` });
});

app.delete("/api/v1/bootcamps/:id", (req, res) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("server running"));
