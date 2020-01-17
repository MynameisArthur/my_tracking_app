import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './tracker-dropdown.styles.sass';

const TrackerDropdown =()=> {
    return (
        <div className="tracker-dropdown">
            <div className="tracker-items"></div>
            <CustomButton>MANAGE TRACKERS</CustomButton>
        </div>
    )
};
export default TrackerDropdown;
