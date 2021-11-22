import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Outlet, Link } from "react-router-dom";





function App() {
  return (
    <div className="App">       
       <Home />    

       {/* <Link to="/cities">Cities</Link> */}
       <Outlet />
    </div>
  );
}

export default App;
