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
  getActivities: (id, activities) => {
    return async (dispatch) => {
      let idList = [
        ...new Set(activities.map((activity) => activity.itinerary[0]._id)),
      ];

      let res = [];
      if (idList.includes(id)) {
        res = activities;
      } else {
        let resDb = await axios.post("http://localhost:4000/api/activities", {
          id: id,
        });
        res = resDb.data.response;
      }

      dispatch({
        type: "GET_ACTIVITIES",
        payload: { itineraryId: id, activityList: res },
      });
    };
  },
};

export default itinerariesActions;
