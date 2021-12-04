const initialState = {
    cities : [],
    carrouselCities :[],
    stringFilter : ''
}


    



const citiesReducer = (state = initialState, action) =>{
    // primero se inicializa el reducer con state por defecto (tal cual se hacia con los state normales de components.)
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
                cities: action.payload

            }
        case "FILTER_CITIES":
            return{
                ...state,
                stringFilter: action.payload
            }

        default :
            return state
    }
}

export default citiesReducer