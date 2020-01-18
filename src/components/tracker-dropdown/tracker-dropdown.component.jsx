import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './tracker-dropdown.styles.sass';
import TrackItem from '../track-item/track-item.component';
import {connect} from 'react-redux';

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

const mapStateToProps = ({tracker: {trackerItems}})=>{
    return{
        trackerItems
    };
};

export default connect(mapStateToProps)(TrackerDropdown);
