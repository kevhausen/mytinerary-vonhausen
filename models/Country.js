const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  name: { type: String, require: true },
  continent: { type: String, require: true },
});

const Country = mongoose.model("country", countrySchema);

module.exports = Country;