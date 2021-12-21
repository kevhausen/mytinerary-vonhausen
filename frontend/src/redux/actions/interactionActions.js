import axios from 'axios'

const interactionActions = {
    setLike : (userId, itineraryId,likeExist)=>{

        return async (dispatch) => {
            let response = await axios.put("http://localhost:4000/api/interaction/likes",{userId,itineraryId,likeExist},{new:true})
            dispatch({ type: "SET_LIKE", payload: response.data.response });
          };

    }
}

export default interactionActions