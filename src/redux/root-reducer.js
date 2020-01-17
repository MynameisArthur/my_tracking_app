import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import trackerReducer from './tracker/tracker.reducer';

export default combineReducers({
    user: userReducer,
    tracker: trackerReducer
});