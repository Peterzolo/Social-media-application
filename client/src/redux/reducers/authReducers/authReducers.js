import {
    AUTH_REQUEST_FAILED,
    AUTH_REQUEST_START,
    AUTH_REQUEST_SUCCESSFUL
  } from "../../constant/authConstants";
  
  export const authReducer = (
    state = { authData: null, isLoading: false, error: false },
    action
  ) => {
    switch (action.type) {
      case AUTH_REQUEST_START:
        return { ...state, isLoading: true, error: false };
  
      case AUTH_REQUEST_SUCCESSFUL:
        localStorage.setItem("profile", JSON.stringify({...action?.payload}));
  
        return { ...state, isLoading: false, authData: action.payload };
  
      case AUTH_REQUEST_FAILED:
        return { ...state, isLoading: false, error: action.payload };
  
      default:
        return { state };
    }
  };
  