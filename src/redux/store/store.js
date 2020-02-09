import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from '../root-reducer';
import {persistStore} from 'redux-persist'; 
import createSagaMiddleware from 'redux-saga';
import {fetchTrackerListStart} from '../tracker/tracker.sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development')
{
    middlewares.push(logger);
}
export const store = createStore(rootReducer,applyMiddleware(...middlewares));
sagaMiddleware.run(fetchTrackerListStart);
export const persistor = persistStore(store);
