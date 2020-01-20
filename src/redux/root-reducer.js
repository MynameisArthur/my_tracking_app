import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import userReducer from './user/user.reducer';
import trackerReducer from './tracker/tracker.reducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['tracker']
};

const rootReducer = combineReducers({
    user: userReducer,
    tracker: trackerReducer
});

export default persistReducer(persistConfig,rootReducer);