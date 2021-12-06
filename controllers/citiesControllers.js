const City = require("../models/City.js");

const citiesControllers = {
  getAllCities: async (req, res) => {
    let cities = [];
    try {
      cities = await City.find();
      res.json({ response: { cities } });
    } catch (error) {
      console.error(error);
    }
  },
  getCarrouselCities: async (req, res) => {
    let cities = [];
    try {
      cities = await City.find();
      let carrouselCities = cities.slice(0, 12);
      res.json({ response: { carrouselCities } });
    } catch (e) {
      console.error(e);
    }
  },
  getCity: async (req, res) => {
    let city = {};
    try {
      city = await City.findOne({ _id: req.params.id });
      res.json({ response: { city } });
    } catch (e) {
      console.error(e);
    }
  },
  uploadCity: async (req, res) => {
    const { name, country, image, description } = req.body;
    try {
      await new City({ name, country, image, description }).save();
      res.json({ sucess: true });
    } catch (e) {
      console.error(e);
    }
  },
  deleteCity: async (req, res) => {
    try {
      await City.findOneAndDelete({ _id: req.params.id });
      res.json({ success: true });
    } catch (e) {
      console.error(e);
    }
  },
  modifyCity: async (req, res) => {
    try {
      await City.findOneAndUpdate({ _id: req.params.id }, { ...req.body });
      res.json({ response: true });
    } catch (e) {
      console.error(e);
    }
  },
};

module.exports = citiesControllers;
