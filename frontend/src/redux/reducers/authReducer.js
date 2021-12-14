const initialState = {
  countries: [],
  response: null,
  success: null,
  error: null,
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };
    case "SAVE_USER":
      return {
        ...state,
        success: action.payload.info.success,
        error: action.payload.info.error,
        response: action.payload.info.response,
        isLoading: action.payload.loading,
      };
    case "SET_LOAD":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "SIGN_IN":
      return {
        ...state,
        response: action.payload.info.response,
        error: action.payload.info.error,
        success: action.payload.info.success,
        isLoading: action.payload.loading,
      };
    case "LOG_OUT":
      return {
        ...initialState,
      };

    case "IS_AUTH":
      return {
        response: action.payload,
      };
    case "RESET_ERROR":
      return {
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
