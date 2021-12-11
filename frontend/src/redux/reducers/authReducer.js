const initialState = {
  countries: [],
};

const authReducer = (state = initialState, action) => {
  // hacer el switch
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
