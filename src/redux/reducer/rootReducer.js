import { combineReducers } from "redux";
import {reducer1} from './reducer1'
import { reducer2 } from "./reducer2";
export const rootReducer = combineReducers({
    test1: reducer1,
    test2: reducer2
})