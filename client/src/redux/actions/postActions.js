import {
  POST_UPLOAD_REQUEST_FAILED,
  POST_UPLOAD_REQUEST_START,
  POST_UPLOAD_REQUEST_SUCCESS
} from "../constant/postConstants";
import * as postApi from "../endpoint/postEndpoint";

export const postUploadAction = FormData => async dispatch => {
  dispatch({ type: POST_UPLOAD_REQUEST_START });
  try {
    const { data } = await postApi.setUploadPost(FormData);
    console.log("RESPONSE", data);
    dispatch({ type: POST_UPLOAD_REQUEST_SUCCESS, payload: data.result });
  } catch (error) {
    dispatch({
      type: POST_UPLOAD_REQUEST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
