import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import userReducer from './user/user.reducer';
import trackerReducer from './tracker/tracker.reducer';
import directoryReducer from './directory/directory.reducer';
import categoryReducer from './category/category.reducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['tracker']
};

const rootReducer = combineReducers({
    user: userReducer,
    tracker: trackerReducer,
    directory: directoryReducer,
    categories: categoryReducer
});

export default persistReducer(persistConfig,rootReducer);