const initialState = {
    cities : [],
    carrouselCities :[],
    auxArray:[],
    stringFilter : '',
    city : {}
}
const citiesReducer = (state = initialState, action) =>{
    switch(action.type){
        case "GET_CARROUSEL_CITIES":
            console.log('REDUCER: estoy en citiesReducer con:' + action.type + ' y abajo esta el payload')
            console.log(action.payload)
            return{
                ...state,
                carrouselCities : action.payload
            }
        case "GET_ALL_CITIES":
            return{
                ...state,
                cities: action.payload,
                auxiliar:action.payload

            }
        case "FILTER_CITIES":
            console.log('REDUCER: estoy en citiesReducer con:' + action.type + ' y abajo esta el payload')
            console.log(action.payload)
            const filteredCities = action.payload.array.filter(city => city.name.toLowerCase().startsWith(action.payload.inputText) || city.country.toLowerCase().startsWith(action.payload.inputText))
            return{
                ...state,
                cities: filteredCities
            }
        case "GET_CITY":
            console.log('REDUCER: estoy en citiesReducer con:' + action.type + ' y abajo esta el payload')
            console.log(action.payload)
            return{
                ...state,
                city: action.payload
            }

        default :
            return state
    }
}

export default citiesReducer