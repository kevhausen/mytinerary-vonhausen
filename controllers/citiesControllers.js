const City = require("../models/City.js");


const citiesControllers = {
  getAllCities: async(req, res) => {
      let cities =[]
      try{
          cities= await City.find()
      }catch(error){
          console.error(error)
      }
      res.json({response:{cities}})
  },
  getCarrouselCities: async(req, res) => {
      let cities =[]
      try{
          cities = await City.find()

      }catch(e){
          console.error(e)
      }
      let carrouselCities = cities.slice(0,12)
      res.json({response:{carrouselCities}})
  },
  getCity: async(req, res) => {
      let city = {}
    try{
        city = await City.findOne({_id:req.params.id})

    }catch(e){
        console.error(e)
    }
    res.json({response:{city}})
  },
  uploadCity: async(req, res) => {
      const {name,country,image,description} = req.body
      try{
          await new City({name,country,image,description}).save()
      }catch(e){
          console.error(e)
      }
      res.json({sucess:true})
  },
  deleteCity: async(req, res) => {
      try{
        await City.findOneAndDelete({_id:req.params.id})

      }catch(e){
          console.error(e)
      }
      res.json({success:true})
  },
  modifyCity: async(req, res) => {
      try{
        await City.findOneAndUpdate({_id:req.params.id},{...req.body})

      }catch(e){
          console.error(e)
      }
      res.json({ response: true })
  }
};

module.exports = citiesControllers;
