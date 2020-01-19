import {createSelector} from 'reselect';

const selectTracker = state => state.tracker;
export const selectTrackerItems = createSelector(
    [selectTracker],
    (tracker)=> tracker.trackerItems
);
export const selectTrackerHidden = createSelector(
    [selectTracker],    
    tracker => tracker.hidden
);
