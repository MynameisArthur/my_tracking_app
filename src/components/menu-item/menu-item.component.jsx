import React from 'react';
import './menu-item.styles.sass';
import {withRouter} from 'react-router-dom';

const  MenuItem = ({title,imageUrl,history,linkUrl,match}) => {    
    return (
    <div 
        className="menu-item" 
        onClick={()=>history.push(`${match.url}${linkUrl}`)}
        >
        <div style={{backgroundImage: `url(${imageUrl})`}}  className="background-image"></div>
        <div className="content">
            <h3 className="title">{title}</h3>
            <span className="subtitle">tracking</span>
        </div>
    </div>
    );
};
export default withRouter(MenuItem);
