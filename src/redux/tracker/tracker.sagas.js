import {takeEvery} from 'redux-saga/effects';

import TrackerActionTypes from './tracker.types';

export function* fetchTrackersAsync()
{
    yield console.log('---------I\'m fired!');    
}

export function* fetchTrackerListStart()
{
    yield takeEvery(TrackerActionTypes.FETCH_TRACKERS_START,fetchTrackersAsync);
}