const initialState = {
    cities : []
}


    



const citiesReducer = (state = initialState, action) =>{
    // primero se inicializa el reducer con state por defecto (tal cual se hacia con los state normales de components.)
    switch(action.type){
        case "GET_CARROUSEL_CITIES":
            console.log('REDUCER: estoy en citiesReducer con:' + action.type + ' y abajo esta el payload')
            console.log(action.payload)
            return{
                ...state,
                cities : action.payload
            }
            default :
            return state
    }
}

export default citiesReducer