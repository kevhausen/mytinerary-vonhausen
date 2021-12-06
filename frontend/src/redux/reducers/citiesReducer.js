const initialState = {
  cities: [],
  carrouselCities: [],
  auxArray: [],
  stringFilter: "",
  city: {},
  isLoading: true,
};
const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CARROUSEL_CITIES":
      return {
        ...state,
        carrouselCities: action.payload.info,
        isLoading: action.payload.loading,
      };
    case "GET_ALL_CITIES":
      return {
        ...state,
        cities: action.payload.info,
        auxiliar: action.payload.info,
        isLoading: action.payload.loading,
      };
    case "FILTER_CITIES":
      const filteredCities = action.payload.array.filter(
        (city) =>
          city.name.toLowerCase().startsWith(action.payload.inputText) ||
          city.country.toLowerCase().startsWith(action.payload.inputText)
      );
      return {
        ...state,
        cities: filteredCities,
      };
    case "GET_CITY":
      return {
        ...state,
        city: action.payload.info,
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

export default citiesReducer;
