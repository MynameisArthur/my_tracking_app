import {takeLatest,call,put,all} from 'redux-saga/effects';
import {firestore,trackersList,removeTrackerDocument} from '../../firebase/firebase.utils';
import TrackerActionTypes from './tracker.types';
import {
    fetchTrackersSuccess,
    fetchTrackersFailure,
    clearItemFromListSuccess,
    clearItemFromListFailure
} from './tracker.actions';

export function* fetchTrackersAsync()
{
    try{
        const trackersRef = firestore.collection('trackers');   
        const snapshot = yield trackersRef.orderBy('date','desc').get();
        const trackersMap = yield call(trackersList,snapshot);
        yield put(fetchTrackersSuccess(trackersMap));
    }catch(error)
    {
        yield put(fetchTrackersFailure(error.message));        
    }
}

export function* fetchTrackerListStart()
{
    yield takeLatest(TrackerActionTypes.FETCH_TRACKERS_START,fetchTrackersAsync);
}
export function* clearItem(date,user)
{
    try{
        yield removeTrackerDocument(date,user);
        yield put(clearItemFromListSuccess());
    }catch(error)
    {
        yield put(clearItemFromListFailure(error));
    }
}
export function* onClearTrackerStart()
{
    yield takeLatest(TrackerActionTypes.CLEAR_ITEM_FROM_LIST_START,clearItem);
}

export function* trackerSagas()
{
    yield all([
        call(fetchTrackerListStart),
        call(onClearTrackerStart),
    ]);
}