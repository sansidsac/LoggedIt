const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const logRoute = require('./logRoute');


const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error: ", err));


// Use the log route
app.use('/logs', logRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});