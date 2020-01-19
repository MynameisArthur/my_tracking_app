import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './tracker-dropdown.styles.sass';
import TrackItem from '../track-item/track-item.component';
import {connect} from 'react-redux';
import {selectTrackerItems} from '../../redux/tracker/tracker.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleTrackerHidden} from '../../redux/tracker/tracker.actions';

const TrackerDropdown =({trackerItems,history,dispatch})=> {
       
    return (
        <div className="tracker-dropdown">
            <div className="tracker-items">
                {
                    trackerItems.length ? 
                    trackerItems.map((trackerItem,i)=>(<TrackItem key={trackerItem.item+i} item={trackerItem}/>))
                    :
                    <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton 
            onClick={
                ()=> {
                    history.push('/tracker_list');
                    dispatch(toggleTrackerHidden());
                }
            } 
            >TRACKERS LIST</CustomButton>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    trackerItems: selectTrackerItems  
});


export default withRouter(connect(mapStateToProps)(TrackerDropdown));
