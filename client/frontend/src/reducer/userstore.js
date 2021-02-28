import {Alert} from 'react-alert'

const intialState = {
    token: localStorage.getItem("token", ""),
    isLogin: localStorage.getItem("isLogin", false),
    name: localStorage.getItem("name", ""),
    isAuthenticated: null,
    isLoading: false,
    user: null,
  };
  
  export default function (state = intialState, action) {
    switch (action.type) {
      case "USER_LOADING":
        return {
          ...state,
          isLoading: true,
        };
      case "USER_LOADED":
        console.log("loaded",action.payload);
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          user: action.payload,
        };
      
      case "REGISTER_SUCCESS":
        alert("You are registered!!")
        localStorage.setItem("name", action.payload.user.name);
        //     localStorage.setItem("isLogin", true);
        console.log(action.payload)
        return {
          ...state,
          ...action.payload.user,
          isAuthenticated: true,
          isLoading: false,
        };
      case "LOGIN_SUCCESS":
          alert("successfully logged in!!")
        localStorage.setItem("name", action.payload.user.name);
        //     localStorage.setItem("isLogin", true);
        console.log(action.payload)
        return {
          ...state,
          ...action.payload.user,
          isAuthenticated: true,
          isLoading: false,
        };
      case "LOGIN_FAIL":
        alert("user not found");
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          isLoading: false,
        };
      case "REGISTER_FAIL":
        alert("Error in register or check you are registered already by logging in!!")
      case "AUTH_ERROR":
      case "LOGOUT_SUCCESS":
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          isLoading: false,
        };
      default:
        return state;
    }
  }
  