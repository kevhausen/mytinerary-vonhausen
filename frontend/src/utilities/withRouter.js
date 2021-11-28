import { useLocation, useNavigate, useParams } from 'react-router-dom'

// se reutiliza y se envuelve en el componente

// esto sirve para hacer rutas dinamicas
// primero se crea una variable en el index.js const CitiesLa = withRouter(City), donde se envuelve el componente dinamico con withRouter()
// segundo, se crea un Route en el index.js <Route path="cities/:cityName"  element={<CitiesLa />} /> , situando en element la variable envuelta en withRouter
export default function withRouter(Child){

    return (props) =>{
        // el location y navigate se pueden sacar, ya que solo necesitamos el params.
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        return <Child {...props} params = {params} navigate={navigate} location={location}/>;            
    }

}
