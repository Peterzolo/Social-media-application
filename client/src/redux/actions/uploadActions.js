import {
  POST_UPLOAD_REQUEST_FAILED,
  POST_UPLOAD_REQUEST_START,
  POST_UPLOAD_REQUEST_SUCCESS,
  UPLOAD_REQUEST_FAILED,
  UPLOAD_REQUEST_START,
  UPLOAD_REQUEST_SUCCESS
} from "../constant/uploadConstants.js";
import * as UploadApi from "../endpoint/uploadEndpoint.js";

// export const imageUploadAction = data => async dispatch => {
//   dispatch({ type: UPLOAD_REQUEST_START });
//   try {
//     const { data } = await UploadApi.setUpload(data);
//     dispatch({ type: UPLOAD_REQUEST_SUCCESS, payload: data });
//     localStorage.setItem("upload", JSON.stringify(data));
//     // navigate("../home", { replace: true });
//   } catch (error) {
//     dispatch({
//       type: UPLOAD_REQUEST_FAILED,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message
//     });
//   }
// };

export const imageUploadAction = data => async dispatch => {
  try {
    console.log("Image upload Action start ho gya hy");
    await UploadApi.setUpload(data);
  } catch (error) {
    console.log(error);
  }
};

export const uploadPost = data => async dispatch => {
  dispatch({ type: POST_UPLOAD_REQUEST_START });
  try {
    const newPost = await UploadApi.setUploadPost(data);
    dispatch({ type: POST_UPLOAD_REQUEST_SUCCESS, payload: newPost.result });
  } catch (error) {
    console.log(error);
    dispatch({
      type: POST_UPLOAD_REQUEST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
