const express = require("express");
const router = express.Router();
const citiesControllers = require("../controllers/citiesControllers.js");
const itinerariesControllers = require("../controllers/itinerariesControllers.js");

const {
  getCarrouselCities,
  getAllCities,
  uploadCity,
  deleteCity,
  getCity,
  modifyCity,
} = citiesControllers;
const {
  getItineraries,
  getItinerariesByCityId,
  getItineraryById,
  uploadItinerary,
  modifyItinerary,
  deleteItinerary,
} = itinerariesControllers;

router.route("/carrousel-cities").get(getCarrouselCities);

router.route("/cities").get(getAllCities).post(uploadCity);

router.route("/cities/:id").get(getCity).delete(deleteCity).put(modifyCity);

router.route("/itineraries").get(getItineraries).post(uploadItinerary);

router.route("/itineraries/:city").get(getItinerariesByCityId);

router
  .route("/itinerary/:id")
  .get(getItineraryById)
  .put(modifyItinerary)
  .delete(deleteItinerary);

// router.route('/auth/signUp')
// .post(validator, authControllers.signUpUser)
// .get(authControllers.readUsers)

// router.route('/auth/signIn')
// .post(validator, authControllers.signInUser)

module.exports = router;
