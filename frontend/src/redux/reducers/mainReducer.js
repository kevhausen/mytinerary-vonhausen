import {combineReducers} from "redux"
import citiesReducer from "./citiesReducer"
import itinerariesReducer from "./itinerariesReducer"

const mainReducer = combineReducers({
    // aqui iria itineraryReducer, activityReducer (creo)
    citiesReducer,
    itinerariesReducer
})

export default mainReducer