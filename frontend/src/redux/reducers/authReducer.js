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
        console.log("REDUCER: esto se guarda en store principal")
        console.log("en el response:" + JSON.stringify(state.response) + ', se guarda: ' + action.payload.response )
        console.log("en el error:" + JSON.stringify(state.error) + ', se guarda: ' + action.payload.error )
        console.log("en el success:" + JSON.stringify(state.success) + ', se guarda: ' + action.payload.success )
          return{
              ...state,
              response:action.payload.info.response,
              error:action.payload.info.error,
              success:action.payload.info.success,
              isLoading: action.payload.loading
          }
    default:
      return state;
  }
};

export default authReducer;
