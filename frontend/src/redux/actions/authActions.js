import axios from "axios";

const authActions = {
  getCountries: () => {
    return async (dispatch) => {
      let response = await axios.get("http://localhost:4000/api/countries");
      dispatch({ type: "GET_COUNTRIES", payload: response.data.response });
    };
  },
  saveUser: (user) => {
    return async (dispatch) => {
      let response = await axios.post(
        "http://localhost:4000/api/auth/signup",
        user
      );
      if (response.data.response) {
        localStorage.setItem("token", response.data.token);
      }

      dispatch({
        type: "SAVE_USER",
        payload: { info: response.data, loading: false },
      });
    };
  },
  signIn: (user) => {
    return async (dispatch) => {
      let response = await axios.post(
        "http://localhost:4000/api/auth/signin",
        user
      );
      if (response.data.response) {
        localStorage.setItem("token", response.data.token);
      }
      dispatch({
        type: "SIGN_IN",
        payload: { info: response.data, loading: false },
      });
    };
  },
  setLoad: (load) => {
    return (dispatch) => {
      dispatch({ type: "SET_LOAD", payload: load });
    };
  },
  modifyUser: (user) => {
    return async (dispatch) => {
      let response = await axios.put(
        "http://localhost:4000/api/auth/signup",
        user
      );
      dispatch({ type: "MODIFY_USER", payload: response.data });
    };
  },
  logOut: () => {
    return (dispatch) => {
      localStorage.clear();
      alert("Logging out...")
      dispatch({ type: "LOG_OUT", payload: {} });
    };
  },
  authUser: () => {
    return async (dispatch) => {
      try {
        const token = localStorage.getItem("token");
        const user = await axios.get("http://localhost:4000/api/auth/user", {
          headers: { Authorization: "Bearer " + token },
        });
        dispatch({ type: "IS_AUTH", payload: user.data.response });
        return { response: user.data.response };
      } catch (e) {
        return { error: "Unauthorized user, try login again" };
      }
    };
  },
  resetErrors: () => {
    return (dispatch) => {
      dispatch({ type: "RESET_ERROR", payload: {} });
    };
  },
};

export default authActions;
