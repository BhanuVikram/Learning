const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  "ID Nation": {
    type: String,
    required: true,
  },
  Nation: {
    type: String,
    required: true,
  },
  "ID Year": {
    type: Number,
    required: true,
  },
  Year: {
    type: String,
    required: true,
  },
  Population: {
    type: Number,
    required: true,
  },
  "Slug Nation": {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Data", dataSchema);
