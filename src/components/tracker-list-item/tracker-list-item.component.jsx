import React from 'react';
import './tracker-list-item.style.sass';
import {connect} from 'react-redux';
import {formatTime} from '../../redux/tracker/tracker.utils';
import {clearItemFromListStart} from '../../redux/tracker/tracker.actions'


const TrackerListItem = ({trackerItem,clearItem})=>{
    const {item,date,category,description} = trackerItem;
    const formatedTime = formatTime(new Date(date))
    return (
        <div className="tracker-item">
            <span className="name">{item}</span>
            <span className="date">{formatedTime}</span>
            <span className="category">{category}</span>
            <span className="description">{description}</span>
            <span 
                className="remove-button" 
                onClick={()=>clearItem(date)}                
                >&#10005;</span>
        </div>
    );
};

const mapStateToProps = ({user:{currentUser}})=>({
    currentUser
 });
const mapDispatchToProps = dispatch =>({
    clearItem: (date)=>dispatch(clearItemFromListStart(date))
});

export default connect(mapStateToProps,mapDispatchToProps)(TrackerListItem);