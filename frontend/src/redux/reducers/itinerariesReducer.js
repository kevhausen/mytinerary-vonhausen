const initialState = {
  itineraries: [],
  isLoading: true,
  loaded: false,
};

const itinerariesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ITINERARIES_BY_CITY":
      return {
        ...state,
        itineraries: action.payload.info,
        isLoading: action.payload.loading,
      };
    case "SET_LOAD":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default itinerariesReducer;
