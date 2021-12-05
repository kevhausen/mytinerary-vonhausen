const Itinerary = require("../models/Itinerary.js");

const itinerariesControllers = {
  getItineraries: async (req, res) => {
    let itineraries = [];
    try {
      itineraries = await Itinerary.find().populate("city");
    } catch (error) {
      console.error(error);
    }
    res.json({ response: { itineraries } });
  },
  getItinerariesByCityId: async (req, res) => {
    let itineraries = [];
    let filtered = [];
    try {
      itineraries = await Itinerary.find();
      console.log(req.params.city);
      filtered = itineraries.filter(
        (itinerary) => itinerary.city[0].toString() === req.params.city
      );
    } catch (e) {
      console.error(e);
    }
    res.json({ response: { filtered } });
  },
  getItineraryById: async (req, res) => {
    let itinerary = {};
    try {
      itinerary = await Itinerary.findOne({ _id: req.params.id });
    } catch (e) {
      console.error(e);
    }
    res.json({ response: { itinerary } });
  },
  uploadItinerary: async (req, res) => {
    const {
      userName,
      userImage,
      itineraryName,
      itineraryImage,
      price,
      duration,
      likes,
      hashtags,
      comments,
      city,
    } = req.body;
    try {
      await new Itinerary({
        userName,
        userImage,
        itineraryName,
        itineraryImage,
        price,
        duration,
        likes,
        hashtags,
        comments,
        city,
      }).save();
    } catch (e) {
      console.error(e);
    }
    res.json({ success: true });
  },
  modifyItinerary: async (req, res) => {
    try {
      await Itinerary.findOneAndUpdate({ _id: req.params.id }, { ...req.body });
    } catch (e) {
      console.error(e);
    }
    res.json({ response: true });
  },
  deleteItinerary: async (req, res) => {
    try {
      await Itinerary.findOneAndDelete({ _id: req.params.id });
    } catch (e) {
      console.error(e);
    }
    res.json({ success: true });
  },
};

module.exports = itinerariesControllers;
