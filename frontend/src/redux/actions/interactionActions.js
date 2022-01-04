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
            dispatch({type: "GET_COMMENTS", payload: {info:response.data.response, comments}})
        }
    },
    uploadComment : (data)=>{
        return async (dispatch)=>{
            let response = await axios.post("http://localhost:4000/api/interaction/comments/", data)
            dispatch({type: "UPLOAD_COMMENT", payload: response.data.response})
        }
    },
    deleteComment : (id)=>{
        return async (dispatch)=>{
            console.log('ACTION: ESTA ES LA ID DEL COMMENT')
            console.log(id)
            let response= await axios.delete("http://localhost:4000/api/interaction/comments/"+ id)
            dispatch({type:"DELETE_COMMENT", payload: response.data.response})
        }
    },
    editComment: (data)=>{
        return async (dispatch)=>{

            let response = await axios.put("http://localhost:4000/api/interaction/comments/", data)


            dispatch({type:"EDIT_COMMENT", payload: response.data.response})
        }
    }
}

export default interactionActions