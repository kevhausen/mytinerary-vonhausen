import axios from 'axios'

const interactionActions = {
    setLike : (userId, itineraryId,likeExist)=>{
        return async (dispatch) => {
            let response = await axios.put("http://localhost:4000/api/interaction/likes",{userId,itineraryId,likeExist},{new:true})
            dispatch({ type: "SET_LIKE", payload: response.data.response });
          };
    },
    getCommentsByItineraryId: (itineraryId, comments)=>{
        return async (dispatch)=>{
            
            let response = await axios.get("http://localhost:4000/api/interaction/comments/"+itineraryId)
            console.log(response.data.response)
            dispatch({type: "GET_COMMENTS", payload: response.data.response})
        }
    },
    uploadComment : (user, itinerary, message)=>{
        return async (dispatch)=>{
            console.log('esto llega del componente')
            console.log(user + itinerary + message)
            let response = await axios.post("http://localhost:4000/api/interaction/comments/", {user,itinerary,message})
            console.log('este es el response')
            console.log(response)
            dispatch({type: "UPLOAD_COMMENT", payload: response.data.response})
        }
    }
}

export default interactionActions