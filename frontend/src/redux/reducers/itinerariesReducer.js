const initialState = {
  itineraries: [],
  isLoading : true,
  loaded:false
};

console.log('STORE PRINCIPAL: ISLOADING? '+initialState.isLoading)

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
        itineraries: action.payload.info,
        isLoading : action.payload.loading
      };
    case "SET_LOAD":
        return{
            ...state,
            isLoading:action.payload
        }
    default:
      return state;
  }
};

export default itinerariesReducer;
