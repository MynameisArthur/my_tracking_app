import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './tracker-dropdown.styles.sass';
import TrackItem from '../track-item/track-item.component';
import {connect} from 'react-redux';
import {selectTrackerItems} from '../../redux/tracker/tracker.selectors';

const TrackerDropdown =({trackerItems})=> {
    return (
        <div className="tracker-dropdown">
            <div className="tracker-items">
                {
                    trackerItems.map((trackerItem,i)=>(<TrackItem key={trackerItem.item+i} item={trackerItem}/>))
                }
            </div>
            <CustomButton>TRACKERS LIST</CustomButton>
        </div>
    )
};

const mapStateToProps = (state)=>{
    return{
        trackerItems: selectTrackerItems(state)
    };
};

export default connect(mapStateToProps)(TrackerDropdown);
