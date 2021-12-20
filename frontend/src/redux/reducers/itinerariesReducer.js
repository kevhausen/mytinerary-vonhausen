const initialState = {
  itineraries: [],
  activities: [],
  isLoading: true,
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
    case "GET_ACTIVITIES":
      let current = state.activities.concat(action.payload.activityList);
      let result = [];
      const map = new Map();
      for (const item of current) {
        if (!map.has(item._id)) {
          map.set(item._id, true);
          result.push(item);
        }
      }
      return {
        ...state,
        activities: result,
      };

      case "SET_LIKE":
          console.log('REDUCER: esta es la lista actual de itinerarios')
          console.log(state.itineraries)
          console.log("REDUCER: esto es el action.payload que se esta insertando en itineraries")
          console.log(action.payload)
          let newId = action.payload._id
          let newList = state.itineraries.map(itinerary=>(itinerary._id === newId? {...itinerary, likes:action.payload.likes}:itinerary))
          console.log("REDUCER: esta es la nueva lista actualizada")
          console.log(newList)
          return{
              ...state,
              itineraries:newList
          }
    default:
      return state;
  }
};

export default itinerariesReducer;
