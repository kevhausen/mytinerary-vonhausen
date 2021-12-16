import axios from "axios";

const itinerariesActions = {
  getItinerariesByCity: (id) => {
    return async (dispatch) => {
      let res = await axios.get("http://localhost:4000/api/itineraries/" + id);
      let info = res.data.response.filtered;
      let loading = false;
      dispatch({ type: "GET_ITINERARIES_BY_CITY", payload: { info, loading } });
    };
  },
  setLoad: () => {
    return (dispatch) => {
      dispatch({ type: "SET_LOAD", payload: true });
    };
  },
  getActivities : (id)=>{
      return async(dispatch)=>{
          console.log('este id me llega desde el component: ' + id)
          let res = await axios.post("http://localhost:4000/api/activities",{id:id})
          console.log(res.data.response)
          dispatch({type: "GET_ACTIVITIES", payload: {itineraryId: id, activityList: res.data.response}})
          
      }
  }
};

export default itinerariesActions;
