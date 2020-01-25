import {createSelector} from 'reselect';

const selectTrackers = state => state.tracker;

export const selectTrackerItems = createSelector(
    [selectTrackers],
    (tracker)=> tracker.trackerItems
);
export const selectTrackerHidden = createSelector(
    [selectTrackers],    
    tracker => tracker.hidden
);
export const selectItemInCategory = categoryUrlParam => createSelector(
    [selectTrackers],
    items => items.trackerItems.filter(item=>item.category === categoryUrlParam)
);

export const selectTrackersIsFetching = createSelector(
    [selectTrackers],
    trackers => trackers.isFetching
);