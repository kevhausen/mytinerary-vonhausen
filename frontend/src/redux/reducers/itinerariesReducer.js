const initialState = {
  itineraries: [],
};

const itinerariesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ITINERARIES_BY_CITY":
      console.log(
        "REDUCER: estoy en itinerariesReducer con:" +
          action.type +
          " y abajo esta el payload"
      );
      console.log(action.payload);
      return {
        ...state,
        itineraries: action.payload,
      };
    default:
      return state;
  }
};

export default itinerariesReducer;
