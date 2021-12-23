import "./App.css";
import Home from "./pages/Home";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cities from "./pages/Cities";
import Reservation from "./pages/Itineraries";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import ErrorPage from "./pages/ErrorPage";
import City from "./pages/City";
import withRouter from "./utilities/withRouter";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { connect } from "react-redux";
import authActions from "./redux/actions/authActions";
import { useEffect } from "react";

const CityDinamic = withRouter(City);

function App(props) {

  const { authUser } = props;
  useEffect(() => {
      const token =localStorage.getItem('token')
      if(token){
          authUser();
        }
  }, [authUser]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="itineraries" element={<Reservation />} />
        <Route path="contact" element={<Contact />} />
        <Route path="account" element={<Account />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="cities/:id" element={<CityDinamic />} />
        <Route path="cities" element={<Cities />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}



const mapDispatchToProps = {
  authUser: authActions.authUser,
};

export default connect(null, mapDispatchToProps)(App);
