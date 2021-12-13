const initialState = {
  countries: [],
  user: {},
  success: null,
  error: {},
};

const authReducer = (state = initialState, action) => {
  // hacer el switch
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };
    case "SAVE_USER":
        console.log('REDUCER: este es el actio.payload. que guardo en el store?')
        console.log(action.payload)
        // let errors = action.payload.error.map(e=>e.message)
      return {
          ...state,
          success: action.payload.success,
          error:action.payload.error,
          user: action.payload.response

      };
    default:
      return state;
  }
};

export default authReducer;
