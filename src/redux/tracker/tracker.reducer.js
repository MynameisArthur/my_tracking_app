import TrackerActionTypes from './tracker.types';
const INITIAL_STATE = {
    hidden: true,
    trackerItems: []
};

const trackerReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case TrackerActionTypes.TOGGLE_TRACKER_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            };
        case TrackerActionTypes.ADD_ITEM:
            return {
                ...state,
                trackerItems: [...state.trackerItems,action.payload]
            };
        case TrackerActionTypes.CLEAR_ITEM_FROM_LIST:
            return {
                ...state,
                trackerItems: state.trackerItems.filter(trackerItem=>trackerItem.date!==action.payload.date)
            };
        default:
            return state;
    }
};
export default trackerReducer;

