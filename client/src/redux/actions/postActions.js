import {
  POST_UPLOAD_REQUEST_FAILED,
  POST_UPLOAD_REQUEST_START,
  POST_UPLOAD_REQUEST_SUCCESS,
  TIMELINE_POSTS_FAILED,
  TIMELINE_POSTS_REQUEST,
  TIMELINE_POSTS_SUCCESS
} from "../constant/postConstants";
import * as postApi from "../endpoint/postEndpoint";

export const postUploadAction = FormData => async dispatch => {
  dispatch({ type: POST_UPLOAD_REQUEST_START });
  try {
    const { data } = await postApi.setUploadPost(FormData);
  
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
export const getTimelinePostAction = id => async dispatch => {
  dispatch({ type: TIMELINE_POSTS_REQUEST });
  try {
    const { data } = await postApi.setTimeLinePost(id);
    dispatch({ type: TIMELINE_POSTS_SUCCESS, payload: data.result });
  } catch (error) {
    dispatch({
      type: TIMELINE_POSTS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};



