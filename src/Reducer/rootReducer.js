import { combineReducers } from 'redux';

import UserReducer from './userReducer';
import counterReducer from './counterReducer';


const rootReducer = combineReducers({

    counter: counterReducer,
    user:UserReducer,

});

export default rootReducer;