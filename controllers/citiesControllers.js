const City = require("../models/City.js");


const citiesControllers = {
  getAllCities: (req, res) => {
    City.find()
      .then((cities) => res.json({ response: { cities } }))
      .catch((err) => console.log(err));
  },
  getCarrouselCities: (req, res) => {
      City.find()
      .then(cities => {
        const carrouselCities = cities.slice(0, 12);
        res.json({ response: { carrouselCities } });
      })
      .catch((err) => console.log(err))
  },
  getCity: (req, res) => {
    City.findOne({ _id: req.params.id })
    .then((city) =>
      res.json({ response: { city } })
    )
    .catch((err) => console.log(err))
  },
  uploadCity: (req, res) => {
    const city = new City({
      name: req.body.name,
      country: req.body.country,
      image: req.body.image,
      description: req.body.description,
    });
    city
      .save()
      .then(() => res.json({ success: true }))
      .catch((err) => console.log(err));
  },
  deleteCity: (req, res) => {
      City.findOneAndDelete({_id:req.params.id})
      .then(()=> res.json({success:true}))
      .catch(err=> console.log(err))
  },
  modifyCity: (req, res) => {
      City.findOneAndUpdate({_id:req.params.id},{...req.body})
      .then( ()=>res.json({ response: true }))
      .catch(err=> console.log(err))
  }
};

module.exports = citiesControllers;
