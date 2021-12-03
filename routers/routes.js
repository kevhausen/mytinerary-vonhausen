const express = require('express')
const router = express.Router()
const citiesControllers = require("../controllers/citiesControllers.js")
const itinerariesControllers = require("../controllers/itinerariesControllers.js")

const {getCarrouselCities,getAllCities,uploadCity,deleteCity,getCity,modifyCity} = citiesControllers
const {getItineraries, getCityItineraries,getItineraryById,uploadItinerary,modifyItinerary,deleteItinerary} = itinerariesControllers



router.route("/carrousel-cities")
.get(getCarrouselCities)

router.route("/cities")
.get(getAllCities)
.post(uploadCity)

router.route("/cities/:id")
.get(getCity)
.delete(deleteCity)
.put(modifyCity)

router.route("/itineraries")
.get(getItineraries)
.post(uploadItinerary)

router.route("/itineraries/:city")
.get(getCityItineraries)

router.route("/itineraries/:id")
.get(getItineraryById)
.put(modifyItinerary)
.delete(deleteItinerary)

module.exports = router
