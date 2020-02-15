import TrackerActionTypes from './tracker.types';
import UserActionTypes from '../user/user.types';
const INITIAL_STATE = {
    hidden: true,    
    trackerItems: [],
    errorMessage: undefined    
};

const trackerReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case TrackerActionTypes.TOGGLE_TRACKER_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            };
        case TrackerActionTypes.CLEAR_ITEM_FROM_LIST_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            };          
        case TrackerActionTypes.CLEAR_ITEM_FROM_LIST_SUCCESS:             
            return {
                ...state,
                trackerItems: state.trackerItems.filter(trackerItem=>trackerItem.date!==action.payload)
            };
        case TrackerActionTypes.FETCH_TRACKERS_START:
            return {
                ...state,
                isFetching: true
            };
        case TrackerActionTypes.FETCH_TRACKERS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                trackerItems: action.payload
            };
        case TrackerActionTypes.FETCH_TRACKERS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        case TrackerActionTypes.ADD_ITEM_SUCCESS:
            return {
                ...state,
                addedTracker: action.payload
            };
        case TrackerActionTypes.ADD_ITEM_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            }; 
        case UserActionTypes.SIGN_OUT_SUCCESS:   
        return {
            ...state,
            trackerItems: [],
            errorMessage: undefined
        }   
        default:
            return state;
    }
};
export default trackerReducer;

