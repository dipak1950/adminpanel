import { combineReducers } from "redux";
import ProductReducer from "./Products.Reducer";
import AuthReducer from "../Reducer/Auth.Reducer"

const rootReducer = combineReducers({
    ProductReducer, AuthReducer
})

export default rootReducer;