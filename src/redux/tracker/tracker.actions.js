import TrackerActionTypes from './tracker.types';
import {firestore,trackersList} from '../../firebase/firebase.utils';

export const toggleTrackerHidden = ()=>({
    type: TrackerActionTypes.TOGGLE_TRACKER_HIDDEN
});
export const addItemSuccess = ()=>{
    return {
        type: TrackerActionTypes.ADD_ITEM_SUCCESS,
        payload: true
    };
};
export const addItemFailure = error=>{
    return {
        type: TrackerActionTypes.ADD_ITEM_FAILURE,
        payload: error
    };
};
export const addItemStart = (itemObject)=>({
    type: TrackerActionTypes.ADD_ITEM_START,
    payload: itemObject
});
export const clearItemFromListStart = (date)=>{
    return{
        type: TrackerActionTypes.CLEAR_ITEM_FROM_LIST_START,
        payload: date
    };
}
export const clearItemFromListSuccess = (date) =>{    
    return{
        type: TrackerActionTypes.CLEAR_ITEM_FROM_LIST_SUCCESS,
        payload: date
    };
};
export const clearItemFromListFailure = error =>{    
    return{
        type: TrackerActionTypes.CLEAR_ITEM_FROM_LIST_FAILURE,
        payload: error
    };
};

export const fetchTrackersListStart = ()=>{
    return {
        type: TrackerActionTypes.FETCH_TRACKERS_START
    };
};
export const fetchTrackersSuccess = (trackers)=>{
    return {
        type: TrackerActionTypes.FETCH_TRACKERS_SUCCESS,
        payload: trackers
    };
};
export const fetchTrackersFailure = (errorMessage)=>{
    return {
        type: TrackerActionTypes.FETCH_TRACKERS_FAILURE,
        payload: errorMessage
    };
};
export const fetchTrackersStartAsync = ()=>{
    return dispatch=>{
        const trackersRef = firestore.collection('trackers');
        dispatch(fetchTrackersListStart);
        trackersRef.orderBy('date','desc').get()
        .then(snapshot=>{            
            const trackersMap = trackersList(snapshot);            
            dispatch(fetchTrackersSuccess(trackersMap));
        })
        .catch(err=>dispatch(fetchTrackersFailure(err.message)));
    };
};