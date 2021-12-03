const Itinerary = require("../models/Itinerary.js");

const itinerariesControllers = {
    getItineraries: (req,res) =>{
//     consultar (GET) todos los itinerarios 
    },
    getCityItineraries: (req,res) =>{
// b. consultar itinerarios de una ciudad en particular 
    },
    getItineraryById: (req,res) =>{
// c. consultar un itinerario en particular (por id) 
    },
    uploadItinerary: (req,res) =>{
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
