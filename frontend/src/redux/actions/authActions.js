import axios from "axios";

const authActions = {
    getCountries :() =>{
        return async(dispatch)=>{
            let response = await axios.get("http://localhost:4000/api/countries");
            dispatch({type:"GET_COUNTRIES", payload: response.data.response})

        }

    }
}

export default authActions