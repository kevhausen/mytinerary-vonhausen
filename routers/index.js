const express = require('express')
const router = express.Router()
const citiesControllers = require("../controllers/citiesControllers.js")

const {getCarrouselCities,getAllCities,uploadCity,deleteCity,getCity,modifyCity} = citiesControllers



router.route("/carrousel-cities")
.get(getCarrouselCities)

router.route("/cities")
.get(getAllCities)
.post(uploadCity)

router.route("/cities/:id")
.get(getCity)
.delete(deleteCity)
.put(modifyCity)

module.exports = router
