import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { memberReducer } from "./memberReducer";

const allReducers = combineReducers({
    login: loginReducer,
    member: memberReducer
})

export default allReducers