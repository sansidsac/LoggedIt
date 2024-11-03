const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const logRoute = require('./logRoute');

const getOpenAiResponse = require("./parseInput.js");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error: ", err));

// Define a Mongoose schema and model

const Loggedit = require("./logModel.js");

// Sample route
app.post("/input", async (req, res) => {
  const { heading,description, name, designation, department, datetime } = req.body;

  if (!heading || !description) {
    return res.status(400).json({ message: "Heading and text are required" });
  }

  const formattedData = await getOpenAiResponse(heading, description);
  formattedData.name = name;
  formattedData.designation = designation;
  formattedData.department = department;
  formattedData.datetime = datetime;
  process.stdout.write(formattedData);

  // const newLog = new Loggedit({ formattedData });

  // newLog
  //   .save()
  //   .then(() => res.status(201).json({ message: "Log saved successfully" }))
  //   .catch((err) =>
  //     res.status(500).json({ message: "Error saving log", error: err })
  //   );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
