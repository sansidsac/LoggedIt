// itemModel.js
const mongoose = require('mongoose');

// Define the item schema
const logModel = new mongoose.Schema({
    heading: String,
    description: String,
    name: String,
    designation: String,
    department: String,
    datetime: Date,
  });

// Create the model
const Loggedit = mongoose.model('Loggedit', logModel);

module.exports = Loggedit;
