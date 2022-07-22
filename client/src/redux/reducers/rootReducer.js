import { combineReducers } from "redux";
import { authReducer, registerReducer } from "./authReducers/authReducers";
import { postReducer } from "./postReducer/postReducer";

export const rootReducer = combineReducers({
  userAuth: authReducer,
  userRegister: registerReducer,
  post: postReducer
});
