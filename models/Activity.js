const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  name: { type: String, require: true },
  image: { type: String, require: true },
  description: { type: String },
  itinerary : { type: [{ type: mongoose.Types.ObjectId, ref: "itinerary" }] },
  duration: {type: Number}

});

const Activity = mongoose.model("activity", activitySchema);

module.exports = Activity;