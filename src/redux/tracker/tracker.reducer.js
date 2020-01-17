import TrackerActionTypes from './tracker.types';
const INITIAL_STATE = {
    hidden: true
};

const trackerReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case TrackerActionTypes.TOGGLE_TRACKER_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    }
};
export default trackerReducer;

