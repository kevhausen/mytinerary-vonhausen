import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cities from "./pages/Cities";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import ErrorPage from "./pages/ErrorPage";
import City from "./pages/City"
import withRouter from "./utilities/withRouter"


const CityDinamic = withRouter(City)
// const itinerary = withRouter(Itinerary) paso 1

ReactDOM.render(
    
   
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      
      <Route path="reservation" element={<Reservation />} />
      <Route path="contact" element={<Contact />} />
      <Route path="account" element={<Account />} />
      <Route path="cities/:id"  element={<CityDinamic />} />   
      {/* <Route path="cities/:cityName/:itineraryId" element={<Itinerary />}  paso 2*/}
      <Route path="cities" element={<Cities />} />
      <Route path="*" element={<ErrorPage />}
    />
    </Routes>
    
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
