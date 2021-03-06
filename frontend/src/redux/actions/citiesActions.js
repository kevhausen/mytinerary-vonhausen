import axios from "axios";

const citiesActions = {
  getCities: () => {
    return async (dispatch) => {
      let response = await axios.get(
        "https://mytinerary-vonhausen.herokuapp.com/api/carrousel-cities"
      );
      let loading = false;
      let info = response.data.response.carrouselCities;
      dispatch({ type: "GET_CARROUSEL_CITIES", payload: { info, loading } });
    };
  },
  getAllCities: () => {
    return async (dispatch) => {
      let response = await axios.get("https://mytinerary-vonhausen.herokuapp.com/api/cities");
      let info = response.data.response.cities;
      let loading = false;
      dispatch({ type: "GET_ALL_CITIES", payload: { info, loading } });
    };
  },
  setFilter: (array, inputText) => {
    return (dispatch) => {
      dispatch({ type: "FILTER_CITIES", payload: { array, inputText } });
    };
  },
  getCity: (id) => {
    return async (dispatch) => {
      let res = await axios.get("https://mytinerary-vonhausen.herokuapp.com/api/cities/" + id);
      let info = res.data.response.city;
      let loading = false;
      dispatch({ type: "GET_CITY", payload: { info, loading } });
    };
  },
  setLoad: () => {
    return (dispatch) => {
      dispatch({ type: "SET_LOAD", payload: true });
    };
  },
};
export default citiesActions;
