import {takeLatest,call,put,all,select} from 'redux-saga/effects';
import {firestore,trackersList,removeTrackerDocument,createTrackerDocument} from '../../firebase/firebase.utils';
import TrackerActionTypes from './tracker.types';
import {selectCurrentUser} from '../user/user.selectors';
import {
    fetchTrackersSuccess,
    fetchTrackersFailure,    
    clearItemFromListSuccess,
    clearItemFromListFailure,
    addItemSuccess,
    addItemFailure
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
export function* clearItem({payload})
{   
    const user = yield select(selectCurrentUser);      
    if(user)
    {    
        try{ 
            yield call(removeTrackerDocument,{payload,user});
            yield put(clearItemFromListSuccess(payload));
        }catch(error){
            yield put(clearItemFromListFailure(error));
        }
    }
}
export function* onClearTrackerStart()
{
    yield takeLatest(TrackerActionTypes.CLEAR_ITEM_FROM_LIST_START,clearItem);
}

export function* addItem(objectItem) 
{
    const user = yield select(selectCurrentUser); 
    if(user)
    {
        const uid = user.id;
        try{ 
            yield call(createTrackerDocument,{uid,objectItem});                      
            yield put(addItemSuccess(objectItem.payload));
        }catch(error){
            yield put(addItemFailure(error));
        }
    }
}

export function* onAddItemStart()
{
    yield takeLatest(TrackerActionTypes.ADD_ITEM_START,addItem);
}


export function* trackerSagas()
{
    yield all([
        call(fetchTrackerListStart),
        call(onClearTrackerStart),
        call(onAddItemStart),
    ]);
}