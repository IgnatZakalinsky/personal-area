import thunkMiddleware from "redux-thunk"
import {combineReducers, createStore, applyMiddleware} from "redux";
import {IS_DEVELOPER_VERSION} from "../../p0-config/config";
import {booleanReducer} from "./booleans/booleanReducer";
import {profileReducer} from "../../p3-features/f1-auth/a2-profile/p2-bll/profileReducer";

const reducers = combineReducers({
    booleans: booleanReducer, // boolean values for all project
    profile: profileReducer,

});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

export type AppStoreType = ReturnType<typeof reducers>

if (IS_DEVELOPER_VERSION) {
    // @ts-ignore
    window.store = store; // for developers
}
