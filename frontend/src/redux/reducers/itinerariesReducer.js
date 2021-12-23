const initialState = {
  itineraries: [],
  activities: [],
  isLoading: true,
  comments: [],
};

const itinerariesReducer = (state = initialState, action) => {
  function getUniqueValues(array) {
    let result = [];
    const map = new Map();
    for (const item of array) {
      if (!map.has(item._id)) {
        map.set(item._id, true);
        result.push(item);
      }
    }
    return result;
  }
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

      return {
        ...state,
        activities: getUniqueValues(current),
      };

    case "SET_LIKE":
      let newId = action.payload._id;
      let newList = state.itineraries.map((itinerary) =>
        itinerary._id === newId
          ? { ...itinerary, likes: action.payload.likes }
          : itinerary
      );

      return {
        ...state,
        itineraries: newList,
      };
    case "GET_COMMENTS":
      let commentList = state.comments.concat(action.payload.info);
      return {
        ...state,
        comments: getUniqueValues(commentList),
      };
    case "UPLOAD_COMMENT":
      let list = state.comments.concat(action.payload);

      return {
        ...state,
        comments: getUniqueValues(list),
      };
    case "DELETE_COMMENT":
      let actualComments = state.comments.filter(
        (comment) => comment._id !== action.payload._id
      );
      return {
        ...state,
        comments: actualComments,
      };
    case "EDIT_COMMENT":
      let editedComments = state.comments.map((comment) => {
        if (comment._id === action.payload._id) {
          return { ...comment, message: action.payload.message };
        }
        return comment;
      });
      return {
        ...state,
        comments: editedComments,
      };
    default:
      return state;
  }
};

export default itinerariesReducer;
