

import { UPLOAD_REQUEST_FAILED, UPLOAD_REQUEST_START, UPLOAD_REQUEST_SUCCESS } from "../constant/uploadConstants.js";
import * as UploadApi from "../endpoints.js";



export const loginAction = (formData) => async dispatch => {
    dispatch({ type: UPLOAD_REQUEST_START });
    try {
      const { data } = await UploadApi.setUpload(formData);
      dispatch({ type: UPLOAD_REQUEST_SUCCESS, payload: data});
      localStorage.setItem("upload", JSON.stringify(data));
      // navigate("../home", { replace: true });
     
    } catch (error) {
      dispatch({
        type: UPLOAD_REQUEST_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      });
    }
  };