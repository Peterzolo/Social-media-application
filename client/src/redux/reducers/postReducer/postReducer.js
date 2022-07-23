import { POST_UPLOAD_REQUEST_FAILED, POST_UPLOAD_REQUEST_START, POST_UPLOAD_REQUEST_SUCCESS } from "../../constant/postConstants";


export const postReducer = (
  state = { posts: [] , isLoading: false, error: false, uploading: false },
  action
) => {
  switch (action.type) {
    // belongs to PostShare.jsx
    case POST_UPLOAD_REQUEST_START:
      return { ...state, error: false, uploading: true };
    case POST_UPLOAD_REQUEST_SUCCESS:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        uploading: false,
        error: false
      };
    case POST_UPLOAD_REQUEST_FAILED:
      return { ...state, uploading: false, error: action.payload };
    // belongs to Posts.jsx
    //   case "RETREIVING_START":
    //     return { ...state, loading: true, error: false };
    //   case "RETREIVING_SUCCESS":
    //     return { ...state, posts: action.data, loading: false, error: false };
    //   case "RETREIVING_FAIL":
    //     return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
