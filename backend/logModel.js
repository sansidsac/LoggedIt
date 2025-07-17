// itemModel.js
const mongoose = require('mongoose');

// Define the item schema
const logModel = new mongoose.Schema({
    activityType: String,
    machineId: String,
    location: String,
    activityDetails: {action:String,description:String,durationMinutes:String,issueId:String},
    metadata: {priority:String,tags:Array},
    name: String,
    designation: String,
    department: String,
    datetime: Date,
  });

// Create the model
const Loggedit = mongoose.model('Loggedit', logModel);

module.exports = Loggedit;
