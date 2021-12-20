const express = require("express");
const router = express.Router();
const citiesControllers = require("../controllers/citiesControllers.js");
const itinerariesControllers = require("../controllers/itinerariesControllers.js");
const authControllers = require("../controllers/authControllers.js");
const activityControllers = require("../controllers/activityControllers.js")
const interactionsControllers = require("../controllers/interactionsControllers")
const validator = require("../config/validator")
const passport = require('../config/passport');

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

const { getCountries, uploadCountries, saveUser, getUsers, signIn , modifyUser, authUser} = authControllers;
const {uploadActivity, getActivity,modifyActivity,getActivitiesByItinerary} = activityControllers
const { setLike} = interactionsControllers

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

router.route("/auth/signup").get(getUsers).post(validator,saveUser).put(modifyUser)
router.route("/auth/signin").post(signIn)

router.route("/auth/user").get(passport.authenticate('jwt',{session:false}), authUser)

router.route("/countries").get(getCountries).post(uploadCountries);
router.route("/activity").post(uploadActivity)
router.route("/activities").post(getActivitiesByItinerary)
router.route("/activity/:id").get(getActivity).put(modifyActivity)

router.route("/interaction/likes").put(setLike)


module.exports = router;
