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
export const clearItemFromList = item =>{
    
    return{
        type: TrackerActionTypes.CLEAR_ITEM_FROM_LIST,
        payload: item
    };
};