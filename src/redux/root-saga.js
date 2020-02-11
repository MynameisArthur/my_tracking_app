import {all,call} from 'redux-saga/effects';
import {trackerSagas} from './tracker/tracker.sagas';
import {userSagas} from './user/user.sagas';
import {categorySagas} from './category/category.sagas';

export default function* rootSaga()
{
    yield all([        
        call(userSagas),
        call(trackerSagas),
        call(categorySagas),
    ]);
}