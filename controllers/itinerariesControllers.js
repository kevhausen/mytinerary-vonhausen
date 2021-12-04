const Itinerary = require("../models/Itinerary.js");

// const itinerarySchema = new mongoose.Schema({
//     name: {type: String, require: true},
//     image: {type:String, require: true},
//     price: {type:Number, require: true},
//     duration: {type:Number, require: true},
//     likes: {type:Number, default:0},
//     hashtags: {type:[String], require:true},
//     comments:{type:[String]}
// })

const itinerariesControllers = {
    getItineraries: async (req,res) =>{
        let itineraries =[]
      try{
          cities= await City.find()
      }catch(error){
          console.error(error)
      }
      res.json({response:{cities}})
//     consultar (GET) todos los itinerarios 
    },
    getCityItineraries: (req,res) =>{
// b. consultar itinerarios de una ciudad en particular 
    },
    getItineraryById: (req,res) =>{
// c. consultar un itinerario en particular (por id) 
    },
    uploadItinerary: async (req,res) =>{
        const itinerary = new Itinerary({
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            duration: req.body.duration,
            likes: req.body.likes,
            hashtags: req.body.hashtags,
            comments : req.body.comments,
            
          });
          try{
              await itinerary.save()
          }catch(e){
              console.error(e)
          }
          res.json({sucess:true})

// d. cargar un nuevo itinerario 
    },
    modifyItinerary: (req,res) =>{
// e. modificar un itinerario 
    },
    deleteItinerary: (req,res) =>{
// f. borrar un itinerario
    }
}

module.exports = itinerariesControllers;
