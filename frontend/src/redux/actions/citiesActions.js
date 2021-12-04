import axios from 'axios'

const citiesActions={

    getCities: () =>{
        console.log('ACTION: se ejecuta la action getCities() (osea que llega una peticion de action desde el component)')

        return async (dispatch) =>{
            let respuesta = await axios.get('http://localhost:4000/api/carrousel-cities')
            let info = respuesta.data.response.carrouselCities
            console.log('ACTION: se despacha lo obtenido por axios.get (longitud del array es :' + info.length +') al reducer')
            dispatch({type:"GET_CARROUSEL_CITIES", payload: info})
        }


    },
    getAllCities : () =>{
        return async(dispatch) =>{
            let response = await axios.get('http://localhost:4000/api/cities')
            let info = response.data.response.cities
            dispatch({type:"GET_ALL_CITIES", payload:info})
        }
    },
    setFilter : (inputText) =>{
        
        return(dispatch) =>{
            console.log('ACTION: esta llegando input del usuario: ' + inputText)
            dispatch({type:"FILTER_CITIES", payload:inputText})
        }
    }
}

export default citiesActions