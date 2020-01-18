import React from 'react';
import './tracker-icon.styles.sass';
import {ReactComponent as TrackerIcon} from '../../assets/map.svg';
import {connect} from 'react-redux';
import {toggleTrackerHidden} from '../../redux/tracker/tracker.actions';
import { selectTrackerItems } from '../../redux/tracker/tracker.selectors';

const TrackerButton = ({toggleTrackerHidden})=>{
    return(
        <div className="tracker-icon" onClick={toggleTrackerHidden}>
            <TrackerIcon className="category-icon"/>            
        </div>
    );
};

const mapStateToProps = (state)=>{
    return {
        trackerItems: selectTrackerItems(state)
    };
};

const mapDispatchToProps = (dispatch)=>{
    return {
        toggleTrackerHidden: ()=> dispatch(toggleTrackerHidden())
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(TrackerButton);
