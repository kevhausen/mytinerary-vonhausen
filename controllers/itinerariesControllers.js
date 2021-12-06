const Itinerary = require("../models/Itinerary.js");

const itinerariesControllers = {
  getItineraries: async (req, res) => {
    let itineraries = [];
    try {
      itineraries = await Itinerary.find().populate("city");
      res.json({ response: { itineraries } });
    } catch (error) {
      console.error(error);
    }
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
      res.json({ response: { filtered } });
    } catch (e) {
      console.error(e);
    }
  },
  getItineraryById: async (req, res) => {
    let itinerary = {};
    try {
      itinerary = await Itinerary.findOne({ _id: req.params.id });
      res.json({ response: { itinerary } });
    } catch (e) {
      console.error(e);
    }
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
      res.json({ success: true });
    } catch (e) {
      res.json({
        price_error: e.errors.price.message,
        duration_error: e.errors.duration.message,
      });
      console.error(e);
    }
  },
  modifyItinerary: async (req, res) => {
    try {
      await Itinerary.findOneAndUpdate({ _id: req.params.id }, { ...req.body });
      res.json({ response: true });
    } catch (e) {
      console.error(e);
    }
  },
  deleteItinerary: async (req, res) => {
    try {
      await Itinerary.findOneAndDelete({ _id: req.params.id });
      res.json({ success: true });
    } catch (e) {
      console.error(e);
    }
  },
};

module.exports = itinerariesControllers;
