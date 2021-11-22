import {useEffect, useState} from 'react'

function SingleSlide() {
    const [array,setArray] = useState([{name:'',country:'',image:''}])


    // se simula un fetch con los datos de las ciudades usando el useEffect que simula el ComponenDidMount
    useEffect(()=>{
        // aca se hacen los fetch, ya que se ejecuta una vez
         const citiesArray = [
        {
          name: "Bangkok",
          country: "Thailand",
          image: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-bangkok-thailand.jpg",
        },
        {
          name: "Delhi",
          country: "India",
          image: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-delhi-india.jpg",
        },
        {
          name: "Dubai",
          country: "United Arab Emirates",
          image: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-dubai-united-arab-emirates.jpg",
        },
        {
          name: "Hong Kong",
          country: "China",
          image: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-hong-kong.jpg",
        },
        {
          name: "Istanbul",
          country: "Turkey",
          image: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-istanbul-turkey.jpg",
        },
        {
          name: "Kuala Lumpur",
          country: "Malaysia",
          image: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-kuala-lumpur-malaysia.jpg",
        },
        {
          name: "London",
          country: "England",
          image: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-london-england.jpg",
        },
        {
          name: "Macau",
          country: "China",
          image: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-macau-china.jpg",
        },
        {
          name: "New York",
          country: "United States",
          image: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-new-york-city.jpg",
        },
        {
          name: "Paris",
          country: "France",
          image: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-paris-france.jpg",
        },
        {
          name: "Tokyo",
          country: "Japan",
          image: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-tokyo-japan.jpg",
        },
        {
          name: "Rome",
          country: "Italy",
          image: "https://www.planetware.com/wpimages/2020/03/world-most-visited-cities-rome-italy.jpg",
        },
      ];
        simulateFetch(citiesArray)      
    },[])
    
    const simulateFetch = (list) =>{
        setArray(list)
    }

//    aca tengo que retornar un slide item con 4 cards. buscar el slider de ract bootstrap y adjuntarle 4 cartas de bootstrap. la idea es
// que se renderice el componente SingleSlide una vez al inicio, cuando pasa cierto tiempo y cuando se le da click a las flechitas. por lo tanto, 
// este componente deberia acoplarse al MultipleRows, dentro del papa carrousel, ya que no es necesario re renderizar el titulo principal del carrousel
// sino que solamente las imagenes.

  return (
      
  
  
  <div>
     {console.log('me renderice')}
          <img src={array[0].image} alt="Bangkok"></img>
          
          
          
         
      
  </div>)
}

export default SingleSlide;
