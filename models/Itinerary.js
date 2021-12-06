const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  userName: { type: String, require: true },
  userImage: { type: String, require: true },
  itineraryName: { type: String, require: true },
  itineraryImage: { type: String, require: true },
  price: {
    type: Number,
    min: [1, "Price value must be at least 1, got {VALUE}"],
    max: [5, "Price value cannot be over 5, got {VALUE}"],
    require: true,
  },
  duration: {
    type: Number,
    min: [1, "Duration value must be at least 1, got {VALUE}"],
    require: true,
  },
  likes: { type: Number, default: 0 },
  hashtags: { type: [String], require: true },
  comments: { type: [String] },
  city: { type: [{ type: mongoose.Types.ObjectId, ref: "city" }] },
});

const Itinerary = mongoose.model("itinerary", itinerarySchema);

module.exports = Itinerary;
