import axios from 'axios'

const interactionActions = {
    setLike : (userId, itineraryId,likeExist)=>{
        return async (dispatch) => {
            let response = await axios.put("https://mytinerary-vonhausen.herokuapp.com/api/interaction/likes",{userId,itineraryId,likeExist},{new:true})
            dispatch({ type: "SET_LIKE", payload: response.data.response });
          };
    },
    getCommentsByItineraryId: (itineraryId, comments)=>{
        return async (dispatch)=>{
            
            let response = await axios.get("https://mytinerary-vonhausen.herokuapp.com/api/interaction/comments/"+itineraryId)
            console.log(response.data.response)
            dispatch({type: "GET_COMMENTS", payload: {info:response.data.response, comments}})
        }
    },
    uploadComment : (data)=>{
        return async (dispatch)=>{
            let response = await axios.post("https://mytinerary-vonhausen.herokuapp.com/api/interaction/comments/", data)
            dispatch({type: "UPLOAD_COMMENT", payload: response.data.response})
        }
    },
    deleteComment : (id)=>{
        return async (dispatch)=>{
            console.log('ACTION: ESTA ES LA ID DEL COMMENT')
            console.log(id)
            let response= await axios.delete("https://mytinerary-vonhausen.herokuapp.com/api/interaction/comments/"+ id)
            dispatch({type:"DELETE_COMMENT", payload: response.data.response})
        }
    },
    editComment: (data)=>{
        return async (dispatch)=>{

            let response = await axios.put("https://mytinerary-vonhausen.herokuapp.com/api/interaction/comments/", data)


            dispatch({type:"EDIT_COMMENT", payload: response.data.response})
        }
    }
}

export default interactionActions