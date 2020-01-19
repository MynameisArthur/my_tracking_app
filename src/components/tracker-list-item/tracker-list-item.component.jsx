import React from 'react';
import './tracker-list-item.style.sass';



const TrackerListItem = ({trackerItem:{item,date,category,description}})=>{
    const formatedTime = `${date.getUTCDate()}/${date.getUTCMonth()+1}/${date.getFullYear()} - 
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
    `;
    return (
        <div className="tracker-item">
            <span className="name">{item}</span>
            <span className="date">{formatedTime}</span>
            <span className="category">{category}</span>
            <span className="description">{description}</span>
            <span className="remove-button">&#10005;</span>
        </div>
    );
};

export default TrackerListItem;