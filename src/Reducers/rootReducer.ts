import { combineReducers } from "redux";
import cmsReducers from "./cmsReducer"

const rootReducer = combineReducers ({
    payload: cmsReducers
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;