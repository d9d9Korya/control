import {
     combineReducers
} from 'redux';
import usersReducers from "../reducers/usersReducer.js";
import {
     createStore
} from 'redux';

let reducer = combineReducers({
     usersReducers
});
let store = createStore(reducer);

export default store;