const mongoose = require("mongoose");

const numtableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  destiny_number: {
    type: Number,
    required: true,
  },
  radical_number: {
    type: Number,
    required: true,
  },
  name_number: {
    type: String,
    required: true,
  },
  evil_num: {
    type: String,
    required: true,
  },
  fav_color: {
    type: String,
    required: true,
  },
  fav_day: {
    type: String,
    required: true,
  },
  fav_god: {
    type: String,
    required: true,
  },
  fav_mantra: {
    type: String,
    required: true,
  },
  fav_metal: {
    type: String,
    required: true,
  },
  fav_stone: {
    type: String,
    required: true,
  },
  fav_substone: {
    type: String,
    required: true,
  },
  friendly_num: {
    type: String,
    required: true,
  },
  neutral_num: {
    type: String,
    required: true,
  },
  radical_num: {
    type: String,
    required: true,
  },
  radical_ruler: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("db_numtable", numtableSchema);