const express = require('express');
const router = express.Router();
const Log = require('./logModel');

// Create a new log (POST)
router.post('/', async (req, res) => {
  const newLog = new Log(req.body);
  try {
    const savedLog = await newLog.save();
    res.status(201).json(savedLog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all logs (GET)
router.get('/', async (req, res) => {
  try {
    const logs = await Log.find();
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one log by ID (GET)
router.get('/:id', async (req, res) => {
  try {
    const log = await Log.findById(req.params.id);
    if (!log) {
      return res.status(404).json({ message: 'Log not found' });
    }
    res.json(log);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;