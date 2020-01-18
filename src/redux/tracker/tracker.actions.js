import TrackerActionTypes from './tracker.types';

export const toggleTrackerHidden = ()=>({
    type: TrackerActionTypes.TOGGLE_TRACKER_HIDDEN
});
export const addItem = item=>{
    return {
        type: TrackerActionTypes.ADD_ITEM,
        payload: item
    };
};