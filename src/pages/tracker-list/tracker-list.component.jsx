import React from 'react';
import {connect} from 'react-redux';
import './tracker-list.styles.sass';


const TrackerList = ({trackerItems})=> {
     
    return (
        <div className="tracker-list">
            {
                trackerItems && trackerItems.map((trackerItem,index)=>{
                    return (
                    <div key={trackerItem.item+index} className="tracker-item">
                        <p><strong>title:</strong> {trackerItem.item}</p>
                        <p><strong>date:</strong> {trackerItem.date.toLocaleString()}</p>
                        <p><strong>description:</strong> {trackerItem.description}</p>
                    </div>
                    );
                })
            }
        </div>
    );
};
const mapStateToProps = ({tracker:{trackerItems}})=>{
    return {
        trackerItems
    };
};

export default connect(mapStateToProps)(TrackerList);