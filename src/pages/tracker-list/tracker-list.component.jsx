import React from 'react';
import {connect} from 'react-redux';
import './tracker-list.styles.sass';
import {createStructuredSelector} from 'reselect';
import {selectTrackerItems} from '../../redux/tracker/tracker.selectors';
import TrackerListItem from '../../components/tracker-list-item/tracker-list-item.component';

const TrackerList = ({trackerItems})=> {
    return (
        <div className="tracker-list">
            <div className="tracker-header">
                <p>title</p>
                <p>date</p>
                <p>category</p>
                <p>description</p>
                <p>remove</p>
            </div>
            {
                trackerItems && trackerItems.map((trackerItem,index)=>{
                    return(
                        <TrackerListItem key={trackerItem.item+index} trackerItem={trackerItem}/>
                    );
                })
            }       
        </div>
    );
};
const mapStateToProps = createStructuredSelector({
    trackerItems: selectTrackerItems
});

export default connect(mapStateToProps)(TrackerList);