// import axios from "axios";
import {
  AUTH_REQUEST_FAILED,
  AUTH_REQUEST_START,
  AUTH_REQUEST_SUCCESSFUL,
  SIGN_UP_REQUEST_FAILED,
  SIGN_UP_REQUEST_START,
  SIGN_UP_REQUEST_SUCCESSFUL
} from "../constant/authConstants.js";
import * as AuthApi from "../endpoint/endpoints.js";

export const loginAction = formData => async dispatch => {
  dispatch({ type: AUTH_REQUEST_START });
  try {
    const { data } = await AuthApi.setLogin(formData);
    dispatch({ type: AUTH_REQUEST_SUCCESSFUL, payload: data.result });

    localStorage.setItem("userInfo", JSON.stringify(data));
    // navigate("../home", { replace: true });
  } catch (error) {
    dispatch({
      type: AUTH_REQUEST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const signUpAction = formData => async dispatch => {
  dispatch({ type: SIGN_UP_REQUEST_START });
  try {
    const { data } = await AuthApi.setRegister(formData);
    dispatch({ type: SIGN_UP_REQUEST_SUCCESSFUL, payload: data.result });
    dispatch({ type: AUTH_REQUEST_SUCCESSFUL, payload: data.result });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: SIGN_UP_REQUEST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
