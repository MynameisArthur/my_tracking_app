import React from 'react';
import './track-item.styles.sass';

const TrackItem = ({item:{item,category,date}}) =>{
    const formatedTime = (new Date(date)).toLocaleTimeString();
    return (
        <div className="track-item"> 
            <div className="item-details">
                <span className="name">{item}</span>
                <span className="category">{category}</span>
                <span className="date">{formatedTime}</span>
            </div>
        </div>
    );
};
export default TrackItem;