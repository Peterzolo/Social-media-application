import { combineReducers } from "redux";
import { authReducer, registerReducer } from "./authReducers/authReducers";



export const rootReducer = combineReducers({
    userAuth : authReducer,
    userRegister : registerReducer
})