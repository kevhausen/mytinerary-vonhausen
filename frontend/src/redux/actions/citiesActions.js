import axios from "axios";

const citiesActions = {
  getCities: () => {
    return async (dispatch) => {
      let response = await axios.get(
        "http://localhost:4000/api/carrousel-cities"
      );
      let loading = false
      let info = response.data.response.carrouselCities;
      dispatch({ type: "GET_CARROUSEL_CITIES", payload: {info,loading} });
    };
  },
  getAllCities: () => {
    return async (dispatch) => {
      let response = await axios.get("http://localhost:4000/api/cities");
      let info = response.data.response.cities;
      let loading =false
      dispatch({ type: "GET_ALL_CITIES", payload: {info,loading} });
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
          let loading =false
          console.log('ACTION: se envia al reducer la info de abajo')
          console.log(info)
          dispatch({type: "GET_CITY", payload:{info,loading}})
      }
  },
  setLoad : () =>{
    return (dispatch) =>{
        dispatch({type: "SET_LOAD", payload:true})
    }
}
};
export default citiesActions;
