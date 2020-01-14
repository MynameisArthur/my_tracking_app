import React from 'react';
import './menu-item.styles.sass';

const  MenuItem = ({title,imageUrl}) => {    
    return (
    <div className="menu-item">
        <div style={{backgroundImage: `url(${imageUrl})`}}  className="background-image"></div>
        <div className="content">
            <h3 className="title">{title}</h3>
            <span className="subtitle">TRACK</span>
        </div>
    </div>
    );
};
export default MenuItem;
