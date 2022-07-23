import {
  UPLOAD_REQUEST,
  UPLOAD_REQUEST_FAILED,
  UPLOAD_REQUEST_SUCCESS
} from "../constant/uploadContants.js";
import * as UploadApi from "../endpoint/uploadEndpoint.js";

// export const imageUploadAction = data => async dispatch => {
//   try {

//    const {data} = await UploadApi.setUpload(data.result);
//     console.log('DATA RESULT IMAGE',data)

//   } catch (error) {
//     console.log(error);
//   }
// };

export const imageUploadAction = FormData => async dispatch => {
  dispatch({ type: UPLOAD_REQUEST });
  try {
    const { data } = await UploadApi.setUpload(FormData);
    dispatch({ type: UPLOAD_REQUEST_SUCCESS, payload: data.result });
    console.log("DATA  UPLOAD", data.result);
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
