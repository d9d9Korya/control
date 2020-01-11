import {
     combineReducers
} from 'redux';
import usersReducers from "../reducers/usersReducer.js";
import loginReducer from "../reducers/loginReducer";
import {
     createStore
} from 'redux';

let reducer = combineReducers({
     usersReducers,loginReducer
});
let store = createStore(reducer);

export default store;