const mongoose = require("mongoose");

const Manglik_Schema = new mongoose.Schema({
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
  },lon: {
    type: String,
    required: true,
  },
  tzone: {
    type: String,
    required: true,
  },
  
  // Manglik output schema
  male: {
    manglik_present_rule: {
      based_on_aspect: [{
        type: String,
        required: true
      }],
      based_on_house: [{
        type: String,
        required: true
      }]
    },
    
    manglik_cancel_rule: [{
      type: String,
      required: true
    }],
    
    is_mars_manglik_cancelled: {
        type: String,
        required: true
    },

    manglik_status: {
      type: String,
      required: true
    },

    percentage_manglik_present: {
      type: String,
      required: true
    },

    percentage_manglik_after_cancellation: {
      type: String,
      required: true
    },

    manglik_report: {
      type: String,
      required: true
    },

    is_present: {
      type: String,
      required: true
    },  
  },

  female: { // female
    manglik_present_rule: {
      based_on_aspect: [{
        type: String,
        required: true
      }],
      based_on_house: [{
        type: String,
        required: true
      }]
    },
    
    manglik_cancel_rule: [{
      type: String,
      required: true
    }],
    
    is_mars_manglik_cancelled: {
        type: String,
        required: true
    },

    manglik_status: {
      type: String,
      required: true
    },

    percentage_manglik_present: {
      type: String,
      required: true
    },

    percentage_manglik_after_cancellation: {
      type: String,
      required: true
    },

    manglik_report: {
      type: String,
      required: true
    },

    is_present: {
      type: String,
      required: true
    },  
  },

  conclusion:{
    match:{
      type: String,
      required: true
    },
    report:{
      type: String,
      required: true
    }
  }
});

module.exports = mongoose.model("db_manglik", Manglik_Schema);