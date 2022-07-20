import { combineReducers } from "redux";
import { authReducer } from "./authReducers/authReducers";



export const rootReducer = {
    auth : authReducer
}