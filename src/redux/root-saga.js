import {all,call} from 'redux-saga/effects';
import {fetchTrackerListStart,trackerSagas} from './tracker/tracker.sagas';
import {userSagas} from './user/user.sagas';


export default function* rootSaga()
{
    yield all([        
        call(userSagas),
        call(trackerSagas)
    ]);
}