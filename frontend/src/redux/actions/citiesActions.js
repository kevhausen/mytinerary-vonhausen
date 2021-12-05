import axios from "axios";

const citiesActions = {
  getCities: () => {
    return async (dispatch) => {
      let response = await axios.get(
        "http://localhost:4000/api/carrousel-cities"
      );
      let info = response.data.response.carrouselCities;
      dispatch({ type: "GET_CARROUSEL_CITIES", payload: info });
    };
  },
  getAllCities: () => {
    return async (dispatch) => {
      let response = await axios.get("http://localhost:4000/api/cities");
      let info = response.data.response.cities;
      dispatch({ type: "GET_ALL_CITIES", payload: info });
    };
  },
  setFilter: (array, inputText) => {
    return (dispatch) => {
      dispatch({ type: "FILTER_CITIES", payload: { array, inputText } });
    };
  },
  getCity : (id) =>{
      return async (dispatch) =>{
          console.log('ACTION: esta llegando esta id' + id + ' desde el component City')
          let res = await axios.get("http://localhost:4000/api/cities/" + id)
          let info = res.data.response.city
          console.log('ACTION: se envia al reducer la info de abajo')
          console.log(info)
          dispatch({type: "GET_CITY", payload:info})
      }
  }
};
export default citiesActions;
