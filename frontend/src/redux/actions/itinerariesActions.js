import axios from "axios";

const itinerariesActions = {
  getItinerariesByCity: (id) => {
    return async (dispatch) => {
      let res = await axios.get("http://localhost:4000/api/itineraries/" + id);
      let info = res.data.response.filtered;
      let loading = false;
      dispatch({ type: "GET_ITINERARIES_BY_CITY", payload: { info, loading } });
    };
  },
  setLoad: () => {
    return (dispatch) => {
      dispatch({ type: "SET_LOAD", payload: true });
    };
  },
  getActivities : (id, activities)=>{
      return async(dispatch)=>{
          let idList = [...new Set(activities.map(activity=> activity.itinerary[0]._id))]
          console.log('ACTION: esta es la lista de ids existentes')
          console.log(idList)
          let res = []
          if(idList.includes(id)){
            console.log('ACTION: se encontro un id existente. NO MOLESTAMOS A LA BASE DE DATOS')
            
            res = activities
            console.log('ACTION: la misma lista que despacho el componente, se le devuelve')
            console.log(res)
              
          }else{
              
            console.log('ACTION: el id no existe, molestamos a la base de datos')
              let resDb = await axios.post("http://localhost:4000/api/activities",{id:id})
              res = resDb.data.response
              console.log('ACTION: se obtuvo desde la DB')
              console.log(res)
          }
        //   console.log('ACTION: se cargan las actividades con id de itinerario ' + id)
        
        //   console.log(res.data.response)
          dispatch({type: "GET_ACTIVITIES", payload: {itineraryId: id, activityList: res}})
          
      }
  }
};

export default itinerariesActions;
