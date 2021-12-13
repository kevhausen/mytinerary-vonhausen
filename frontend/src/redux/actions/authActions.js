import axios from "axios";

const authActions = {
    getCountries :() =>{
        return async(dispatch)=>{
            let response = await axios.get("http://localhost:4000/api/countries");
            dispatch({type:"GET_COUNTRIES", payload: response.data.response})

        }

    },
    saveUser :(user)=>{
        return async(dispatch)=>{
            console.log('estoy en ACTION saveUser')
            console.log(user)
            let response = await axios.post("http://localhost:4000/api/auth/signup",user)
            console.log(response.data)
            dispatch({type:"SAVE_USER", payload: response.data})
        }
    }
}

export default authActions