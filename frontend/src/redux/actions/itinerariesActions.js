import axios from 'axios'

const itinerariesActions = {
    getItinerariesByCity : (id) =>{
        return async (dispatch) =>{
            console.log('ACTION: esta llegando esta id' + id + ' desde el component Itineraries')
            let res = await axios.get("http://localhost:4000/api/itineraries/" + id)
            let info = res.data.response.filtered
            console.log('ACTION: se envia al reducer la info de abajo')
            console.log(info)
            dispatch({type: "GET_ITINERARIES_BY_CITY", payload:info})
        }
    }

}

export default itinerariesActions