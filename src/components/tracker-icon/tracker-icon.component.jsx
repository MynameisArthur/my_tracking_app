import React from 'react';
import './tracker-icon.styles.sass';
import {ReactComponent as TrackerIcon} from '../../assets/map.svg';

const TrackerButton = ()=>{
    return(
        <div className="tracker-icon">
            <TrackerIcon className="category-icon"/>            
        </div>
    );
};

export default TrackerButton;
