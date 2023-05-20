import { combineReducers, configurationStore } from "redux";
import authReducer from "./auth-reducer";

let reducers=combineReducers({
    auth:authReducer
});
let store = configurationStore(reducers);

window.store=stote;

export default store;