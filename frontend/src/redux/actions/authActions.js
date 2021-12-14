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
            let response = await axios.post("http://localhost:4000/api/auth/signup",user)
            if(!response.data.response.googleUser){
                localStorage.setItem('token',response.data.token)         
                console.log("SE GUARDA TOKEN:"+response.data.token) 
            }
            console.log("ACTION: esto llega del response, y se envia al reducer")
            console.log(response.data)
            dispatch({type:"SAVE_USER", payload: {info: response.data, loading: false}})
        }
    },
    signIn:(user)=>{
        return async(dispatch)=>{
            let response = await axios.post("http://localhost:4000/api/auth/signin",user)
            if(response.data.response){
                localStorage.setItem('token',response.data.response.token)          
            }
            console.log("ACTION: esto llega del response, y se envia al reducer")
            console.log(response.data)
            dispatch({type:"SIGN_IN", payload:{info:response.data, loading:false}})

        }
    },
    setLoad : (load)=>{
        return (dispatch)=>{
            dispatch({type:"SET_LOAD", payload: load})
        }
    },
    modifyUser : (user) =>{
        return async(dispatch)=>{
            let response = await axios.put("http://localhost:4000/api/auth/signup", user)
            console.log("ACTION: esto llega del response, y se envia al reducer")
            console.log(response.data)
            dispatch({type:"MODIFY_USER", payload: response.data})
        }
    }
}

export default authActions