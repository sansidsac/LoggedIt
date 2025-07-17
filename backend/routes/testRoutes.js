const express = require('express');
const Loggedit = require('../logModel'); // Adjust the path if necessary
const router = express.Router();

// Create a new log entry
router.post('/', async (req, res) => {
    const { heading, description, name, designation, department, datetime } =
      req.body;
  
    if (!heading || !description) {
      return res.status(400).json({ message: "Heading and text are required" });
    }
  
    const formattedData = await getOpenAiResponse(heading, description);
    // process.stdout.write(typeof formattedData);
    if (formattedData && typeof formattedData === "object") {
      formattedData.name = name;
      formattedData.designation = designation;
      formattedData.department = department;
      formattedData.datetime = datetime;
    } else {
      return res.status(500).json({ message: "Error formatting data" });
    }
    // process.stdout.write(JSON.stringify(formattedData));
  
    const newLog = new Loggedit({ formattedData });
  
    newLog
      .save()
      .then(() => res.status(201).json({ message: "Log saved successfully" }))
      .catch((err) =>
        res.status(500).json({ message: "Error saving log", error: err })
      );
  });
  
  // Get all log entries
  router.get('/', async (req, res) => {
    try {
      const logs = await Loggedit.find();
      res.status(200).json(logs);
    } catch (error) {
      res.status(500).json({ message: "Error fetching log entries", error });
    }
  });
  
  // Update a log entry
  router.put('/', async (req, res) => {
    const { id, ...updateData } = req.body;
    try {
      const updatedLog = await Loggedit.findByIdAndUpdate(id, updateData, { new: true });
      if (!updatedLog) {
        return res.status(404).json({ message: "Log entry not found" });
      }
      res.status(200).json(updatedLog);
    } catch (error) {
      res.status(400).json({ message: "Error updating log entry", error });
    }
  });
  
  // Delete all log entries
  router.delete('/', async (req, res) => {
    try {
      await Loggedit.deleteMany({});
      res.status(200).json({ message: "All log entries deleted" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting log entries", error });
    }
  });
  
  module.exports = router;

module.exports = router;