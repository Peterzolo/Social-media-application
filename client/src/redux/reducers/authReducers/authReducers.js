import {
  AUTH_REQUEST_FAILED,
  AUTH_REQUEST_START,
  AUTH_REQUEST_SUCCESSFUL,
  SIGN_UP_REQUEST_FAILED,
  SIGN_UP_REQUEST_START,
  SIGN_UP_REQUEST_SUCCESSFUL
} from "../../constant/authConstants";

export const authReducer = (
  state = { userInfo: null, isLoading: false, error: false },
  action
) => {
  switch (action.type) {
    case AUTH_REQUEST_START:
      return { ...state, isLoading: true };

    case AUTH_REQUEST_SUCCESSFUL:
      return { ...state, isLoading: false, userInfo: action.payload };

    case AUTH_REQUEST_FAILED:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};

// export const registerReducer = (
//   state = { registerData: null, isLoading: false, error: false },
//   action
// ) => {
//   switch (action.type) {
//     case SIGN_UP_REQUEST_START:
//       return { ...state, isLoading: true };

//     case SIGN_UP_REQUEST_SUCCESSFUL:
//       return { ...state, isLoading: false, registerData: action.payload };

//     case SIGN_UP_REQUEST_FAILED:
//       return { ...state, isLoading: false, error: action.payload };

//     default:
//       return state;
//   }
// };

export const registerReducer = (
  state = { userInfo: "", isLoading: false, error: false },
  action
) => {
  switch (action.type) {
    case SIGN_UP_REQUEST_START:
      return { ...state, isLoading: true, error: false };
    case SIGN_UP_REQUEST_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        userInfo: action.payload,
        error: false
      };
    case SIGN_UP_REQUEST_FAILED:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
