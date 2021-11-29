const express = require('express')
const router = express.Router()
const citiesControllers = require("../controllers/citiesControllers.js")



router.route("/carrousel-cities").get(citiesControllers.getCarrouselCities)

router.route("/cities").get(citiesControllers.getAllCities)

router.route("/cities/:id").get(citiesControllers.getCityById)

module.exports = router
