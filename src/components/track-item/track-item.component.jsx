import React from 'react';
import './track-item.styles.sass';

const TrackItem = ({item:{item,category,date}}) =>{
    return (
        <div className="track-item"> 
            <div className="item-details">
                <span className="name">{item}</span>
                <span className="category">{category}</span>
                <span className="date">{date.toLocaleTimeString()}</span>
            </div>
        </div>
    );
};
export default TrackItem;