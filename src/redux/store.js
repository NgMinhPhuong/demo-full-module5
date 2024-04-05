import {createStore,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import { rootReducer } from './reducer/rootReducer'
const mdw = [thunk]
export const store = createStore(rootReducer, {}, applyMiddleware(...mdw))