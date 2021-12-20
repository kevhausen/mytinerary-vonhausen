import axios from 'axios'

const interactionActions = {
    setLike : (userId, itineraryId,likeExist)=>{

        return async (dispatch) => {
            let response = await axios.put("http://localhost:4000/api/interaction/likes",{userId,itineraryId,likeExist},{new:true})
            // en el payload deberia poner el itinerario actualizado
            console.log('ACTION: este es el response.data.response.likes que llega del findOneAndUpdate')
            console.log(response.data.response.likes)

            dispatch({ type: "SET_LIKE", payload: response.data.response });
          };

    }
}

export default interactionActions