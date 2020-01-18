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
        default:
            return state;
    }
};
export default trackerReducer;

