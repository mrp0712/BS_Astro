const mongoose = require("mongoose");

const planetSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  month: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  hour: {
    type: String,
    required: true,
  },
  min: {
    type: String,
    required: true,
  },
  lat: {
    type: String,
    required: true,
  },
  lon: {
    type: String,
    required: true,
  },
  tzone: {
    type: String,
    required: true,
  },    
  planet:[{
    type: Array
  }]
});

module.exports = mongoose.model("planet", planetSchema);