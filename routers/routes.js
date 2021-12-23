const express = require("express");
const Router = express.Router();
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
const { setLike,getCommentsByItineraryId,postComment,modifyComment, editComment, deleteComment, getCommentsByUser} = interactionsControllers

Router.route("/carrousel-cities").get(getCarrouselCities);

Router.route("/cities").get(getAllCities).post(uploadCity);

Router.route("/cities/:id").get(getCity).delete(deleteCity).put(modifyCity);

Router.route("/itineraries").get(getItineraries).post(uploadItinerary);

Router.route("/itineraries/:city").get(getItinerariesByCityId);

Router
  .route("/itinerary/:id")
  .get(getItineraryById)
  .put(modifyItinerary)
  .delete(deleteItinerary);

Router.route("/auth/signup").get(getUsers).post(validator,saveUser).put(modifyUser)
Router.route("/auth/signin").post(signIn)

Router.route("/auth/user").get(passport.authenticate('jwt',{session:false}), authUser)

Router.route("/countries").get(getCountries).post(uploadCountries);
Router.route("/activity").post(uploadActivity)
Router.route("/activities").post(getActivitiesByItinerary)
Router.route("/activity/:id").get(getActivity).put(modifyActivity)

Router.route("/interaction/likes").put(setLike)

Router.route("/interaction/comments")
  .post(postComment)
  .put(editComment)
  

Router.route("/interaction/comments/:itineraryId").get(getCommentsByItineraryId).delete(deleteComment)

Router.route("/interaction/comments/:userId").get(getCommentsByUser)


module.exports = Router;
